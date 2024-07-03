import { lessons, units } from "@/db/schema";
import { UnitBanner } from "./UnitBanner";
import { LessonButton } from "./LessonButton";

type Props = {
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & { completed: boolean })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;

  activeLessonPercentage: number;
};

export const Unit = ({
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrentLesson = activeLesson?.id === lesson.id;
          const isLocked = !lesson.completed && !isCurrentLesson;

          return (
            <LessonButton
              id={lesson.id}
              key={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrentLesson}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};
