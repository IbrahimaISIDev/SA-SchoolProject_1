// src/components/parent/StatCardParent.tsx
import React from 'react';
import StatCard, { StatCardProps } from './StatCard';

const StatCardParent = (props: StatCardProps) => {
  return <StatCard {...props} />;
};

export default StatCardParent;
