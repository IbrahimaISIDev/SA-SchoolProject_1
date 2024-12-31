import React from 'react';
import { Search, Filter } from 'lucide-react';

type FiltresProps = {
  filtres: {
    module: string;
    professeur: string;
  };
  setFiltres: React.Dispatch<
    React.SetStateAction<{
      module: string;
      professeur: string;
    }>
  >;
};

export default function FiltresCalendrier({
  filtres,
  setFiltres,
}: FiltresProps) {
  // Liste exemple de modules et professeurs (à remplacer par vos données réelles)
  const modules = ['Développement Web', 'Base de données', 'Algorithmique'];
  const professeurs = ['Dr. Diallo', 'Pr. Ndiaye', 'M. Sow'];

  return (
    <div className="p-4 border-b bg-gray-50">
      <div className="flex flex-wrap gap-4">
        {/* Filtre des modules */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Module
          </label>
          <div className="relative">
            <select
              value={filtres.module}
              onChange={(e) =>
                setFiltres({ ...filtres, module: e.target.value })
              }
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Tous les modules</option>
              {modules.map((module) => (
                <option key={module} value={module}>
                  {module}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filtre des professeurs */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Professeur
          </label>
          <div className="relative">
            <select
              value={filtres.professeur}
              onChange={(e) =>
                setFiltres({ ...filtres, professeur: e.target.value })
              }
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Tous les professeurs</option>
              {professeurs.map((professeur) => (
                <option key={professeur} value={professeur}>
                  {professeur}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
