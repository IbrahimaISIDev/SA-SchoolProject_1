// components/calendar/weekly/StudentWeeklyView.tsx
import React from 'react';
import BaseWeeklyView from './BaseWeeklyView';
import { BaseCourse } from '../../../../types/types';

interface StudentCourse extends BaseCourse {
  professeur: string;
}

interface StudentWeeklyViewProps {
  date: Date;
  onNavigate: (direction: 'precedent' | 'suivant') => void;
  filtres: {
    module: string;
    professeur: string;
  };
  courses: StudentCourse[];
}

export const StudentWeeklyView = ({
  date,
  filtres,
  onNavigate,
  courses,
}: StudentWeeklyViewProps) => {
  const filterCourses = (course: StudentCourse, filters: typeof filtres) =>
    (!filters.module || course.module === filters.module) &&
    (!filters.professeur || course.professeur === filters.professeur);

  return (
    <BaseWeeklyView
      date={date}
      onNavigate={onNavigate}
      courses={courses}
      filters={filtres}
      filterCourses={filterCourses}
      renderCourseContent={(course) => (
        <>
          <div className="font-medium text-sm">{course.module}</div>
          <div className="text-xs text-gray-600">{course.professeur}</div>
          <div className="text-xs text-gray-500">{course.salle}</div>
        </>
      )}
    />
  );
};
