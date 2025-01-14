import React from 'react';
import { FilterConfig } from '../../../types/types';
import { BaseFilters } from '../../common/FiltersCalendar/BaseFilters';

type StudentFilters = {
  module: string;
  professeur: string;
};

const StudentFilters = ({
  filters,
  setFilters,
}: {
  filters: StudentFilters;
  setFilters: React.Dispatch<React.SetStateAction<StudentFilters>>;
}) => {
  const config: FilterConfig[] = [
    {
      id: 'module',
      label: 'Module',
      options: [
        { value: 'Développement Web', label: 'Développement Web' },
        { value: 'Base de données', label: 'Base de données' },
        { value: 'Algorithmique', label: 'Algorithmique' },
      ],
    },
    {
      id: 'professeur',
      label: 'Professeur',
      options: [
        { value: 'Dr. Diallo', label: 'Dr. Diallo' },
        { value: 'Pr. Ndiaye', label: 'Pr. Ndiaye' },
        { value: 'M. Sow', label: 'M. Sow' },
      ],
    },
  ];

  return (
    <BaseFilters filters={filters} setFilters={setFilters} config={config} />
  );
};

export default StudentFilters;
