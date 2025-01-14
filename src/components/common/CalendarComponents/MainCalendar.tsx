// components/calendar/MainCalendar.tsx
import React, { useState } from 'react';
import { useLayout } from '../../layouts/Layout';
import StatCard from '../../common/StatistiquesCards/StatCard';
import { Card, CardHeader, CardTitle } from '../../ui/card';

import { ParentDailyView } from './daily/ParentDailyView';
import { StudentDailyView } from './daily/StudentDailyView';
import { TeacherDailyView } from './daily/TeacherDailyView';

import { ParentWeeklyView } from './weekly/ParentWeeklyView';
import { StudentWeeklyView } from './weekly/StudentWeeklyView';
import { TeacherWeeklyView } from './weekly/TeacherWeeklyView';

// Types de filtres spécifiques
interface ParentFilters {
  enfant: string;
  module: string;
  professeur: string;
}

interface StudentFilters {
  module: string;
  professeur: string;
}

interface TeacherFilters {
  classe: string;
  module: string;
}

type UserFilters = ParentFilters | StudentFilters | TeacherFilters;

// Interface principale avec type discriminant
interface CalendarViewProps {
  type: 'parent' | 'student' | 'teacher';
  stats: Array<{
    id: string;
    title: string;
    value: string | number;
    icon: React.ReactNode;
    color: string;
  }>;
  title: string;
  subtitle: string;
  filters: UserFilters;
  onFilterChange: (filters: UserFilters) => void;
}

// Données exemple pour chaque type d'utilisateur
const teacherCourses = [
  {
    id: 1,
    module: 'Développement Web',
    classe: 'L3 Info',
    salle: 'Salle 101',
    debut: '08:30',
    fin: '10:30',
    description: 'Cours sur React et TypeScript',
    type: 'CM' as const,
    effectif: 45,
    professeur: 'Coach Wane',
    jour: 'Lundi',
    progression: 'Chapitre 3',
  },
  {
    id: 2,
    module: 'Base de données',
    classe: 'M1 Info',
    salle: 'Salle 203',
    debut: '11:00',
    fin: '13:00',
    description: 'Introduction à PostgreSQL',
    type: 'TD' as const,
    effectif: 25,
    professeur: 'Coach Diallo',
    jour: 'Mardi',
    progression: 'Chapitre 2',
  },
];

const studentCourses = [
  {
    id: 1,
    module: 'Développement Web',
    professeur: 'Coach Wane',
    salle: 'Salle 101',
    debut: '08:30',
    fin: '10:30',
    description: 'Cours sur React et TypeScript',
    type: 'CM' as const,
    jour: 'Lundi',
  },
  {
    id: 2,
    module: 'Base de données',
    professeur: 'Coach Diallo',
    salle: 'Salle 203',
    debut: '11:00',
    fin: '13:00',
    description: 'Introduction à PostgreSQL',
    type: 'TD' as const,
    jour: 'Mardi',
  },
];

const parentCourses = [
  {
    id: 1,
    module: 'Mathématiques',
    salle: 'Salle 101',
    debut: '08:30',
    fin: '10:30',
    description: 'Cours de probabilités',
    type: 'CM' as const,
    jour: 'Lundi',
    professeur: 'Coach Mathieu',
    enfant: {
      id: 1,
      nom: 'Alice Martin',
      classe: '1ère S',
    },
  },
  {
    id: 2,
    module: 'Physique',
    salle: 'Salle 203',
    debut: '11:00',
    fin: '13:00',
    description: 'Cours de mécanique',
    type: 'TD' as const,
    jour: 'Mardi',
    professeur: 'Coach Pierre',
    enfant: {
      id: 2,
      nom: 'Bob Martin',
      classe: 'Term S',
    },
  },
];

const MainCalendar: React.FC<CalendarViewProps> = ({
  type,
  stats,
  title,
  subtitle,
  filters,
  onFilterChange,
}) => {
  const { sidebarOpen } = useLayout();
  const [dateSelectionnee, setDateSelectionnee] = useState(new Date());
  const [vueActuelle, setVueActuelle] = useState<
    'journaliere' | 'hebdomadaire'
  >('journaliere');

  const naviguerDate = (direction: 'precedent' | 'suivant') => {
    const nouvelleDate = new Date(dateSelectionnee);
    if (vueActuelle === 'journaliere') {
      nouvelleDate.setDate(
        dateSelectionnee.getDate() + (direction === 'precedent' ? -1 : 1),
      );
    } else {
      nouvelleDate.setDate(
        dateSelectionnee.getDate() + (direction === 'precedent' ? -7 : 7),
      );
    }
    setDateSelectionnee(nouvelleDate);
  };

  const renderCalendarView = () => {
    const commonProps = {
      date: dateSelectionnee,
      onNavigate: naviguerDate,
    };

    if (vueActuelle === 'journaliere') {
      switch (type) {
        case 'parent':
          return (
            <ParentDailyView
              {...commonProps}
              courses={parentCourses}
              filtres={filters as ParentFilters}
            />
          );
        case 'student':
          return (
            <StudentDailyView
              {...commonProps}
              courses={studentCourses}
              filtres={filters as StudentFilters}
            />
          );
        case 'teacher':
          return (
            <TeacherDailyView
              {...commonProps}
              courses={teacherCourses}
              filtres={filters as TeacherFilters}
            />
          );
      }
    } else {
      switch (type) {
        case 'parent':
          return (
            <ParentWeeklyView
              {...commonProps}
              courses={parentCourses}
              filtres={filters as ParentFilters}
            />
          );
        case 'student':
          return (
            <StudentWeeklyView
              {...commonProps}
              courses={studentCourses}
              filtres={filters as StudentFilters}
            />
          );
        case 'teacher':
          return (
            <TeacherWeeklyView
              {...commonProps}
              courses={teacherCourses}
              filtres={filters as TeacherFilters}
            />
          );
      }
    }
  };

  return (
    <main
      className={`
        fixed 
        top-[73px] 
        right-0 
        bottom-0 
        overflow-y-auto
        bg-gray-50
        transition-all
        duration-300
        ${sidebarOpen ? 'left-64' : 'left-20'}
      `}
    >
      <div className="h-full">
        <div className="p-8">
          <div className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-2 text-blue-100">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {stats.map((stat) => (
              <StatCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                color={stat.color as 'blue' | 'green' | 'purple'} // Cast color
              />
            ))}
          </div>

          <div className="mb-6">
            <Card>
              <CardHeader className="border-b">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">Mode d'affichage</CardTitle>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setVueActuelle('journaliere')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        vueActuelle === 'journaliere'
                          ? 'bg-blue-100 text-blue-600'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Vue journalière
                    </button>
                    <button
                      onClick={() => setVueActuelle('hebdomadaire')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        vueActuelle === 'hebdomadaire'
                          ? 'bg-blue-100 text-blue-600'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Vue hebdomadaire
                    </button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {renderCalendarView()}
        </div>
      </div>
    </main>
  );
};

export default MainCalendar;
