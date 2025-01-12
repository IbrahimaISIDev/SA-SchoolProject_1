import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../ui/card';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Cours {
  id: number;
  module: string;
  professeur: string;
  horaire: string;
  salle: string;
  date: string;
  type?: 'CM' | 'TD' | 'TP';
}

const CoursWidget = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const prochainsCours: Cours[] = [
    {
      id: 1,
      module: 'Développement Web React',
      professeur: 'Dr. Diallo',
      horaire: '08:30 - 10:30',
      salle: 'Salle 101',
      date: '2024-12-27',
      type: 'CM',
    },
    {
      id: 2,
      module: 'Base de données avancées',
      professeur: 'Pr. Ndiaye',
      horaire: '11:00 - 13:00',
      salle: 'Salle 203',
      date: '2024-12-27',
      type: 'TD',
    },
    {
      id: 3,
      module: 'Intelligence Artificielle',
      professeur: 'Dr. Faye',
      horaire: '14:00 - 16:00',
      salle: 'Salle 305',
      date: '2024-12-28',
      type: 'TP',
    },
    {
      id: 4,
      module: 'Architecture des Systèmes',
      professeur: 'Pr. Sow',
      horaire: '09:00 - 11:00',
      salle: 'Salle 202',
      date: '2024-12-29',
      type: 'CM',
    },
    {
      id: 5,
      module: 'Réseaux et Télécommunications',
      professeur: 'Dr. Ba',
      horaire: '13:30 - 15:30',
      salle: 'Salle 104',
      date: '2024-12-29',
      type: 'TD',
    },
    {
      id: 6,
      module: 'Conception UML',
      professeur: 'Pr. Kane',
      horaire: '10:00 - 12:00',
      salle: 'Salle 301',
      date: '2024-12-30',
      type: 'TP',
    },
    {
      id: 7,
      module: 'Sécurité Informatique',
      professeur: 'Dr. Ndiaye',
      horaire: '15:00 - 17:00',
      salle: 'Salle 402',
      date: '2024-12-30',
      type: 'CM',
    },
    {
      id: 8,
      module: 'Programmation Mobile',
      professeur: 'Dr. Sy',
      horaire: '08:00 - 10:00',
      salle: 'Salle 103',
      date: '2024-12-31',
      type: 'TD',
    },
  ];

  const totalPages = Math.ceil(prochainsCours.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCours = prochainsCours.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const getTypeColor = (type?: string) => {
    const colors = {
      CM: 'bg-blue-100 text-blue-800',
      TD: 'bg-green-100 text-green-800',
      TP: 'bg-purple-100 text-purple-800',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Prochains cours</CardTitle>
          <Link
            to="/prochains-cours"
            className="text-blue-600 text-sm hover:underline"
          >
            Voir tout
          </Link>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {currentCours.map((cours, index) => (
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
                        <span>{cours.professeur}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{cours.salle}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{cours.horaire}</span>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(cours.type)}`}
                  >
                    {cours.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`flex items-center px-3 py-1 rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Précédent
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} sur {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`flex items-center px-3 py-1 rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          >
            Suivant
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoursWidget;
