// components/CalendarHeader.tsx
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CardHeader, CardTitle } from '../../ui/card';
import React from 'react';

type CalendarHeaderProps = {
  date: Date;
  onNavigate: (direction: 'precedent' | 'suivant') => void;
};

export const CalendarHeader = ({ date, onNavigate }: CalendarHeaderProps) => (
  <CardHeader className="border-b">
    <div className="flex justify-between items-center">
      <CardTitle className="text-xl">Planning du jour</CardTitle>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onNavigate('precedent')}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="font-medium">
          {date.toLocaleDateString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
          })}
        </span>
        <button
          onClick={() => onNavigate('suivant')}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  </CardHeader>
);
