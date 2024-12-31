import React, { useState } from 'react';
import { FileSpreadsheet, Download, Filter } from 'lucide-react';

const GestionNotes = () => {
  const [classes] = useState([
    { id: 1, nom: 'L3 Informatique' },
    { id: 2, nom: 'M1 Data Science' },
  ]);

  const [modules] = useState([
    { id: 1, nom: 'Développement Web', coefficient: 3 },
    { id: 2, nom: 'Base de données', coefficient: 4 },
  ]);

  const [notes] = useState([
    {
      id: 1,
      etudiant: 'Fatou Ndiaye',
      note: 15,
      module: 'Développement Web',
      type: 'Examen',
    },
    {
      id: 2,
      etudiant: 'Amadou Diallo',
      note: 17,
      module: 'Base de données',
      type: 'Contrôle',
    },
  ]);

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Gestion des Notes</h1>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <FileSpreadsheet size={20} className="mr-2" />
            Importer
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download size={20} className="mr-2" />
            Exporter
          </button>
        </div>
      </div>

      {/* Filtres */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Sélectionner une classe</option>
          {classes.map((classe) => (
            <option key={classe.id} value={classe.id}>
              {classe.nom}
            </option>
          ))}
        </select>
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Sélectionner un module</option>
          {modules.map((module) => (
            <option key={module.id} value={module.id}>
              {module.nom}
            </option>
          ))}
        </select>
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Type d'évaluation</option>
          <option value="examen">Examen</option>
          <option value="controle">Contrôle</option>
        </select>
      </div>

      {/* Tableau des notes */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Notes et Évaluations
          </h2>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Étudiant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Module
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Note
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Coefficient
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {notes.map((note) => (
              <tr key={note.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {note.etudiant}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {note.module}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {note.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-sm font-semibold rounded bg-blue-100 text-blue-800">
                    {note.note}/20
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {modules.find((m) => m.nom === note.module)?.coefficient}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Statistiques rapides */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">
            Moyenne de classe
          </h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">16.0</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">
            Note la plus haute
          </h3>
          <p className="mt-2 text-3xl font-bold text-green-600">17.0</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">
            Note la plus basse
          </h3>
          <p className="mt-2 text-3xl font-bold text-red-600">15.0</p>
        </div>
      </div>
    </div>
  );
};

export default GestionNotes;
