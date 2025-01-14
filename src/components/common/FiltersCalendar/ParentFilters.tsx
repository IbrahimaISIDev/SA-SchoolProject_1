// components/filters/ParentFilters.tsx
import React from 'react';
import { FilterConfig } from '../../../types/types';
import { BaseFilters } from '../../common/FiltersCalendar/BaseFilters';

type ParentFilters = {
  enfant: string;
  module: string;
  professeur: string;
};

const ParentFilters = ({
  filters,
  setFilters,
  enfants,
}: {
  filters: ParentFilters;
  setFilters: React.Dispatch<React.SetStateAction<ParentFilters>>;
  enfants: Array<{ id: number; nom: string; classe: string }>;
}) => {
  const config: FilterConfig[] = [
    {
      id: 'enfant',
      label: 'Enfant',
      options: enfants.map((enfant) => ({
        value: enfant.id.toString(),
        label: `${enfant.nom} - ${enfant.classe}`,
      })),
    },
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
        { value: 'Coach Wane', label: 'Coach Wane' },
        { value: 'Coach Aly', label: 'Coach Aly' },
        { value: 'M. Sow', label: 'M. Sow' },
      ],
    },
  ];

  return (
    <BaseFilters filters={filters} setFilters={setFilters} config={config} />
  );
};

export default ParentFilters;
