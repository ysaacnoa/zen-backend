import { PrismaClient } from '../prisma/generated/prisma';

// Lista básica de badges a crear
const badgesToCreate = [
  {
    id: 'badge-beginner',
    name: 'Beginner Mindful',
    description: 'Por completar tu registro',
    imagePath: '/assets/badges/beginner-mindful.svg',
    xpRequired: 0,
  },
  {
    id: 'badge-sunshine',
    name: 'Sunshine Ray',
    description: 'Por 7 días consecutivos',
    imagePath: '/assets/badges/sunshine-ray.svg',
    xpRequired: 100,
  },
  {
    id: 'badge-explorer',
    name: 'Mindful Explorer',
    description: 'Por explorar todas las funcionalidades básicas',
    imagePath: '/assets/badges/mindful-explorer.svg',
    xpRequired: 200,
  },
  {
    id: 'badge-warrior',
    name: 'Peaceful Warrior',
    description: 'Por superar tu primer desafío difícil',
    imagePath: '/assets/badges/peaceful-warrior.svg',
    xpRequired: 300,
  },
  {
    id: 'badge-zen',
    name: 'Zen Master',
    description: 'Por alcanzar maestría básica',
    imagePath: '/assets/badges/zen-master.svg',
    xpRequired: 500,
  },
  {
    id: 'badge-meditation',
    name: 'Meditation Champion',
    description: 'Por meditar 30 días consecutivos',
    imagePath: '/assets/badges/meditation-champion.svg',
    xpRequired: 1000,
  },
  {
    id: 'badge-balance',
    name: 'Balance Seeker',
    description: 'Por encontrar equilibrio en tu práctica',
    imagePath: '/assets/badges/balance-seeker.svg',
    xpRequired: 1500,
  },
  {
    id: 'badge-serenity',
    name: 'Serenity Guardian',
    description: 'Por alcanzar el máximo nivel de serenidad',
    imagePath: '/assets/badges/serenity-guardian.svg',
    xpRequired: 2000,
  },
];

async function seed() {
  const prisma = new PrismaClient();

  try {
    for (const badge of badgesToCreate) {
      const exists = await prisma.badge.findUnique({ where: { id: badge.id } });
      if (!exists) {
        await prisma.badge.create({ data: badge });
      }
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed().catch((e) => console.error('Seed error:', e));
