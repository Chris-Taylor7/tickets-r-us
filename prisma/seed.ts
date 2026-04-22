import { Prisma, PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});
const creatorData: Prisma.CreatorCreateInput[] = [
  {
    firstName: "Chris",
    lastName: "Taylor",
    email: "chris.taylor@example.com",
    phoneNumber: "513-555-1111",
    tickets: {
      create: [
        {
          title: "Login issue",
          description: "Cannot log in",
          status: "OPEN",
        },
        {
          title: "UI bug",
          description: "Button misaligned",
          status: "IN_PROGRESS",
        },
      ],
    },
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    phoneNumber: "513-555-2222",
    tickets: {
      create: [
        {
          title: "Database lag",
          description: "Slow queries",
          status: "OPEN",
        },
      ],
    },
  },
];

export async function main() {
  console.log("🌱 Seeding...");

  // Optional cleanup
  await prisma.ticket.deleteMany();
  await prisma.creator.deleteMany();

  for (const c of creatorData) {
    await prisma.creator.create({
      data: c,
    });
  }

  console.log("✅ Seeding complete");
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });