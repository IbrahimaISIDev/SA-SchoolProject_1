// VueJournaliereProf.tsx
import React from 'react';
import { Users, BookOpen } from 'lucide-react';
import { BaseCourse } from '../../../../../types/types';
import { BaseProps } from '../../../../../types/types';
import { BaseCalendarView } from '../../../../common/CalendarComponents/BaseCalendarView';
import { CourseCard } from '../../../../common/CalendarComponents/CourseCard';

type TeacherCourse = BaseCourse & {
  classe: string;
  effectif: number;
};

type TeacherProps = BaseProps & {
  filtres: {
    module: string;
    classe: string;
    salle: string;
  };
};

const VueJournaliereProf = ({ date, filtres, onNavigate }: TeacherProps) => {
  const coursJour: TeacherCourse[] = [
    {
      id: 1,
      module: 'Développement Web',
      classe: 'L3 Info',
      salle: 'Salle 101',
      debut: '08:30',
      fin: '10:30',
      description: 'Cours sur React et TypeScript',
      type: 'CM',
      effectif: 45,
      professeur: 'Coach Wane',
      jour: 'Lundi',
    },
    {
      id: 1,
      module: 'Développement Web',
      classe: 'L3 Info',
      salle: 'Salle 101',
      debut: '08:30',
      fin: '10:30',
      description: 'Cours sur React et TypeScript',
      type: 'CM',
      effectif: 45,
      professeur: 'Coach Aly',
      jour: 'Mercredi',
    },
    {
      id: 2,
      module: 'Base de données',
      classe: 'M1 Info',
      salle: 'Salle 203',
      debut: '11:00',
      fin: '13:00',
      description: 'Introduction à PostgreSQL',
      type: 'TD',
      effectif: 25,
      professeur: 'Coach Diallo',
      jour: 'Mardi',
    },
    {
      id: 3,
      module: 'Algorithmique',
      classe: 'L2 Info',
      salle: 'Amphi A',
      debut: '14:00',
      fin: '16:00',
      description: 'Complexité des algorithmes',
      type: 'CM',
      effectif: 120,
      professeur: 'Coach Robert',
      jour: 'Vendredi',
    },
  ];

  const filteredCourses = coursJour.filter(
    (cours) =>
      (!filtres.module || cours.module === filtres.module) &&
      (!filtres.classe || cours.classe === filtres.classe) &&
      (!filtres.salle || cours.salle === filtres.salle),
  );

  return (
    <BaseCalendarView date={date} onNavigate={onNavigate}>
      {filteredCourses.map((cours, index) => (
        <CourseCard
          key={cours.id}
          course={cours}
          index={index}
          renderHeader={() => (
            <>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-lg text-gray-900">
                  {cours.module}
                </h3>
              </div>
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-gray-600">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>{cours.classe}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{cours.effectif} étudiants</span>
                </div>
              </div>
            </>
          )}
        />
      ))}
    </BaseCalendarView>
  );
};

export default VueJournaliereProf;
