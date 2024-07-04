import { getLesson, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import React from "react";
import { Quiz } from "./Quiz";

const Lesson = async () => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();
  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/courses");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;
  return (
    <Quiz
      initialLessonId={lesson.id}
      initialPercentage={initialPercentage}
      initialHearts={userProgress.hearts}
      initialLessonChallenges={lesson.challenges}
      userSubscription={null}
    />
  );
};

export default Lesson;
