import { Injectable } from '@nestjs/common';
import { GenerateRecommendationDto } from './dto/generate-recomendation.dto';
import { GenerateChallengeDto } from './dto/generate-challenge.dto';
import { InferenceClient } from '@huggingface/inference';
import { PrismaService } from '../prisma/prisma.service';
import { RECOMMENDATION_FALLBACKS } from './constants/fallbacks.constants';

@Injectable()
export class IaService {
  readonly hf = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

  constructor(private readonly prisma: PrismaService) {}

  async generateRecommendation(
    input: GenerateRecommendationDto,
  ): Promise<string> {
    const fallbacks = RECOMMENDATION_FALLBACKS;

    try {
      const chatCompletion = await this.hf.chatCompletion({
        provider: 'novita',
        model: 'deepseek-ai/DeepSeek-R1-0528',
        messages: [
          {
            role: 'system',
            content: `
  Eres un coach de bienestar emocional especializado en técnicas de autoayuda. 🌟 Crea un **informe semanal personalizado** en español usando formato Markdown con estructura de blog, incluyendo:

  # Título principal (usa emoji relacionado al estado emocional)
  ## Subtítulos descriptivos para cada sección
  - Lenguaje cálido, cercano y motivador 💬
  - Emojis relevantes en cada sección 😊
  - Enfoque en mindfulness y reducción de estrés 🧘‍♀️
  - Plan semanal detallado con actividades diarias 📅
  - Hábitos saludables específicos 🍏
  - Tips para productividad remota 💻
  - CERO sugerencias médicas o farmacológicas 🚫💊

  Estructura requerida:
  # [Emoji] Título Principal Motivador
  
  ## 🔍 Resumen de tu estado
  Breve análisis compasivo de los resultados PHQ-9 y GAD-7
  
  ## 🗓 Plan Semanal de Bienestar
  Día por día con actividades concretas:
  - **Lunes**: [Actividad 1] + [Actividad 2]
  - **Martes**: [Actividad 1] + [Actividad 2]
  ...
  
  ## 🛠 Kit de Herramientas Diarias
  Técnicas específicas para manejar momentos difíciles
  
  ## 💡 Tips Remotos
  Estrategias adaptadas al trabajo desde casa
  
  ## 🌈 Mensaje Final
  Cierre motivacional con foco en el progreso
          `.trim(),
          },
          {
            role: 'user',
            content: `Paciente con PHQ-9=${input.phq9}, GAD-7=${input.gad7}. Comentario: "${input.comment}".  
  Genera un plan de bienestar personalizado en formato Markdown con:
  - Emojis motivadores en cada sección 🌟
  - Técnicas de mindfulness y reducción de estrés 🧘
  - Hábitos saludables para energía y enfoque 🍏
  - Estrategias para manejar ansiedad/depresión en casa 🏡
  - Tips para productividad remota sin burnout 💻
  - Lenguaje cálido y validante, sin jerga clínica 💖
  - CERO sugerencias de medicamentos o tratamientos médicos 🚫`,
          },
        ],
      });
      const responseContent = chatCompletion.choices[0].message.content;
      let markdownContent = responseContent
        ? responseContent
        : 'Sin respuesta.';

      markdownContent = this.cleanAndValidateContent(markdownContent);

      await this.storeRecommendation(input.userId, markdownContent);
      return markdownContent;
    } catch (error) {
      console.error('Error generating recommendation:', error);
      const randomFallback =
        fallbacks[Math.floor(Math.random() * fallbacks.length)];
      const fallbackContent = this.cleanAndValidateContent(randomFallback);
      await this.storeRecommendation(input.userId, fallbackContent);
      return fallbackContent;
    }
  }

  private cleanAndValidateContent(content: string | undefined): string {
    if (!content) return 'Sin contenido disponible';
    let cleanedContent = content.replace(/<think>[\s\S]*?<\/think>/g, '');

    cleanedContent = cleanedContent.replace(/\n{3,}/g, '\n\n');

    if (/(medic|farmac|psiquiat|ISRS|SNRI)/i.test(cleanedContent)) {
      cleanedContent = 'Contenido no disponible. Por favor intenta nuevamente.';
    }

    return cleanedContent;
  }

  private async storeRecommendation(userId: string, content: string) {
    await this.prisma.recommendation.create({
      data: {
        userId,
        content,
      },
    });
  }

  async getRecommendationsByUser(userId: string) {
    return this.prisma.recommendation.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async generateChallenge(input: GenerateChallengeDto): Promise<string> {
    const maxRetries = 3;
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`[IaService] Attempt ${attempt} to generate challenges`);
        const chatCompletion = await this.hf.chatCompletion({
          provider: 'novita',
          model: 'deepseek-ai/DeepSeek-R1-0528',
          messages: [
            {
              role: 'system',
              content: `
  Eres un terapeuta experto en salud mental y bienestar emocional. Tus respuestas deben ser en español, cálidas, accesibles, útiles y motivadoras. Ayuda al paciente a desarrollar hábitos saludables, reducir ansiedad o depresión, y promover el autocuidado con enfoque práctico y mindful. Usa emojis para animar y crear conexión emocional. 
  Solo responde con un JSON válido, sin explicaciones ni texto adicional.
  IMPORTANTE: El campo requiredCompletions debe ser un número entero entre 1-3, sin texto adicional.
              `.trim(),
            },
            {
              role: 'user',
              content: `
  Un paciente con los siguientes resultados:
  PHQ-9: ${input.phq9}, GAD-7: ${input.gad7}
  
  Diseña una lista de 10 tareas terapéuticas semanales para mejorar su bienestar emocional. Las tareas deben est  ar pensadas para alguien que trabaja en casa (remoto), incorporar hábitos saludables y mindfulness, y deben ser digitalmente comprobables (click, formulario, audio, temporizador o texto).
  NOTA: cada type que definas AUDIO, FORM, TEXT, TIMER debe tener sentido con lo que debe hacer el usuario, es decir si es audio, debe enviar un audio, si es form debe responder varias preguntas, si es text, debe escribir una frase corta y si es timer debe cronometrar segun lo propuesto
  por ejemplo si dices Graba un audio repitiendo: 'Estoy a salvo ahora. Esto pasará'. ¡Guárdalo en favoritos! Textéame 'Listo' cuando lo tengas. Tu futuro yo te lo agradecerá 🌈 -> esto es de type "AUDIO" porque debe enviar un audio, borra el textear listo, esto es hackeable ya que puede no evniar audio y al final solo escribir listo, considera ese tipoo de cosas

  Cada tarea debe tener el siguiente formato JSON:  
  [
    {
      "title": "...",
      "instructions": "...", // lenguaje cálido, directo, motivador y con emojis
      "type": "...", // uno de: click, formulario, audio, temporizador, texto
      "requiredCompletions": 3, // número entero entre 1-3 (sin texto adicional)
      "metadata": { // estructura varía según el tipo:
        // tipo TEXT: { "prompt": "texto de la pregunta/petición" } // deben ser peticiones mindfulness (decir cosas positivas de uno, fortalezas, etc)
        // tipo FORM: { "questions": ["pregunta1", "pregunta2", "pregunta3", "pregunta4"] } // debes abordas otro tipo de preguntas terapeuticas para aliviar estres, ansiedad o instrospeccion etc, parecido pero a la vez disinto al mindfullness ya sabes por algo estamos separandolo en 2 tipos
        // tipo TIMER: { "seconds": 180, times: [{ keyword: inhala, time: 2 }, {keyword: exhala 4}] } // tiempo en segundos o el total de segundos que toma el reto propuesto, ademas ese campo times, por ejemplo si el ejercicio es inhala exahal se debe indicar la palabra clave y el tiempo de tipo number que se debe hacer, si el reto es ir a caminar un rato, pasar keyword para cierto tiempo como prepara un snack, tiempo 120 segundos, sirvete un te 120 segundos, recuerda que debe ser de tipo number no incluyas la palabra clave segundos, o pued ser mira las ventanas 180 segundos y asi dependiendo de cuanto tiempo se haya pedido dejar la pc.
        // tipo AUDIO: { "prompt": "texto opcional para guiar el audio" } // puedes poner lo que es usuario tenga que repetir en caso pidas que repita algo
        // tipo CLICK: no necesita metadata
      }
    },
    ...
  ]
              `.trim(),
            },
          ],
        });
        return chatCompletion.choices[0].message.content ?? 'Sin respuesta.';
      } catch (error) {
        lastError = error as Error;
        console.error(`[IaService] Attempt ${attempt} failed:`, error);
        if (attempt < maxRetries) {
          await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
        }
      }
    }

    console.error('[IaService] All attempts failed');
    throw new Error(
      `Failed to generate challenges after ${maxRetries} attempts: ${lastError?.message}`,
    );
  }
}
