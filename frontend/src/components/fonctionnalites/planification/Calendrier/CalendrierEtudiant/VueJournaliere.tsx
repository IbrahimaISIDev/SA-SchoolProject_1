import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

// Définition des types pour les props
type Props = {
  date: Date;
  filtres: {
    module: string;
    professeur: string;
  };
};

export default function VueJournaliere({ date, filtres }: Props) {
  const [currentDate, setCurrentDate] = useState(date);

  // Données exemple (à remplacer par les vraies données de l'API)
  const coursJour = [
    {
      id: 1,
      module: 'Développement Web',
      professeur: 'Dr. Diallo',
      salle: 'Salle 101',
      debut: '08:30',
      fin: '10:30',
      description: 'Cours sur React et TypeScript',
    },
    {
      id: 2,
      module: 'Base de données',
      professeur: 'Pr. Ndiaye',
      salle: 'Salle 203',
      debut: '11:00',
      fin: '13:00',
      description: 'Introduction à PostgreSQL',
    },
  ];

  const naviguerJour = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + direction);
    setCurrentDate(newDate);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* En-tête avec navigation */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Emploi du temps journalier</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => naviguerJour(-1)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="font-medium">
            {currentDate.toLocaleDateString('fr-FR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
            })}
          </span>
          <button
            onClick={() => naviguerJour(1)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Liste des cours */}
      <div className="space-y-4">
        {coursJour.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Aucun cours prévu pour cette journée
          </div>
        ) : (
          coursJour.map((cours) => (
            <div
              key={cours.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-lg">{cours.module}</h3>
                  <p className="text-gray-600">{cours.professeur}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {cours.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-1" />
                    {cours.debut} - {cours.fin}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{cours.salle}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
