// components/calendar/weekly/BaseWeeklyView.tsx
import React from 'react';
import { Card, CardContent } from '../../../ui/card';
import { motion } from 'framer-motion';
import { CalendarHeader } from '../CalendarHeader';
import { BaseCourse, CourseType } from '../../../../types/types';

type BaseWeeklyViewProps<T extends BaseCourse> = {
  date: Date;
  onNavigate: (direction: 'precedent' | 'suivant') => void;
  courses: T[];
  filters: Record<string, string>;
  renderCourseContent: (course: T) => React.ReactNode;
  filterCourses?: (course: T, filters: Record<string, string>) => boolean;
};

const BaseWeeklyView = <T extends BaseCourse>({
  date,
  onNavigate,
  courses,
  filters,
  renderCourseContent,
  filterCourses,
}: BaseWeeklyViewProps<T>) => {
  const workDays = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ];
  const hours = Array.from(
    { length: 12 },
    (_, i) => `${(i + 8).toString().padStart(2, '0')}:00`,
  );

  const getTypeColor = (type: CourseType) => {
    const colors = {
      CM: 'bg-blue-100 text-blue-800 border-blue-200',
      TD: 'bg-green-100 text-green-800 border-green-200',
      TP: 'bg-purple-100 text-purple-800 border-purple-200',
    };
    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <Card>
      <CalendarHeader date={date} onNavigate={onNavigate} />
      <CardContent className="p-6">
        <div className="overflow-x-auto">
          <div className="min-w-max">
            <div className="grid grid-cols-7 gap-4 mb-4">
              <div className="w-20" />
              {workDays.map((day) => (
                <div
                  key={day}
                  className="px-4 py-2 text-center font-medium bg-gray-50 rounded-lg"
                >
                  {day}
                </div>
              ))}
            </div>

            {hours.map((hour, hourIndex) => (
              <motion.div
                key={hour}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: hourIndex * 0.05 }}
                className="grid grid-cols-7 gap-4 mb-4"
              >
                <div className="w-20 text-sm text-gray-600 flex items-center">
                  {hour}
                </div>
                {workDays.map((day) => {
                  const dayCourses = courses.filter(
                    (course) =>
                      course.jour === day &&
                      course.debut <= hour &&
                      course.fin > hour &&
                      (!filterCourses || filterCourses(course, filters)),
                  );

                  return (
                    <div
                      key={`${day}-${hour}`}
                      className="min-h-[4rem] rounded-lg border"
                    >
                      {dayCourses.map((course) => (
                        <div
                          key={course.id}
                          className={`h-full p-3 rounded-lg border-2 ${getTypeColor(
                            course.type,
                          )}`}
                        >
                          {renderCourseContent(course)}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BaseWeeklyView;
