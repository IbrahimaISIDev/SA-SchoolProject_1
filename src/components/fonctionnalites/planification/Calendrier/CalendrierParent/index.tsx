// src/components/fonctionnalites/planification/Calendrier/CalendrierParent.tsx
import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import MainCalendar from '../../../../common/CalendarComponents/MainCalendar';
import { ParentFilters, UserFilters } from '../../../../../types/types';

const CalendrierParent = () => {
  const [filters, setFilters] = useState<ParentFilters>({
    type: 'parent',
    enfant: '',
    module: '',
    professeur: '',
  });

  // Données exemple
  const enfants = [
    { id: 1, nom: 'Fatou Diallo', classe: 'Terminale S' },
    { id: 2, nom: 'Amadou Diallo', classe: 'Première S' },
  ];

  const coursJour = {
    1: [
      {
        id: 1,
        module: 'Développement Web',
        professeur: 'Coach Wane',
        salle: 'Salle 101',
        debut: '08:30',
        fin: '10:30',
        type: 'CM',
      },
    ],
    2: [
      {
        id: 2,
        module: 'Base de données',
        professeur: 'Coach Aly',
        salle: 'Salle 203',
        debut: '11:00',
        fin: '13:00',
        type: 'TD',
      },
    ],
  };

  const getTotalCoursJour = () => {
    if (filters.enfant) {
      return coursJour[filters.enfant]?.length || 0;
    }
    return Object.values(coursJour).reduce(
      (total, cours) => total + cours.length,
      0,
    );
  };

  const getProchainCours = () => {
    let tousLesCours = [];
    Object.values(coursJour).forEach((cours) => {
      tousLesCours = [...tousLesCours, ...cours];
    });
    const prochain = tousLesCours.sort((a, b) =>
      a.debut.localeCompare(b.debut),
    )[0];
    return prochain?.debut || '--:--';
  };

  const stats = [
    {
      id: 'cours-jour',
      title: "Cours aujourd'hui",
      value: getTotalCoursJour(),
      icon: <Calendar className="h-5 w-5" />,
      color: 'blue',
    },
    {
      id: 'prochain-cours',
      title: 'Prochain cours',
      value: getProchainCours(),
      icon: <Clock className="h-5 w-5" />,
      color: 'green',
    },
    {
      id: 'enfants',
      title: 'Enfants',
      value: enfants.length,
      icon: <Users className="h-5 w-5" />,
      color: 'purple',
    },
  ];
  const handleFilterChange = (newFilters: UserFilters) => {
    if (newFilters.type === 'parent') {
      setFilters(newFilters);
    }
  };

  return (
    <MainCalendar
      type="parent"
      stats={stats}
      title="Emploi du temps des enfants"
      subtitle="Suivi des plannings de vos enfants"
      filters={filters}
      onFilterChange={handleFilterChange}
    />
  );
};

export default CalendrierParent; // Ensure this is a default export
