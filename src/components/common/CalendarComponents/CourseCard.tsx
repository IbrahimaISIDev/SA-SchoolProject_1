// components/CalendarComponents/CourseCard.tsx
import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { BaseCourse } from '../../../types/types';
import { CourseType } from '../../../types/types';
import { motion } from 'framer-motion';

type CourseCardProps = {
  course: BaseCourse;
  index: number;
  renderHeader: () => React.ReactNode;
  renderAdditionalInfo?: () => React.ReactNode;
};

export const CourseCard = ({
  course,
  index,
  renderHeader,
  renderAdditionalInfo,
}: CourseCardProps) => {
  const getTypeColor = (type: CourseType) => {
    const colors = {
      CM: 'bg-blue-100 text-blue-800',
      TD: 'bg-green-100 text-green-800',
      TP: 'bg-purple-100 text-purple-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getGradientColor = (type: CourseType) => {
    switch (type) {
      case 'CM':
        return 'from-blue-500 to-blue-600';
      case 'TD':
        return 'from-green-500 to-green-600';
      case 'TP':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <motion.div
      key={course.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div
        className={`h-2 bg-gradient-to-r ${getGradientColor(course.type)}`}
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            {renderHeader()}
            <div className="mt-2 space-y-1">
              {renderAdditionalInfo?.()}
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{course.salle}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>
                  {course.debut} - {course.fin}
                </span>
              </div>
            </div>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(course.type)}`}
          >
            {course.type}
          </span>
        </div>
        {course.description && (
          <p className="mt-3 text-sm text-gray-500">{course.description}</p>
        )}
      </div>
    </motion.div>
  );
};
