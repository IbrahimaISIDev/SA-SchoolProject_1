import React from 'react';

interface Cours {
  id: number;
  titre: string;
  debut: string;
  fin: string;
  jour: string;
  salle: string;
  classe: string;
  type: 'cours' | 'tp' | 'exam';
}

interface Props {
  date: Date;
  cours: Cours[];
}

export default function VueHebdomadaire({ date, cours }: Props) {
  // Créer le tableau des heures (8h-18h)
  const heures = Array.from({ length: 11 }, (_, i) => i + 8);

  // Obtenir les jours de la semaine
  const getJoursSemaine = () => {
    const jours = [];
    const debut = new Date(date);
    debut.setDate(debut.getDate() - debut.getDay() + 1); // Commencer par Lundi

    for (let i = 0; i < 6; i++) {
      // Lundi à Samedi
      const jour = new Date(debut);
      jour.setDate(debut.getDate() + i);
      jours.push(jour);
    }
    return jours;
  };

  // Vérifier si un cours est prévu à une heure donnée
  const getCoursHeure = (jour: Date, heure: number) => {
    return cours.find((c) => {
      const jourCours = new Date(c.jour);
      const heureCours = parseInt(c.debut.split(':')[0]);
      return (
        jourCours.toDateString() === jour.toDateString() && heureCours === heure
      );
    });
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        {/* En-tête avec les jours */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          <div className="w-20"></div> {/* Cellule vide pour l'alignement */}
          {getJoursSemaine().map((jour, index) => (
            <div key={index} className="text-center font-medium p-2">
              <div>
                {jour.toLocaleDateString('fr-FR', { weekday: 'short' })}
              </div>
              <div className="text-sm text-gray-500">
                {jour.toLocaleDateString('fr-FR', { day: 'numeric' })}
              </div>
            </div>
          ))}
        </div>

        {/* Grille des heures */}
        <div className="space-y-1">
          {heures.map((heure) => (
            <div key={heure} className="grid grid-cols-7 gap-2">
              {/* Colonne des heures */}
              <div className="w-20 text-right pr-4 text-sm text-gray-500">
                {`${heure}:00`}
              </div>

              {/* Cellules pour chaque jour */}
              {getJoursSemaine().map((jour, index) => {
                const coursPrevu = getCoursHeure(jour, heure);

                return (
                  <div
                    key={index}
                    className="relative h-16 border border-gray-200 rounded bg-gray-50"
                  >
                    {coursPrevu && (
                      <div className="absolute inset-0 m-1 p-2 bg-blue-100 rounded shadow-sm">
                        <div className="text-sm font-medium">
                          {coursPrevu.titre}
                        </div>
                        <div className="text-xs text-gray-600">
                          {`${coursPrevu.debut} - ${coursPrevu.fin}`}
                        </div>
                        <div className="text-xs text-gray-600">
                          {`${coursPrevu.salle} - ${coursPrevu.classe}`}
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
