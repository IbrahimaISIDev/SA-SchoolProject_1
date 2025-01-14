import React, { useState } from 'react';
import { Calendar, Clock, Layout } from 'lucide-react';
import MainCalendar from '../../../../common/CalendarComponents/MainCalendar';
import {
  StudentFilters,
  UserFilters,
  isStudentFilters,
} from '../../../../../types/types';

const CalendrierEtudiant = () => {
  const [filters, setFilters] = useState<StudentFilters>({
    type: 'student',
    module: '', // Maintenant requis
    professeur: '', // Maintenant requis
    classe: '',
  });

  const coursJour = [
    {
      id: 1,
      module: 'Développement Web',
      professeur: 'Dr. Diallo',
      salle: 'Salle 101',
      debut: '08:30',
      fin: '10:30',
      description: 'Cours sur React et TypeScript',
      type: 'CM',
    },
    {
      id: 2,
      module: 'Base de données',
      professeur: 'Pr. Ndiaye',
      salle: 'Salle 203',
      debut: '11:00',
      fin: '13:00',
      description: 'Introduction à PostgreSQL',
      type: 'TD',
    },
  ];

  const stats = [
    {
      id: 'cours-jour',
      title: "Cours aujourd'hui",
      value: coursJour.length,
      icon: <Calendar className="h-5 w-5" />,
      color: 'blue',
    },
    {
      id: 'prochaine-seance',
      title: 'Prochaine séance',
      value: coursJour[0]?.debut || '--:--',
      icon: <Clock className="h-5 w-5" />,
      color: 'green',
    },
    {
      id: 'salle',
      title: 'Salle actuelle',
      value: coursJour[0]?.salle || 'Aucune',
      icon: <Layout className="h-5 w-5" />,
      color: 'purple',
    },
  ];

  const handleFilterChange = (newFilters: UserFilters) => {
    if (isStudentFilters(newFilters)) {
      setFilters(newFilters);
    }
  };

  return (
    <MainCalendar
      type="student"
      stats={stats}
      title="Emploi du temps - Étudiant"
      subtitle="Suivi de vos cours et planning"
      filters={filters}
      onFilterChange={handleFilterChange}
    />
  );
};

export default CalendrierEtudiant;
