// components/calendar/weekly/ParentWeeklyView.tsx
import React from 'react';
import BaseWeeklyView from './BaseWeeklyView';
import { BaseCourse } from '../../../../types/types';

interface ParentCourse extends BaseCourse {
  enfant: {
    id: number;
    nom: string;
    classe: string;
  };
}

interface ParentWeeklyViewProps {
  date: Date;
  onNavigate: (direction: 'precedent' | 'suivant') => void;
  filtres: {
    enfant: string;
    module: string;
    professeur: string;
  };
  courses: ParentCourse[];
}

export const ParentWeeklyView = ({
  date,
  filtres,
  onNavigate,
  courses,
}: ParentWeeklyViewProps) => {
  const filterCourses = (course: ParentCourse, filters: typeof filtres) =>
    (!filters.enfant || course.enfant.id.toString() === filters.enfant) &&
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
          <div className="text-xs text-gray-600">
            {course.enfant.nom} - {course.enfant.classe}
          </div>
          <div className="text-xs text-gray-500">{course.salle}</div>
        </>
      )}
    />
  );
};
