import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GenerateRecommendationDto } from './dto/generate-recomendation.dto';
import { GenerateChallengeDto } from './dto/generate-challenge.dto';
import { InferenceClient } from '@huggingface/inference';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IaService {
  readonly hf = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  async generateRecommendation(
    input: GenerateRecommendationDto,
  ): Promise<string> {
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
    let markdownContent =
      chatCompletion.choices[0].message.content ?? 'Sin respuesta.';

    markdownContent = this.cleanAndValidateContent(markdownContent);

    await this.storeRecommendation(input.userId, markdownContent);
    return markdownContent;
  }

  private cleanAndValidateContent(content: string): string {
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
  
  Diseña una lista de 7 tareas terapéuticas semanales para mejorar su bienestar emocional. Las tareas deben estar pensadas para alguien que trabaja en casa (remoto), incorporar hábitos saludables y mindfulness, y deben ser digitalmente comprobables (click, formulario, audio, temporizador o texto).
  
  Cada tarea debe tener el siguiente formato JSON:
  [
    {
      "title": "...",
      "instructions": "...", // lenguaje cálido, directo, motivador y con emojis
      "type": "...", // uno de: click, formulario, audio, temporizador, texto
      "requiredCompletions": 3 // número entero entre 1-3 (sin texto adicional)
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
