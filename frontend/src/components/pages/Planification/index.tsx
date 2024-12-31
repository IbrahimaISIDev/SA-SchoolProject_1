// src/pages/Planification/index.tsx
import React, { useState } from 'react';
import { Calendar, Plus, Filter, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Planification() {
  const navigate = useNavigate();

  const handleNewCourse = () => {
    navigate('/planification/gestion-cours');
  };
  const [filtreModule, setFiltreModule] = useState('');
  const [filtreProfesseur, setFiltreProfesseur] = useState('');

  const modules = [
    { id: 1, nom: 'Développement Web' },
    { id: 2, nom: 'Base de données' },
    { id: 3, nom: 'Algorithmes' },
  ];

  const professeurs = [
    { id: 1, nom: 'Dr. Diallo' },
    { id: 2, nom: 'Pr. Ndiaye' },
    { id: 3, nom: 'M. Sow' },
  ];

  const coursPlanifies = [
    {
      id: 1,
      module: 'Développement Web',
      professeur: 'Dr. Diallo',
      classe: 'L2 Informatique',
      heures: 30,
      statut: 'En cours',
    },
    // Ajoutez d'autres cours...
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Planification des Cours
        </h1>
        <button
          onClick={handleNewCourse}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Nouveau Cours
        </button>
      </div>

      {/* Filtres */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="pl-10 pr-4 py-2 w-full border rounded-lg"
          />
        </div>
        <select
          className="border rounded-lg px-4 py-2"
          value={filtreModule}
          onChange={(e) => setFiltreModule(e.target.value)}
        >
          <option value="">Tous les modules</option>
          {modules.map((module) => (
            <option key={module.id} value={module.id}>
              {module.nom}
            </option>
          ))}
        </select>
        <select
          className="border rounded-lg px-4 py-2"
          value={filtreProfesseur}
          onChange={(e) => setFiltreProfesseur(e.target.value)}
        >
          <option value="">Tous les professeurs</option>
          {professeurs.map((prof) => (
            <option key={prof.id} value={prof.id}>
              {prof.nom}
            </option>
          ))}
        </select>
      </div>

      {/* Tableau des cours */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Module
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Professeur
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Classe
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Heures
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {coursPlanifies.map((cours) => (
              <tr key={cours.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{cours.module}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {cours.professeur}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{cours.classe}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cours.heures}h</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      cours.statut === 'En cours'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {cours.statut}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800">
                    Modifier
                  </button>
                  <button className="ml-4 text-red-600 hover:text-red-800">
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
