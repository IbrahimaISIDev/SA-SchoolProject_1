import React from 'react';
import { Clock } from 'lucide-react';

interface Cours {
  id: string;
  titre: string;
  debut: string;
  fin: string;
  salle: string;
  classe: string;
  type: 'cours' | 'tp' | 'examen';
}

interface VueJournaliereProps {
  date: Date;
  cours: Cours[];
}

const VueJournaliere = ({ date, cours }) => {
  const heures = Array.from({ length: 12 }, (_, i) => i + 8); // 8h à 19h

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">
          {date.toLocaleDateString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
          })}
        </h3>
      </div>

      <div className="divide-y">
        {heures.map((heure) => {
          const coursDeCetteHeure = cours.filter(
            (c) => parseInt(c.debut.split(':')[0]) === heure,
          );

          return (
            <div key={heure} className="flex p-4">
              {/* Marqueur d'heure */}
              <div className="w-20 flex items-start pt-2">
                <Clock size={16} className="mr-2 text-gray-400" />
                <span className="text-sm text-gray-600">{`${heure}:00`}</span>
              </div>

              {/* Conteneur des cours */}
              <div className="flex-1 ml-4">
                {coursDeCetteHeure.map((cours) => (
                  <div
                    key={cours.id}
                    className={`p-3 rounded-lg mb-2 ${
                      cours.type === 'cours'
                        ? 'bg-blue-50 border-l-4 border-blue-500'
                        : cours.type === 'tp'
                          ? 'bg-green-50 border-l-4 border-green-500'
                          : 'bg-yellow-50 border-l-4 border-yellow-500'
                    }`}
                  >
                    <div className="font-medium">{cours.titre}</div>
                    <div className="text-sm text-gray-600">
                      {cours.debut} - {cours.fin}
                    </div>
                    <div className="text-sm text-gray-600">
                      Salle: {cours.salle} | Classe: {cours.classe}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VueJournaliere;
