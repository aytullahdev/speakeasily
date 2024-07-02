import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./List";
import React from "react";

const Courses = async () => {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();
  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h2 className="text-2xl font-bold text-neutral-700">Language Courses </h2>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
};

export default Courses;