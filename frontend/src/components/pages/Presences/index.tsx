// src/composants/pages/Presences/index.tsx
import React, { useState } from 'react';
import { Calendar, Filter, Download } from 'lucide-react';

export default function GestionPresences() {
  const [filtreClasse, setFiltreClasse] = useState('toutes');
  const [filtrePeriode, setFiltrePeriode] = useState('semaine');

  // Données simulées pour l'exemple
  const absences = [
    {
      id: 1,
      etudiant: 'Amadou Diop',
      classe: '3ème année',
      date: '2024-12-30',
      cours: 'Développement Web',
      professeur: 'Dr. Ndiaye',
      statut: 'non justifiée',
      heures: 2,
    },
    // ... autres absences
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Gestion des Absences
        </h1>
        <div className="flex gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700">
            <Download size={20} /> Exporter
          </button>
        </div>
      </div>

      {/* Filtres */}
      <div className="flex gap-4 mb-6 bg-white p-4 rounded-lg shadow">
        <select
          className="bg-gray-50 p-2 rounded border outline-none"
          value={filtreClasse}
          onChange={(e) => setFiltreClasse(e.target.value)}
        >
          <option value="toutes">Toutes les classes</option>
          <option value="3eme">3ème année</option>
          <option value="4eme">4ème année</option>
          <option value="5eme">5ème année</option>
        </select>

        <select
          className="bg-gray-50 p-2 rounded border outline-none"
          value={filtrePeriode}
          onChange={(e) => setFiltrePeriode(e.target.value)}
        >
          <option value="semaine">Cette semaine</option>
          <option value="mois">Ce mois</option>
          <option value="semestre">Ce semestre</option>
        </select>

        <div className="flex items-center gap-2">
          <Calendar size={20} className="text-gray-400" />
          <input
            type="date"
            className="bg-gray-50 p-2 rounded border outline-none"
          />
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total absences</h3>
          <p className="text-2xl font-bold text-gray-900">24h</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Non justifiées</h3>
          <p className="text-2xl font-bold text-red-600">8h</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">
            Étudiants {'>'} 20h
          </h3>
          <p className="text-2xl font-bold text-orange-600">3</p>
        </div>
      </div>

      {/* Liste des absences */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Étudiant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Classe
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cours
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
          <tbody className="divide-y divide-gray-200">
            {absences.map((absence) => (
              <tr key={absence.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">
                    {absence.etudiant}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {absence.classe}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {absence.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-gray-900">{absence.cours}</div>
                  <div className="text-gray-500 text-sm">
                    {absence.professeur}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {absence.heures}h
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${absence.statut === 'justifiée' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {absence.statut}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">
                    Justifier
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
