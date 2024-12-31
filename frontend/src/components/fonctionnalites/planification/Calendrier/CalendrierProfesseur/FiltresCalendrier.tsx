import React from 'react';
import { Search, Filter } from 'lucide-react';

interface FiltresCalendrierProps {
  onFilterChange: (filters: CalendrierFiltres) => void;
  filtres: CalendrierFiltres;
}

interface CalendrierFiltres {
  module: string;
  classe: string;
  periode: string;
}

const FiltresCalendrier = ({
  onFilterChange,
  filtres,
}: FiltresCalendrierProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex flex-wrap gap-4">
        {/* Recherche rapide */}
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Rechercher..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Filtre Module */}
        <div className="flex-1 min-w-[200px]">
          <select
            value={filtres.module}
            onChange={(e) =>
              onFilterChange({ ...filtres, module: e.target.value })
            }
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Tous les modules</option>
            <option value="dev-web">Développement Web</option>
            <option value="base-donnees">Base de données</option>
            <option value="algo">Algorithmes</option>
          </select>
        </div>

        {/* Filtre Classe */}
        <div className="flex-1 min-w-[200px]">
          <select
            value={filtres.classe}
            onChange={(e) =>
              onFilterChange({ ...filtres, classe: e.target.value })
            }
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Toutes les classes</option>
            <option value="l1">Licence 1</option>
            <option value="l2">Licence 2</option>
            <option value="l3">Licence 3</option>
          </select>
        </div>

        {/* Filtre Période */}
        <div className="flex-1 min-w-[200px]">
          <select
            value={filtres.periode}
            onChange={(e) =>
              onFilterChange({ ...filtres, periode: e.target.value })
            }
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="jour">Journée</option>
            <option value="semaine">Semaine</option>
            <option value="mois">Mois</option>
          </select>
        </div>

        {/* Bouton de réinitialisation */}
        <button
          onClick={() =>
            onFilterChange({ module: '', classe: '', periode: 'jour' })
          }
          className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          <Filter size={20} />
          Réinitialiser
        </button>
      </div>
    </div>
  );
};

export default FiltresCalendrier;
