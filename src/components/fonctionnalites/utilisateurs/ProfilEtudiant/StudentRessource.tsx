import React, { useState } from 'react';
import { Card, CardContent } from '../../../ui/card';
import { Download, Search, File } from 'lucide-react';
// import { Clock, Download, ExternalLink } from 'lucide-react';
import { useLayout } from '../../../layouts/Layout';

// StudentResources.js
export function StudentResources() {
  const { sidebarOpen } = useLayout();
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const resources = [
    {
      id: 1,
      title: 'Introduction au HTML/CSS',
      type: 'course',
      format: 'pdf',
      date: '2024-01-10',
      size: '2.5 MB',
      downloads: 45,
    },
    {
      id: 2,
      title: "TP - Création d'une page web",
      type: 'exercise',
      format: 'docx',
      date: '2024-01-12',
      size: '1.8 MB',
      downloads: 38,
    },
  ];

  return (
    <main
      className={`fixed top-[73px] right-0 bottom-0 overflow-y-auto bg-gray-50 transition-all duration-300 ${sidebarOpen ? 'left-64' : 'left-20'}`}
    >
      <div className="p-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl font-bold mb-2">Mes Ressources</h1>
          <p className="text-blue-100">
            Accédez à vos supports de cours et exercices
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une ressource..."
                  className="pl-10 p-3 w-full border rounded-lg"
                />
              </div>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="p-3 border rounded-lg"
              >
                <option value="">Toutes les matières</option>
                <option value="web">Développement Web</option>
                <option value="db">Base de données</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <Card
                  key={resource.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <File className="h-6 w-6 text-blue-600" />
                      </div>
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
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Ajouté le {resource.date} • {resource.size}
                    </p>
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                      <Download className="h-5 w-5" />
                      Télécharger
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
