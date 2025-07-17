import { lessons, units } from "@/db/schema"

import { UnitBanner } from "./unit-banner";
import { LessonButton } from "./lesson-button";

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson: typeof lessons.$inferSelect & {
    unit: typeof units.$inferSelect;
  } | undefined;
  activeLessonPercentage: number;
};

export const Unit = ({
  id,
  order,
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
          // Check if this lesson is the active one
          const isCurrent = lesson.id === activeLesson?.id;
          
          // Mark previous lessons as completed and future lessons as locked
          let isCompleted = false;
          let isLocked = false;
          
          // Get lesson numbers for comparison
          const currentLessonNum = activeLesson?.id ? parseInt(activeLesson.id.toString().replace('lesson', ''), 10) : 0;
          const thisLessonNum = parseInt(lesson.id.toString().replace('lesson', ''), 10);
          
          // Lessons before the current one are completed, lessons after are locked
          if (thisLessonNum < currentLessonNum) {
            isCompleted = true;
            isLocked = false;
          } else if (thisLessonNum > currentLessonNum) {
            isCompleted = false;
            isLocked = true;
          }
          
          // Current lesson is not locked or completed
          if (isCurrent) {
            isCompleted = false;
            isLocked = false;
          }

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              completed={isCompleted}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};
