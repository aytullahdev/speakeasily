import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./List";
import React from "react";

const Courses = async () => {
  const courses = await getCourses();
  const userProgress = await getUserProgress();
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h2 className="text-2xl font-bold text-neutral-700">Language Courses </h2>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
};

export default Courses;
