import { PrismaClient } from '@prisma/client';

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});

async function seed() {
  console.info('Seeding database...');

  const client = new PrismaClient();

  void client.$disconnect();

  console.info('Seeding database with custom seed...');

  console.info('Seeded database successfully');
}
