import { cache } from "react";
import db from "./drizzle";
import { auth } from "@clerk/nextjs/server";
import { userProgress } from "./schema";
import { eq } from "drizzle-orm";
export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();
  return data;
});

export const getUserProgress = cache(async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }
  console.log("userId", userId);
  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });
  return data;
});
