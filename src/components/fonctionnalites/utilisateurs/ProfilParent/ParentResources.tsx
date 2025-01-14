import React, { useState } from 'react';
import { Card, CardContent } from '../../../ui/card';
import { Clock, Download, ExternalLink, File } from 'lucide-react';
import { useLayout } from '../../../layouts/Layout';

// ParentResources.js
export function ParentResources() {
  const { sidebarOpen } = useLayout();
  const [selectedChild, setSelectedChild] = useState('1');
  const [selectedSubject, setSelectedSubject] = useState('');

  const children = [
    { id: '1', name: 'Fatou Diallo', class: 'L2 GL' },
    { id: '2', name: 'Amadou Diallo', class: 'L1 GL' },
  ];
  const courses = [
    { id: '1', name: 'Développement Web', class: 'L2 GL' },
    { id: '2', name: 'Base de données', class: 'L1 GL' },
  ];
  const resources = [
    {
      id: 1,
      title: 'Introduction au HTML/CSS',
      type: 'course',
      format: 'pdf',
      date: '2024-01-10',
      size: '2.5 MB',
      downloads: 45,
      courseId: '1', // Added courseId
      viewed: true, // Added viewed
    },
    {
      id: 2,
      title: "TP - Création d'une page web",
      type: 'exercise',
      format: 'docx',
      date: '2024-01-12',
      size: '1.8 MB',
      downloads: 38,
      courseId: '1', // Added courseId
      viewed: false, // Added viewed
    },
    {
      id: 3,
      title: 'Concepts de base des bases de données',
      type: 'course',
      format: 'pdf',
      date: '2024-01-11',
      size: '3.2 MB',
      downloads: 52,
      courseId: '2', // Added courseId
      viewed: true, // Added viewed
    },
  ];

  return (
    <main
      className={`fixed top-[73px] right-0 bottom-0 overflow-y-auto bg-gray-50 transition-all duration-300 ${sidebarOpen ? 'left-64' : 'left-20'}`}
    >
      <div className="p-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl font-bold mb-2">Ressources Pédagogiques</h1>
          <p className="text-blue-100">
            Suivez les supports de cours de vos enfants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <select
            value={selectedChild}
            onChange={(e) => setSelectedChild(e.target.value)}
            className="p-3 bg-white rounded-lg border focus:border-blue-500"
          >
            {children.map((child) => (
              <option key={child.id} value={child.id}>
                {child.name} - {child.class}
              </option>
            ))}
          </select>

          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="p-3 bg-white rounded-lg border focus:border-blue-500"
          >
            <option value="">Toutes les matières</option>
            <option value="web">Développement Web</option>
            <option value="db">Base de données</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">{course.name}</h3>
                  <div className="space-y-4">
                    {resources
                      .filter((r) => r.courseId === course.id)
                      .map((resource) => (
                        <div
                          key={resource.id}
                          className="bg-gray-50 p-4 rounded-lg flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <div className="bg-blue-100 p-2 rounded-lg">
                              <File className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">{resource.title}</h4>
                              <p className="text-sm text-gray-500">
                                Ajouté le {resource.date} • {resource.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold 
                            ${
                              resource.type === 'course'
                                ? 'bg-blue-100 text-blue-800'
                                : resource.type === 'exercise'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-purple-100 text-purple-800'
                            }`}
                            >
                              {resource.type === 'course'
                                ? 'Cours'
                                : resource.type === 'exercise'
                                  ? 'Exercice'
                                  : 'Recherche'}
                            </span>
                            <button
                              className="text-blue-600 hover:text-blue-800"
                              title="Télécharger"
                            >
                              <Download className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">
                    Aperçu des ressources
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">
                        {
                          resources.filter((r) => r.courseId === course.id)
                            .length
                        }
                      </p>
                      <p className="text-sm text-gray-500">
                        Ressources totales
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">
                        {
                          resources.filter(
                            (r) => r.courseId === course.id && !r.viewed,
                          ).length
                        }
                      </p>
                      <p className="text-sm text-gray-500">
                        Nouvelles ressources
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">
                        {
                          resources.filter(
                            (r) =>
                              r.courseId === course.id && r.type === 'exercise',
                          ).length
                        }
                      </p>
                      <p className="text-sm text-gray-500">Exercices</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section Notifications */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              Dernières notifications
            </h3>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  type: 'new_resource',
                  message:
                    'Nouveau support de cours ajouté en Développement Web',
                  date: '2024-01-13',
                  course: 'Développement Web',
                },
                {
                  id: 2,
                  type: 'deadline',
                  message:
                    'Date limite pour le TP de Base de données dans 3 jours',
                  date: '2024-01-12',
                  course: 'Base de données',
                },
              ].map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-full 
                      ${notification.type === 'new_resource' ? 'bg-blue-100' : 'bg-yellow-100'}`}
                    >
                      {notification.type === 'new_resource' ? (
                        <File className="h-5 w-5 text-blue-600" />
                      ) : (
                        <Clock className="h-5 w-5 text-yellow-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{notification.message}</p>
                      <p className="text-sm text-gray-500">
                        {notification.course} • {notification.date}
                      </p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
