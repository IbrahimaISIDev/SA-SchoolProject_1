import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatWidgetProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  evolution: string;
  className?: string;
  color?: 'blue' | 'green' | 'purple';
}

const StatWidget = ({
  icon,
  title,
  value,
  evolution,
  className = '',
  color = 'blue',
}: StatWidgetProps) => {
  const isPositive = evolution.startsWith('+');

  const gradientColors = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-full bg-${color}-50`}>{icon}</div>
          <span
            className={`flex items-center text-sm font-medium px-3 py-1 rounded-full ${
              isPositive
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {evolution}
            {isPositive ? (
              <TrendingUp size={16} className="ml-1" />
            ) : (
              <TrendingDown size={16} className="ml-1" />
            )}
          </span>
        </div>
        <dt className="mt-4 text-sm font-medium text-gray-500">{title}</dt>
        <dd className="mt-2 text-2xl font-semibold">{value}</dd>
      </div>
      <div className={`h-1 bg-gradient-to-r ${gradientColors[color]}`} />
    </motion.div>
  );
};

export default StatWidget;
