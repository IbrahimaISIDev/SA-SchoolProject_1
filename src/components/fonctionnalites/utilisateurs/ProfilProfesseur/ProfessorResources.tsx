// ProfessorResources.js
import React, { useState } from 'react';
import {
  Upload,
  File,
  Folder,
  Download,
  Plus,
  Search,
  Trash2,
  ExternalLink,
} from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';
import { useLayout } from '../../../layouts/Layout';
import { useNavigate } from 'react-router-dom';

export function ProfessorResources() {
  const { sidebarOpen } = useLayout();
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedResourceType, setSelectedResourceType] = useState('');
  const navigate = useNavigate();

  const handleAddResource = () => {
    navigate('/professeur/resources/add');
  };

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
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Ressources Pédagogiques
              </h1>
              <p className="text-blue-100">
                Gérez vos supports de cours et exercices
              </p>
            </div>
            <button
              onClick={handleAddResource}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50"
            >
              <Plus size={20} />
              Ajouter une ressource
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Ressources
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Folder className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Téléchargements
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">158</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Download className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Espace utilisé
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    1.2 GB
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <File className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une ressource..."
                  className="pl-10 p-3 w-full border rounded-lg"
                />
              </div>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="p-3 border rounded-lg"
              >
                <option value="">Tous les cours</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name} - {course.class}
                  </option>
                ))}
              </select>
              <select
                value={selectedResourceType}
                onChange={(e) => setSelectedResourceType(e.target.value)}
                className="p-3 border rounded-lg"
              >
                <option value="">Tous les types</option>
                <option value="course">Support de cours</option>
                <option value="exercise">Exercices</option>
                <option value="research">Recherches</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Titre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Format
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Taille
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Téléchargements
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {resources.map((resource) => (
                    <tr key={resource.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{resource.title}</td>
                      <td className="px-6 py-4">
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
                      </td>
                      <td className="px-6 py-4">
                        {resource.format.toUpperCase()}
                      </td>
                      <td className="px-6 py-4">{resource.date}</td>
                      <td className="px-6 py-4">{resource.size}</td>
                      <td className="px-6 py-4">{resource.downloads}</td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-3">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Download className="h-5 w-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
