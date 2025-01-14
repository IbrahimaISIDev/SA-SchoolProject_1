import React, { useState } from 'react';
import { Calendar, Clock, Users, Book } from 'lucide-react';
import MainCalendar from '../../../../common/CalendarComponents/MainCalendar';
import {
  TeacherFilters,
  UserFilters,
  isTeacherFilters,
} from '../../../../../types/types';

const CalendrierProfesseur = () => {
  // Initialiser avec TeacherFilters au lieu de UserFilters
  const [filters, setFilters] = useState<TeacherFilters>({
    type: 'teacher',
    classe: '', // maintenant requis
    module: '',
    salle: '',
    professeur: '', // depuis BaseFilters
  });

  const statsJour = {
    coursAujourdhui: 4,
    prochainCours: '10:30',
    prochaineClasse: 'L3 Info',
    totalEtudiants: 120,
  };

  const stats = [
    {
      id: 'cours-jour',
      title: "Cours aujourd'hui",
      value: statsJour.coursAujourdhui,
      icon: <Calendar className="h-5 w-5" />,
      color: 'blue',
    },
    {
      id: 'prochain-cours',
      title: 'Prochain cours',
      value: statsJour.prochainCours,
      icon: <Clock className="h-5 w-5" />,
      color: 'green',
    },
    {
      id: 'prochaine-classe',
      title: 'Prochaine classe',
      value: statsJour.prochaineClasse,
      icon: <Book className="h-5 w-5" />,
      color: 'purple',
    },
    {
      id: 'total-etudiants',
      title: 'Total étudiants',
      value: statsJour.totalEtudiants,
      icon: <Users className="h-5 w-5" />,
      color: 'blue',
    },
  ];

  const handleFilterChange = (newFilters: UserFilters) => {
    if (isTeacherFilters(newFilters)) {
      setFilters(newFilters);
    }
  };

  return (
    <MainCalendar
      type="teacher"
      stats={stats}
      title="Emploi du temps - Professeur"
      subtitle="Gestion de vos cours et planning"
      filters={filters}
      onFilterChange={handleFilterChange}
    />
  );
};

export default CalendrierProfesseur;
