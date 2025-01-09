// src/components/parent/calendar/VueJournaliereParent.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../ui/card';
import { Clock, MapPin, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  date: Date;
  filtres: {
    enfant: string;
    module: string;
    professeur: string;
  };
  onNavigate: (direction: 'precedent' | 'suivant') => void;
  enfants: Array<{
    id: number;
    nom: string;
    classe: string;
  }>;
  coursJour: {
    [key: string]: Array<{
      id: number;
      module: string;
      professeur: string;
      salle: string;
      debut: string;
      fin: string;
      type: string;
    }>;
  };
};

const VueJournaliereParent = ({
  date,
  filtres,
  onNavigate,
  enfants,
  coursJour,
}: Props) => {
  const getTypeColor = (type: string) => {
    const colors = {
      CM: 'bg-blue-100 text-blue-800 border-blue-200',
      TD: 'bg-green-100 text-green-800 border-green-200',
      TP: 'bg-purple-100 text-purple-800 border-purple-200',
    };
    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getCoursFiltre = () => {
    let cours = [];
    Object.entries(coursJour).forEach(([enfantId, coursEnfant]) => {
      if (!filtres.enfant || filtres.enfant === enfantId) {
        cours = [
          ...cours,
          ...coursEnfant.map((c) => ({
            ...c,
            enfant: enfants.find((e) => e.id.toString() === enfantId),
          })),
        ];
      }
    });

    return cours
      .filter(
        (c) =>
          (!filtres.module || c.module === filtres.module) &&
          (!filtres.professeur || c.professeur === filtres.professeur),
      )
      .sort((a, b) => a.debut.localeCompare(b.debut));
  };

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Planning du jour</CardTitle>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('precedent')}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-medium">
              {date.toLocaleDateString('fr-FR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
              })}
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
        <div className="space-y-4">
          {getCoursFiltre().map((cours, index) => (
            <motion.div
              key={cours.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className={`h-2 bg-gradient-to-r ${
                  cours.type === 'CM'
                    ? 'from-blue-500 to-blue-600'
                    : cours.type === 'TD'
                      ? 'from-green-500 to-green-600'
                      : 'from-purple-500 to-purple-600'
                }`}
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {cours.module}
                    </h3>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-gray-600">
                        <User className="h-4 w-4 mr-2" />
                        <span>
                          {cours.enfant.nom} - {cours.enfant.classe}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{cours.salle}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>
                          {cours.debut} - {cours.fin}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(cours.type)}`}
                    >
                      {cours.type}
                    </span>
                    <span className="text-sm text-gray-500">
                      {cours.professeur}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VueJournaliereParent;
