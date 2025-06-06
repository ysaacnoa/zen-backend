import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GenerateRecommendationDto } from './dto/generate-recomendation.dto';
import { GenerateChallengeDto } from './dto/generate-challenge.dto';
import { InferenceClient } from '@huggingface/inference';

@Injectable()
export class IaService {
  readonly hf = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

  constructor(private readonly httpService: HttpService) {}

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
  Eres un terapeuta experto en bienestar mental. Debes crear recomendaciones terapéuticas personalizadas en español, en **formato Markdown**, usando un lenguaje cálido, accesible y motivador.  
  Incluye emojis positivos para apoyar y animar al usuario a lo largo del texto.  
  Tu enfoque debe combinar mindfulness, hábitos saludables, técnicas prácticas para manejar ansiedad y depresión, especialmente considerando que la persona trabaja de forma remota.  
  Evita lenguaje clínico complejo y ofrece estrategias sencillas, realistas y aplicables en la rutina diaria.  
  Reconoce el esfuerzo del usuario y usa un tono esperanzador y validante.  
  Finalmente, sugiere siempre acompañamiento profesional cuando sea necesario.
          `.trim(),
        },
        {
          role: 'user',
          content: `Paciente con PHQ-9=${input.phq9}, GAD-7=${input.gad7}. Comentario: "${input.comment}".  
  Proporciona recomendaciones terapéuticas personalizadas en formato Markdown, con emojis motivadores y un enfoque en mindfulness, hábitos saludables, estrategias prácticas para trabajo remoto y un lenguaje cálido y accesible.`,
        },
      ],
    });
    return chatCompletion.choices[0].message.content ?? 'Sin respuesta.';
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
