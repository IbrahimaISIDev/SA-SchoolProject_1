// components/filters/BaseFilters.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { FilterConfig } from '../../../types/types';

type BaseFiltersProps<T extends Record<string, string>> = {
  title?: string;
  filters: T;
  setFilters: React.Dispatch<React.SetStateAction<T>>;
  config: FilterConfig[];
  className?: string;
};

const BaseFilters = <T extends Record<string, string>>({
  title = 'Filtres',
  filters,
  setFilters,
  config,
  className = 'mb-6',
}: BaseFiltersProps<T>) => {
  const totalColumns = config.reduce(
    (acc, curr) => acc + (curr.colSpan || 1),
    0,
  );

  return (
    <Card className={className}>
      <CardHeader className="border-b">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div
          className={`grid grid-cols-1 md:grid-cols-${Math.min(totalColumns, 3)} gap-4`}
        >
          {config.map(({ id, label, options, colSpan }) => (
            <div
              key={id}
              className={colSpan ? `md:col-span-${colSpan}` : undefined}
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <select
                value={filters[id]}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, [id]: e.target.value }))
                }
                className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Tous les {label.toLowerCase()}s</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { BaseFilters };
