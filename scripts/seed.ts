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

// export const courses = pgTable("courses", {
//   id: serial("id").primaryKey(),
//   title: text("title").notNull(),
//   imageSrc: text("image_src").notNull(),
// });

// export const coursesRelations = relations(courses, ({ many }) => ({
//   userProgress: many(userProgress),
//   units: many(units),
// }));

// export const units = pgTable("units", {
//   id: serial("id").primaryKey(),
//   title: text("title").notNull(),
//   description: text("description").notNull(),
//   courseId: integer("course_id")
//     .references(() => courses.id, {
//       onDelete: "cascade",
//     })
//     .notNull(),
//   order: integer("order").notNull(),
// });

// export const unitsRelations = relations(units, ({ many, one }) => ({
//   course: one(courses, {
//     fields: [units.courseId],
//     references: [courses.id],
//   }),
//   lessons: many(lessons),
// }));

// export const lessons = pgTable("lessons", {
//   id: serial("id").primaryKey(),
//   title: text("title").notNull(),
//   content: text("content").notNull(),
//   unitId: integer("unit_id")
//     .references(() => units.id, {
//       onDelete: "cascade",
//     })
//     .notNull(),
//   order: integer("order").notNull(),
// });

// export const lessonsRelations = relations(lessons, ({ one, many }) => ({
//   unit: one(units, {
//     fields: [lessons.unitId],
//     references: [units.id],
//   }),
//   challenges: many(challenges),
// }));

// export const challengesEnum = pgEnum("type", ["SELECT", "ASSIST"]);

// export const challenges = pgTable("challenges", {
//   id: serial("id").primaryKey(),
//   lessonId: integer("lesson_id")
//     .references(() => lessons.id, {
//       onDelete: "cascade",
//     })
//     .notNull(),
//   type: challengesEnum("type").notNull(),
//   question: text("question").notNull(),
//   order: integer("order").notNull(),
// });

// export const challengesRelations = relations(challenges, ({ one, many }) => ({
//   lesson: one(lessons, {
//     fields: [challenges.lessonId],
//     references: [lessons.id],
//   }),
//   challengeOptions: many(challengeOptions),
//   challengeProgress: many(challengeProgress),
// }));

// export const challengeOptions = pgTable("challenge_options", {
//   id: serial("id").primaryKey(),
//   challengeId: integer("challenge_id")
//     .references(() => challenges.id, {
//       onDelete: "cascade",
//     })
//     .notNull(),
//   text: text("text").notNull(),
//   correct: boolean("correct").notNull(),
//   imageSrc: text("image_src"),
//   audioSrc: text("audio_src"),
// });

// export const challengeOptionsRelations = relations(
//   challengeOptions,
//   ({ one }) => ({
//     challenge: one(challenges, {
//       fields: [challengeOptions.challengeId],
//       references: [challenges.id],
//     }),
//   })
// );

// export const challengeProgress = pgTable("challenge_progress", {
//   id: serial("id").primaryKey(),
//   userId: text("user_id").notNull(),
//   challengeId: integer("challenge_id")
//     .references(() => challenges.id, {
//       onDelete: "cascade",
//     })
//     .notNull(),
//   completed: boolean("correct").notNull(),
// });

// export const challengeProgressRelations = relations(
//   challengeProgress,
//   ({ one }) => ({
//     challenge: one(challenges, {
//       fields: [challengeProgress.challengeId],
//       references: [challenges.id],
//     }),
//   })
// );

// export const userProgress = pgTable("user_progress", {
//   userId: text("user_id").primaryKey().notNull(),
//   userName: text("user_name").notNull().default("User"),
//   userImageSrc: text("user_image").notNull().default("./mascot.svv"),
//   activeCourseId: serial("active_course_id").references(() => courses.id, {
//     onDelete: "cascade",
//   }),
//   hearts: integer("hearts").notNull().default(5),
//   points: integer("points").notNull().default(0),
// });

// export const userProgressRelations = relations(userProgress, ({ one }) => ({
//   activeCourse: one(courses, {
//     fields: [userProgress.activeCourseId],
//     references: [courses.id],
//   }),
// }));
