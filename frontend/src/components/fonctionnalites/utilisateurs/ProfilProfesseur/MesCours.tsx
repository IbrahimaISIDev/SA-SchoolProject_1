import React from 'react';
import {
  Clock,
  Users,
  Calendar,
  BookOpen,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';

export default function ProfessorCourses() {
  const courses = [
    {
      id: 1,
      name: 'Mathématiques Avancées',
      classe: '2ème année Info',
      schedule: 'Lundi 8h-10h',
      room: 'Salle A101',
      nbStudents: 35,
      nextSession: '2024-01-08',
      progress: 65,
      topics: ['Algèbre linéaire', 'Calcul différentiel', 'Probabilités'],
    },
    {
      id: 2,
      name: 'Intelligence Artificielle',
      classe: '3ème année Info',
      schedule: 'Mardi 14h-16h',
      room: 'Salle B203',
      nbStudents: 28,
      nextSession: '2024-01-09',
      progress: 45,
      topics: ['Machine Learning', 'Deep Learning', 'NLP'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Mes Cours</h1>
            <p className="text-blue-100">Gestion et suivi des cours</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-4 flex-grow">
                  <div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {course.name}
                      </h2>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {course.classe}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-5 w-5" />
                        <span>{course.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-5 w-5" />
                        <span>{course.room}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="h-5 w-5" />
                        <span>{course.nbStudents} étudiants</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">
                        Progression du cours
                      </h3>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">
                        Thèmes abordés
                      </h3>
                      <div className="flex gap-2 flex-wrap">
                        {course.topics.map((topic, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="text-blue-600 hover:text-blue-800 ml-4">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-6">
                <button className="p-3 text-center rounded-lg border border-blue-200 hover:bg-blue-50 transition">
                  Liste des étudiants
                </button>
                <button className="p-3 text-center rounded-lg border border-blue-200 hover:bg-blue-50 transition">
                  Gestion des absences
                </button>
                <button className="p-3 text-center rounded-lg border border-blue-200 hover:bg-blue-50 transition">
                  Notes et évaluations
                </button>
                <button className="p-3 text-center rounded-lg border border-blue-200 hover:bg-blue-50 transition">
                  Ressources du cours
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
