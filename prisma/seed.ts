import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  { name: 'Royal Gold Chrono', price: 250.0, category: 'Luxury', imageSrc: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', description: 'A luxurious gold chronograph for the modern gentleman.' },
  { name: 'Midnight Sport', price: 120.0, category: 'Sporty', imageSrc: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', description: 'Built for performance, designed for style.' },
  { name: 'Classic Leather', price: 85.0, category: 'Casual', imageSrc: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', description: 'Timeless elegance with a genuine leather strap.' },
  { name: 'Rose Gold Elegance', price: 180.0, category: 'Ladies', imageSrc: 'https://images.unsplash.com/photo-1595935736128-db1f0a261963?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', description: 'Sophisticated rose gold finish for her.' },
  { name: 'Silver Diver', price: 210.0, category: 'Men', imageSrc: 'https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', description: 'Water resistant and rugged for any adventure.' },
  { name: 'Minimalist Black', price: 95.0, category: 'Casual', imageSrc: 'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', description: 'Clean lines and a modern black aesthetic.' },
];

async function main() {
  console.log('Start seeding ...');

  const passwordHash = await bcrypt.hash('password123', 10);
  const defaultUser = await prisma.user.upsert({
    where: { email: 'demo@divine.com' },
    update: {},
    create: {
      email: 'demo@divine.com',
      name: 'Demo User',
      passwordHash,
    },
  });

  for (const p of products) {
    const product = await prisma.product.create({
      data: {
        ...p,
        isPublished: true,
        ownerId: defaultUser.id,
      },
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
