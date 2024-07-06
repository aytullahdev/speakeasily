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
      {
        id: 3,
        title: "Gracias",
        content: "Learn how to say thank you in Spanish",
        unitId: 1,
        order: 3,
      },
      {
        id: 4,
        title: "Por favor",
        content: "Learn how to say please in Spanish",
        unitId: 1,
        order: 4,
      },
      {
        id: 5,
        title: "Lo siento",
        content: "Learn how to say sorry in Spanish",
        unitId: 1,
        order: 5,
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
        lessonId: 1,
        type: "SELECT",
        question: "What does Adios mean?",
        order: 2,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        text: "Hello",
        correct: true,
        audioSrc: "/es_man.mp3",
        imageSrc: "/man.svg",
      },
      {
        challengeId: 1,
        text: "Goodbye",
        correct: false,
      },
      {
        challengeId: 1,
        text: "Goodbye",
        correct: false,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2,
        text: "Hello",
        correct: false,
        audioSrc: "/es_man.mp3",
        imageSrc: "/man.svg",
      },
      {
        challengeId: 2,
        text: "Goodbye",
        correct: true,
      },
      {
        challengeId: 2,
        text: "Goodbye",
        correct: false,
      },
    ]);

    console.log("Seeding Completed");
  } catch (error) {
    console.log(error);
    throw new Error("Failed To Seed Database");
  }
};

main();
