import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Définition des types pour les props
type Props = {
  date: Date;
  filtres: {
    module: string;
    professeur: string;
  };
};

export default function VueHebdomadaire({ date, filtres }: Props) {
  const [currentWeek, setCurrentWeek] = useState(date);

  // Données exemple (à remplacer par les vraies données de l'API)
  const coursHebdo = [
    {
      id: 1,
      module: 'Développement Web',
      professeur: 'Dr. Diallo',
      salle: 'Salle 101',
      debut: '08:30',
      fin: '10:30',
      jour: 'Lundi',
    },
    {
      id: 2,
      module: 'Base de données',
      professeur: 'Pr. Ndiaye',
      salle: 'Salle 203',
      debut: '11:00',
      fin: '13:00',
      jour: 'Mardi',
    },
  ];

  const joursOuvres = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ];
  const heures = Array.from(
    { length: 12 },
    (_, i) => `${(i + 8).toString().padStart(2, '0')}:00`,
  );

  const naviguerSemaine = (direction: number) => {
    const newDate = new Date(currentWeek);
    newDate.setDate(newDate.getDate() + direction * 7);
    setCurrentWeek(newDate);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* En-tête avec navigation */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Emploi du temps hebdomadaire</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => naviguerSemaine(-1)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="font-medium">
            Semaine du {currentWeek.toLocaleDateString()}
          </span>
          <button
            onClick={() => naviguerSemaine(1)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Grille de l'emploi du temps */}
      <div className="overflow-x-auto">
        <div className="min-w-max">
          {/* En-tête des jours */}
          <div className="grid grid-cols-7 border-b">
            <div className="w-20"></div>
            {joursOuvres.map((jour) => (
              <div key={jour} className="px-4 py-2 text-center font-medium">
                {jour}
              </div>
            ))}
          </div>

          {/* Grille horaire */}
          {heures.map((heure) => (
            <div key={heure} className="grid grid-cols-7 border-b">
              <div className="w-20 px-2 py-3 text-sm text-gray-600 border-r">
                {heure}
              </div>
              {joursOuvres.map((jour) => {
                const cours = coursHebdo.find(
                  (c) => c.jour === jour && c.debut <= heure && c.fin > heure,
                );
                return (
                  <div
                    key={`${jour}-${heure}`}
                    className="px-2 py-1 border-r min-h-[4rem]"
                  >
                    {cours && (
                      <div className="bg-blue-100 p-2 rounded text-sm h-full">
                        <div className="font-medium">{cours.module}</div>
                        <div className="text-xs text-gray-600">
                          {cours.professeur} - {cours.salle}
                        </div>
                        <div className="text-xs text-gray-500">
                          {cours.debut} - {cours.fin}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
