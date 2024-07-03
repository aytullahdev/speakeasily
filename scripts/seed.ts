import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding Database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "French",
        imageSrc: "/fr.svg",
      },
      {
        id: 3,
        title: "Italian",
        imageSrc: "/it.svg",
      },
      {
        id: 4,
        title: "Croatian",
        imageSrc: "/hr.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        title: "Greetings",
        description: "Learn how to greet people in Spanish",
        courseId: 1,
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        title: "Hola",
        content: "Learn how to say hello in Spanish",
        unitId: 1,
        order: 1,
      },
      {
        id: 2,
        title: "Adios",
        content: "Learn how to say goodbye in Spanish",
        unitId: 1,
        order: 2,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        question: "What does Hola mean?",
        order: 1,
      },
      {
        id: 2,
        lessonId: 2,
        type: "SELECT",
        question: "What does Adios mean?",
        order: 1,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        text: "Hello",
        correct: true,
        audioSrc: "/es_man.mp3",
        imageSrc: "/man.svg",
      },
      {
        id: 2,
        challengeId: 1,
        text: "Goodbye",
        correct: false,
      },
      {
        id: 3,
        challengeId: 2,
        text: "Hello",
        correct: false,
      },
      {
        id: 4,
        challengeId: 2,
        text: "Goodbye",
        correct: true,
      },
    ]);

    console.log("Seeding Completed");
  } catch (error) {
    console.log(error);
    throw new Error("Failed To Seed Database");
  }
};

main();
