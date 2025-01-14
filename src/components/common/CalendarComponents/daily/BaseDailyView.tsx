// components/calendar/daily/BaseDailyView.tsx
import React from 'react';
import { Card, CardContent } from '../../../ui/card';
import { motion } from 'framer-motion';
import { CalendarHeader } from '../CalendarHeader';
import { BaseCourse, CourseType } from '../../../../types/types';

type BaseDailyViewProps<T extends BaseCourse> = {
  date: Date;
  onNavigate: (direction: 'precedent' | 'suivant') => void;
  courses: T[];
  filters: Record<string, string>;
  renderCourseContent: (course: T) => React.ReactNode;
  filterCourses?: (course: T, filters: Record<string, string>) => boolean;
};

const BaseDailyView = <T extends BaseCourse>({
  date,
  onNavigate,
  courses,
  filters,
  renderCourseContent,
  filterCourses,
}: BaseDailyViewProps<T>) => {
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

  const dayOfWeek = date.toLocaleDateString('fr-FR', { weekday: 'long' });

  const filteredCourses = courses.filter(
    (course) =>
      course.jour === dayOfWeek &&
      (!filterCourses || filterCourses(course, filters)),
  );

  return (
    <Card>
      <CalendarHeader date={date} onNavigate={onNavigate} />
      <CardContent className="p-6">
        <div className="overflow-x-auto">
          <div className="min-w-max">
            {hours.map((hour, hourIndex) => {
              const hourCourses = filteredCourses.filter(
                (course) => course.debut <= hour && course.fin > hour,
              );

              return (
                <motion.div
                  key={hour}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: hourIndex * 0.05 }}
                  className="mb-4"
                >
                  <div className="text-sm text-gray-600 mb-2">{hour}</div>
                  <div className="space-y-3">
                    {hourCourses.map((course) => (
                      <div
                        key={course.id}
                        className={`p-4 rounded-lg border-2 ${getTypeColor(
                          course.type,
                        )}`}
                      >
                        {renderCourseContent(course)}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BaseDailyView;
