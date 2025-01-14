// components/calendar/weekly/TeacherWeeklyView.tsx
import React from 'react';
import { Users, GraduationCap, Clock } from 'lucide-react';
import BaseWeeklyView from './BaseWeeklyView';
import { BaseCourse } from '../../../../types/types';

interface TeacherCourse extends BaseCourse {
  classe: string;
  effectif: number;
  progression: string;
}

interface TeacherWeeklyViewProps {
  date: Date;
  onNavigate: (direction: 'precedent' | 'suivant') => void;
  filtres: {
    classe: string;
    module: string;
  };
  courses: TeacherCourse[];
}

export const TeacherWeeklyView = ({
  date,
  filtres,
  onNavigate,
  courses,
}: TeacherWeeklyViewProps) => {
  const filterCourses = (course: TeacherCourse, filters: typeof filtres) =>
    (!filters.classe || course.classe === filters.classe) &&
    (!filters.module || course.module === filters.module);

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
          <div className="space-y-1">
            <div className="flex items-center text-xs text-gray-600">
              <Users className="h-3 w-3 mr-1" />
              <span>
                {course.classe} ({course.effectif} étudiants)
              </span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <GraduationCap className="h-3 w-3 mr-1" />
              <span>Séance {course.progression}</span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="h-3 w-3 mr-1" />
              <span>
                {course.debut} - {course.fin}
              </span>
            </div>
          </div>
        </>
      )}
    />
  );
};
