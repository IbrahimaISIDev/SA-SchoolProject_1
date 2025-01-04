import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import VueHebdomadaire from './VueHebdomadaire';
import { useLayout } from '../../../../../contexts/LayoutContext';

export default function CalendrierProfesseur() {
  const { sidebarOpen } = useLayout();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewType, setViewType] = useState('hebdomadaire');

  // Navigation dans les dates
  const naviguerSemaine = (direction: 'prev' | 'next') => {
    setCurrentDate((date) => {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + (direction === 'next' ? 7 : -7));
      return newDate;
    });
  };

  // Formatage de la période affichée
  const getPeriodeAffichee = () => {
    const debut = new Date(currentDate);
    debut.setDate(debut.getDate() - debut.getDay() + 1); // Lundi
    const fin = new Date(debut);
    fin.setDate(fin.getDate() + 6); // Dimanche

    return `${debut.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
    })} - ${fin.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })}`;
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
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Calendar size={24} className="text-blue-600" />
              <h2 className="text-xl font-semibold">Mon Emploi du Temps</h2>
            </div>

            {/* Navigation et filtres */}
            <div className="flex items-center gap-4">
              {/* Boutons de navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => naviguerSemaine('prev')}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="font-medium">{getPeriodeAffichee()}</span>
                <button
                  onClick={() => naviguerSemaine('next')}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Filtres */}
              <select className="px-4 py-2 border rounded-lg">
                <option value="tous">Tous les modules</option>
                <option value="dev-web">Développement Web</option>
                <option value="bd">Base de données</option>
              </select>
            </div>
          </div>

          {/* Vue du calendrier */}
          {viewType === 'hebdomadaire' && (
            <VueHebdomadaire
              date={currentDate}
              cours={[
                {
                  id: 1,
                  titre: 'Développement Web',
                  debut: '08:30',
                  fin: '10:30',
                  jour: '2024-12-30',
                  salle: 'Salle 101',
                  classe: 'L3 Info',
                  type: 'cours',
                },
                // Ajoutez d'autres cours ici
              ]}
            />
          )}
        </div>
      </div>
    </main>
  );
}
