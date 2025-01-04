import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import VueJournaliere from './VueJournaliere';
import VueHebdomadaire from './VueHebdomadaire';
import FiltresCalendrier from './FiltresCalendrier';
import { useLayout } from '../../../../../contexts/LayoutContext';

// Types pour les cours
type Cours = {
  id: string;
  module: string;
  professeur: string;
  salle: string;
  debut: Date;
  fin: Date;
};

export default function CalendrierEtudiant() {
  const { sidebarOpen } = useLayout();
  // const [cours, setCours] = useState<Cours[]>([]);
  const [dateSelectionnee, setDateSelectionnee] = useState(new Date());
  const [vueActuelle, setVueActuelle] = useState<
    'journaliere' | 'hebdomadaire'
  >('journaliere');
  const [filtres, setFiltres] = useState({
    module: '',
    professeur: '',
  });

  // Navigation entre les dates
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

  // Formatage de l'en-tête de date
  const formaterEnTete = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return dateSelectionnee.toLocaleDateString('fr-FR', options);
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
          {/* En-tête du calendrier */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Emploi du temps
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setVueActuelle('journaliere')}
                  className={`px-3 py-1 rounded ${
                    vueActuelle === 'journaliere'
                      ? 'bg-blue-100 text-blue-600'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  Jour
                </button>
                <button
                  onClick={() => setVueActuelle('hebdomadaire')}
                  className={`px-3 py-1 rounded ${
                    vueActuelle === 'hebdomadaire'
                      ? 'bg-blue-100 text-blue-600'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  Semaine
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Calendar className="text-gray-500" size={20} />
                <span className="font-medium">{formaterEnTete()}</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => naviguerDate('precedent')}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => naviguerDate('suivant')}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          {/* Filtres */}
          <FiltresCalendrier filtres={filtres} setFiltres={setFiltres} />
          {/* Vue du calendrier */}
          <div className="p-4">
            {vueActuelle === 'journaliere' ? (
              <VueJournaliere
                date={dateSelectionnee}
                filtres={filtres}
                onNavigate={function (
                  direction: 'precedent' | 'suivant',
                ): void {
                  throw new Error('Function not implemented.');
                }}
              />
            ) : (
              <VueHebdomadaire
                date={dateSelectionnee}
                filtres={filtres}
                onNavigate={function (
                  direction: 'precedent' | 'suivant',
                ): void {
                  throw new Error('Function not implemented.');
                }}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
