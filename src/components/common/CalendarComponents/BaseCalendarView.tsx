// components/BaseCalendarView.tsx
import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { CalendarHeader } from '../../common/CalendarComponents/CalendarHeader';
import { BaseProps } from '../../../types/types';

type BaseCalendarViewProps = BaseProps & {
  children: React.ReactNode;
};

export const BaseCalendarView = ({
  date,
  onNavigate,
  children,
}: BaseCalendarViewProps) => (
  <Card>
    <CalendarHeader date={date} onNavigate={onNavigate} />
    <CardContent className="p-6">
      <div className="space-y-4">{children}</div>
    </CardContent>
  </Card>
);
