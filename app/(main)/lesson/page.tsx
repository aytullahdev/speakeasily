import { getLesson, getUserProgress, getUserSubscriptions } from "@/db/queries";
import { redirect } from "next/navigation";
import React from "react";
import { Quiz } from "./Quiz";

const Lesson = async () => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscriptions();
  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
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
      userSubscription={userSubscription}
    />
  );
};

export default Lesson;
