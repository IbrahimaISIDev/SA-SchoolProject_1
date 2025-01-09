import React, { useState } from 'react';
import { Calendar, Clock, Layout, Users } from 'lucide-react';
import { useLayout } from '../../../../../contexts/LayoutContext';
import StatCard from './StatsPlanningParent';
import FiltresCalendrierParent from './FiltresCalendrier';
import VueJournaliereParent from './VueJournaliere';
import VueHebdomadaireParent from './VueHebdomadaire';

const CalendrierParent = () => {
  const { sidebarOpen } = useLayout();
  const [dateSelectionnee, setDateSelectionnee] = useState(new Date());
  const [vueActuelle, setVueActuelle] = useState<
    'journaliere' | 'hebdomadaire'
  >('journaliere');
  const [filtres, setFiltres] = useState({
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
    if (filtres.enfant) {
      return coursJour[filtres.enfant]?.length || 0;
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
            <h1 className="text-3xl font-bold">Emploi du temps des enfants</h1>
            <p className="mt-2 text-blue-100">
              Suivi des plannings de vos enfants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StatCard
              title="Cours aujourd'hui"
              value={getTotalCoursJour()}
              icon={<Calendar className="h-5 w-5" />}
              color="blue"
            />
            <StatCard
              title="Prochain cours"
              value={getProchainCours()}
              icon={<Clock className="h-5 w-5" />}
              color="green"
            />
            <StatCard
              title="Enfants"
              value={enfants.length}
              icon={<Users className="h-5 w-5" />}
              color="purple"
            />
          </div>

          <div className="mb-6">
            <div className="flex space-x-2 mb-4">
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

            <FiltresCalendrierParent
              filtres={filtres}
              setFiltres={setFiltres}
              enfants={enfants}
            />

            {vueActuelle === 'journaliere' ? (
              <VueJournaliereParent
                date={dateSelectionnee}
                filtres={filtres}
                onNavigate={naviguerDate}
                enfants={[]}
                coursJour={{}}
              />
            ) : (
              <VueHebdomadaireParent
                date={dateSelectionnee}
                filtres={filtres}
                onNavigate={naviguerDate}
                enfants={[]}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CalendrierParent;
