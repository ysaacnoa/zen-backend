export const CHALLENGES_MOCK = [
  {
    title: 'Respiración consciente 🌬️',
    instructions:
      'Hoy vamos a practicar la respiración. Sigue el temporizador: inhala profundamente por 2 segundos, exhala por 4 segundos. Repite hasta que el tiempo se acabe. ¡Te sentirás más tranquilo!',
    type: 'temporizador',
    requiredCompletions: 3,
    metadata: {
      seconds: 180,
      times: [
        { keyword: 'inhala', time: 2 },
        { keyword: 'exhala', time: 4 },
      ],
    },
  },
  {
    title: 'Diario de gratitud 📔',
    instructions:
      'Escribe 3 cosas por las que estés agradecido hoy. Pueden ser pequeñas o grandes. ¡Celebra lo bueno!',
    type: 'texto',
    requiredCompletions: 3,
    metadata: {
      prompt: 'Lista 3 cosas por las que te sientes agradecido hoy:',
    },
  },
  {
    title: 'Afirmaciones positivas 🎙️',
    instructions:
      "Graba un audio repitiendo: 'Soy valioso, estoy haciendo lo mejor que puedo y merezco paz'. Escúchalo después para recordarlo.",
    type: 'audio',
    requiredCompletions: 2,
    metadata: {
      prompt:
        "Repite: 'Soy valioso, estoy haciendo lo mejor que puedo y merezco paz'",
    },
  },
  {
    title: 'Pausa activa 💃',
    instructions:
      'Levántate de tu silla y baila tu canción favorita por 3 minutos. ¡Muévete y libera endorfinas!',
    type: 'temporizador',
    requiredCompletions: 3,
    metadata: {
      seconds: 180,
      times: [{ keyword: 'baila', time: 180 }],
    },
  },
  {
    title: 'Reflexión emocional 📝',
    instructions:
      'Responde estas preguntas para entender mejor cómo te sientes hoy. No hay respuestas incorrectas.',
    type: 'formulario',
    requiredCompletions: 2,
    metadata: {
      questions: [
        '¿Qué emoción ha dominado tu día hoy?',
        '¿Qué necesitas en este momento para sentirte mejor?',
        '¿Qué pequeño logro puedes celebrar hoy?',
        '¿Cómo puedes ser amable contigo mismo esta semana?',
      ],
    },
  },
  {
    title: 'Desconexión digital 🌿',
    instructions:
      'Apaga pantallas y siéntate en silencio por 5 minutos. Observa tu entorno sin juicios. ¡Disfruta el momento presente!',
    type: 'temporizador',
    requiredCompletions: 2,
    metadata: {
      seconds: 300,
      times: [{ keyword: 'observa', time: 300 }],
    },
  },
  {
    title: 'Autocompasión 🎙️',
    instructions:
      "Graba un audio diciéndote algo amable, como le dirías a un amigo querido. Ejemplo: 'Está bien descansar, lo estás haciendo bien'.",
    type: 'audio',
    requiredCompletions: 2,
    metadata: {
      prompt: 'Dite algo amable a ti mismo, como le dirías a un amigo:',
    },
  },
  {
    title: 'Hidratación con amor 💧',
    instructions:
      'Toma un vaso de agua lentamente, saboreando cada sorbo. Usa el temporizador para hacerlo en 2 minutos. ¡Tu cuerpo te lo agradecerá!',
    type: 'temporizador',
    requiredCompletions: 3,
    metadata: {
      seconds: 120,
      times: [{ keyword: 'bebe', time: 120 }],
    },
  },
  {
    title: 'Reconocimiento de fortalezas ✨',
    instructions:
      'Escribe 2 cualidades positivas tuyas que te hayan ayudado esta semana. ¡Tú puedes!',
    type: 'texto',
    requiredCompletions: 2,
    metadata: {
      prompt: 'Escribe 2 fortalezas tuyas que te hayan ayudado recientemente:',
    },
  },
  {
    title: 'Plan de autocuidado 📋',
    instructions:
      'Responde este formulario para planear cómo cuidarte esta semana. Pequeños pasos generan grandes cambios.',
    type: 'formulario',
    requiredCompletions: 1,
    metadata: {
      questions: [
        '¿Qué actividad te da paz y puedes hacer 10 minutos al día?',
        '¿Qué alimento nutritivo puedes incorporar a tus comidas?',
        '¿A qué hora ideal puedes acostarte para descansar mejor?',
        '¿Quién puede apoyarte emocionalmente esta semana?',
      ],
    },
  },
];
