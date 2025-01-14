// components/filters/TeacherFilters.tsx
import React from 'react';
import { FilterConfig } from '../../../types/types';
import { BaseFilters } from '../../common/FiltersCalendar/BaseFilters';

type TeacherFilters = {
  classe: string;
  module: string;
  salle: string;
};

const TeacherFilters = ({
  filters,
  setFilters,
}: {
  filters: TeacherFilters;
  setFilters: React.Dispatch<React.SetStateAction<TeacherFilters>>;
}) => {
  const config: FilterConfig[] = [
    {
      id: 'classe',
      label: 'Classe',
      options: ['L1 Info', 'L2 Info', 'L3 Info', 'M1 Info', 'M2 Info'].map(
        (classe) => ({ value: classe, label: classe }),
      ),
    },
    {
      id: 'module',
      label: 'Module',
      options: [
        'Développement Web',
        'Base de données',
        'Algorithmique',
        'Intelligence Artificielle',
      ].map((module) => ({ value: module, label: module })),
    },
    {
      id: 'salle',
      label: 'Salle',
      options: [
        'Salle 101',
        'Salle 102',
        'Salle 103',
        'Amphithéâtre A',
        'Amphithéâtre B',
      ].map((salle) => ({ value: salle, label: salle })),
    },
  ];

  return (
    <BaseFilters filters={filters} setFilters={setFilters} config={config} />
  );
};

export default TeacherFilters;
