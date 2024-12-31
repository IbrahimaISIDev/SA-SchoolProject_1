// src/components/pages/TableauBord.tsx
import React from 'react';
import { Users, BookOpen, Clock, AlertCircle } from 'lucide-react';
import { useLayout } from '../../../contexts/LayoutContext';
import StatWidget from './Widgets/StatWidget';
import CoursWidget from './Widgets/CoursWidget';
import AbsencesWidget from './Widgets/AbsencesWidget';
import PerformanceWidget from './Widgets/PerformanceWidget';

export default function TableauBord() {
  const { sidebarOpen } = useLayout();

  return (
    <div className="space-y-6 p-6">
      {/* En-tête */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Tableau de Bord</h1>
        <div className="flex space-x-4">
          <select className="px-4 py-2 border rounded-lg">
            <option>Semestre 1</option>
            <option>Semestre 2</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Exporter
          </button>
        </div>
      </div>

      {/* Widgets statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatWidget
          icon={<Users size={24} />}
          title="Étudiants"
          value="256"
          evolution="+12%"
          className="bg-blue-50"
          iconColor="text-blue-600"
        />
        <StatWidget
          icon={<BookOpen size={24} />}
          title="Cours"
          value="32"
          evolution="+5%"
          className="bg-green-50"
          iconColor="text-green-600"
        />
        <StatWidget
          icon={<Clock size={24} />}
          title="Heures"
          value="128"
          evolution="-3%"
          className="bg-yellow-50"
          iconColor="text-yellow-600"
        />
        <StatWidget
          icon={<AlertCircle size={24} />}
          title="Absences"
          value="15"
          evolution="+2%"
          className="bg-red-50"
          iconColor="text-red-600"
        />
      </div>

      {/* Widgets détaillés */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CoursWidget />
        <AbsencesWidget />
        <PerformanceWidget />
      </div>
    </div>
  );
}
