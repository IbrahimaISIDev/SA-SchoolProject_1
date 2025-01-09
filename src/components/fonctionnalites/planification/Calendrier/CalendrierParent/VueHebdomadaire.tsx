import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  date: Date;
  filtres: {
    enfant: string;
    module: string;
    professeur: string;
  };
  enfants: Array<{
    id: number;
    nom: string;
    classe: string;
  }>;
  onNavigate: (direction: 'precedent' | 'suivant') => void;
};

const VueHebdomadaireParent = ({
  date,
  filtres,
  enfants,
  onNavigate,
}: Props) => {
  const joursOuvres = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ];
  const heures = Array.from(
    { length: 14 },
    (_, i) => `${(i + 8).toString().padStart(2, '0')}:00`,
  );

  // Données exemple - À remplacer par des données réelles
  const coursHebdo = {
    1: [
      // Cours de Fatou
      {
        id: 1,
        module: 'Développement Web',
        professeur: 'Coach Wane',
        salle: 'Salle 101',
        debut: '08:30',
        fin: '10:30',
        jour: 'Lundi',
        type: 'CM',
      },
    ],
    2: [
      // Cours d'Amadou
      {
        id: 2,
        module: 'Base de données',
        professeur: 'Coach Aly',
        salle: 'Salle 203',
        debut: '11:00',
        fin: '13:00',
        jour: 'Mardi',
        type: 'TD',
      },
    ],
  };

  const getTypeColor = (type: string) => {
    const colors = {
      CM: 'bg-blue-50 text-blue-800 border-blue-200',
      TD: 'bg-green-50 text-green-800 border-green-200',
      TP: 'bg-purple-50 text-purple-800 border-purple-200',
    };
    return (
      colors[type as keyof typeof colors] ||
      'bg-gray-50 text-gray-800 border-gray-200'
    );
  };

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Planning de la semaine</CardTitle>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('precedent')}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-medium">
              Semaine du {date.toLocaleDateString()}
            </span>
            <button
              onClick={() => onNavigate('suivant')}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="overflow-x-auto">
          <div className="min-w-max">
            <div className="grid grid-cols-7 gap-4 mb-4">
              <div className="w-20" />
              {joursOuvres.map((jour) => (
                <div
                  key={jour}
                  className="px-4 py-2 text-center font-medium bg-gray-50 rounded-lg"
                >
                  {jour}
                </div>
              ))}
            </div>

            {heures.map((heure, indexHeure) => (
              <motion.div
                key={heure}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: indexHeure * 0.05 }}
                className="grid grid-cols-7 gap-4 mb-4"
              >
                <div className="w-20 text-sm text-gray-600 flex items-center">
                  {heure}
                </div>
                {joursOuvres.map((jour) => {
                  const coursHeure = Object.entries(coursHebdo)
                    .filter(
                      ([enfantId]) =>
                        !filtres.enfant || filtres.enfant === enfantId,
                    )
                    .flatMap(([enfantId, cours]) =>
                      cours.map((c) => ({
                        ...c,
                        enfant: enfants.find(
                          (e) => e.id.toString() === enfantId,
                        ),
                      })),
                    )
                    .filter(
                      (c) =>
                        c.jour === jour &&
                        c.debut <= heure &&
                        c.fin > heure &&
                        (!filtres.module || c.module === filtres.module) &&
                        (!filtres.professeur ||
                          c.professeur === filtres.professeur),
                    );

                  return (
                    <div
                      key={`${jour}-${heure}`}
                      className="min-h-[4rem] rounded-lg border"
                    >
                      {coursHeure.map((cours, index) => (
                        <div
                          key={`${cours.id}-${index}`}
                          className={`h-full p-2 rounded-lg ${getTypeColor(cours.type)}`}
                        >
                          <div className="font-medium text-sm">
                            {cours.module}
                          </div>
                          <div className="text-xs text-gray-600">
                            {cours.enfant ? cours.enfant.nom : 'Enfant inconnu'}
                          </div>

                          <div className="text-xs text-gray-500">
                            {cours.salle}
                          </div>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(cours.type)}`}
                          >
                            {cours.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VueHebdomadaireParent;
