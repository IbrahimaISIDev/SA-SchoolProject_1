// src/components/parent/calendar/FiltresCalendrierParent.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../ui/card';

type FiltresProps = {
  filtres: {
    enfant: string;
    module: string;
    professeur: string;
  };
  setFiltres: React.Dispatch<
    React.SetStateAction<{
      enfant: string;
      module: string;
      professeur: string;
    }>
  >;
  enfants: Array<{
    id: number;
    nom: string;
    classe: string;
  }>;
};

const FiltresCalendrierParent = ({
  filtres,
  setFiltres,
  enfants,
}: FiltresProps) => {
  const modules = ['Développement Web', 'Base de données', 'Algorithmique'];
  const professeurs = ['Coach Wane', 'Coach Aly', 'M. Sow'];

  return (
    <Card className="mb-6">
      <CardHeader className="border-b">
        <CardTitle className="text-xl">Filtres</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enfant
            </label>
            <select
              value={filtres.enfant}
              onChange={(e) =>
                setFiltres({ ...filtres, enfant: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Tous les enfants</option>
              {enfants.map((enfant) => (
                <option key={enfant.id} value={enfant.id}>
                  {enfant.nom} - {enfant.classe}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Module
            </label>
            <select
              value={filtres.module}
              onChange={(e) =>
                setFiltres({ ...filtres, module: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Tous les modules</option>
              {modules.map((module) => (
                <option key={module} value={module}>
                  {module}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Professeur
            </label>
            <select
              value={filtres.professeur}
              onChange={(e) =>
                setFiltres({ ...filtres, professeur: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Tous les professeurs</option>
              {professeurs.map((prof) => (
                <option key={prof} value={prof}>
                  {prof}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FiltresCalendrierParent;
