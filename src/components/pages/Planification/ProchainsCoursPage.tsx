import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProchainsCoursPage = () => {
  const navigate = useNavigate();
  // const [currentDate, setCurrentDate] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const prochainsCours = [
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
      module: 'Intelligence Artificielle',
      professeur: 'Dr. Faye',
      horaire: '14:00 - 16:00',
      salle: 'Salle 305',
      date: '2024-12-28',
      type: 'TP',
    },
    {
      id: 8,
      module: 'Architecture des Systèmes',
      professeur: 'Pr. Sow',
      horaire: '09:00 - 11:00',
      salle: 'Salle 202',
      date: '2024-12-29',
      type: 'CM',
    },
    {
      id: 9,
      module: 'Réseaux et Télécommunications',
      professeur: 'Dr. Ba',
      horaire: '13:30 - 15:30',
      salle: 'Salle 104',
      date: '2024-12-29',
      type: 'TD',
    },
    {
      id: 10,
      module: 'Conception UML',
      professeur: 'Pr. Kane',
      horaire: '10:00 - 12:00',
      salle: 'Salle 301',
      date: '2024-12-30',
      type: 'TP',
    },
  ];

  const totalPages = Math.ceil(prochainsCours.length / itemsPerPage);
  const currentCours = prochainsCours.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const getTypeColor = (type) => {
    const colors = {
      CM: 'bg-blue-100 text-blue-800',
      TD: 'bg-green-100 text-green-800',
      TP: 'bg-purple-100 text-purple-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="p-8">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-white/20 hover:bg-white/30 transition p-2 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold">Prochains cours</h1>
            <p className="mt-2 text-blue-100">
              Créez et configurez un nouveau cours
            </p>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Liste des cours à venir</CardTitle>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="font-medium">
                Page {currentPage} sur {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
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
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>
                            {new Date(cours.date).toLocaleDateString('fr-FR', {
                              weekday: 'long',
                              day: 'numeric',
                              month: 'long',
                            })}
                          </span>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default ProchainsCoursPage;
