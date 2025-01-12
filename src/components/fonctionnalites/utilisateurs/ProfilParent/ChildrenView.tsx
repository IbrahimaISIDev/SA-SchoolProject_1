import React, { useState } from 'react';
import {
  GraduationCap,
  Calendar,
  UserX,
  FileText,
  Mail,
  Star,
  Clock,
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';
import { useNavigate } from 'react-router-dom';
import web1Image from '../../../../assets/images/logos/web-1.jpeg';

export default function ParentChildrenView() {
  const { sidebarOpen } = useLayout();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle
  const itemsPerPage = 2; // Nombre d'éléments par page

  const children = [
    {
      id: 1,
      name: 'Fatou Diallo',
      photo: web1Image,
      class: 'L2 GL',
      studentId: 'ETU2024002',
      age: 20,
      stats: {
        average: 15.5,
        absences: 12,
        lateArrivals: 3,
        ranking: '2ème/35',
      },
    },
    {
      id: 2,
      name: 'Amadou Diallo',
      photo: web1Image,
      class: 'L1 GL',
      studentId: 'ETU2024003',
      age: 18,
      stats: {
        average: 14.2,
        absences: 8,
        lateArrivals: 1,
        ranking: '5ème/40',
      },
    },
    {
      id: 3,
      name: 'Moussa Ndiaye',
      photo: web1Image,
      class: 'L3 GL',
      studentId: 'ETU2024004',
      age: 21,
      stats: {
        average: 16.0,
        absences: 5,
        lateArrivals: 0,
        ranking: '1er/30',
      },
    },
    {
      id: 4,
      name: 'Aissatou Sow',
      photo: web1Image,
      class: 'L2 GL',
      studentId: 'ETU2024005',
      age: 19,
      stats: {
        average: 13.8,
        absences: 10,
        lateArrivals: 2,
        ranking: '7ème/35',
      },
    },
  ];

  const filteredChildren = children.filter((child) =>
    child.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Calculer les éléments à afficher pour la page actuelle
  const indexOfLastChild = currentPage * itemsPerPage;
  const indexOfFirstChild = indexOfLastChild - itemsPerPage;
  const currentChildren = filteredChildren.slice(
    indexOfFirstChild,
    indexOfLastChild,
  );

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(filteredChildren.length / itemsPerPage);

  const QuickActionButton = ({ icon: Icon, label, onClick }) => (
    <button
      onClick={onClick}
      className="flex items-center justify-center flex-col p-4 hover:bg-gray-50 rounded-lg transition-colors"
    >
      <div className="bg-blue-100 p-3 rounded-lg mb-2">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </button>
  );

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className={`flex items-center space-x-3 bg-gray-50 p-3 rounded-lg`}>
      <div className={`bg-${color}-100 p-2 rounded-lg`}>
        <Icon className={`w-5 h-5 text-${color}-600`} />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );

  return (
    <main
      className={`fixed 
        top-[73px] 
        right-0 
        bottom-0 
        overflow-y-auto
        bg-gray-50
        transition-all
        duration-300
        ${sidebarOpen ? 'left-64' : 'left-20'}`}
    >
      <div className="p-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl font-bold mb-2">Mes enfants</h1>
          <p className="text-indigo-100">
            Suivi de la scolarité de vos enfants
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Rechercher un enfant..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentChildren.map((child) => (
            <Card key={child.id} className="border-t-4 border-t-blue-600">
              <CardHeader className="pb-0">
                <div className="flex justify-between items-start">
                  <div className="flex space-x-4">
                    <img
                      src={child.photo}
                      alt={child.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {child.name}
                      </h2>
                      <p className="text-gray-500">
                        {child.class} - {child.studentId}
                      </p>
                      <p className="text-sm text-gray-500">{child.age} ans</p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <StatCard
                    icon={Star}
                    label="Moyenne générale"
                    value={child.stats.average + '/20'}
                    color="yellow"
                  />
                  <StatCard
                    icon={GraduationCap}
                    label="Classement"
                    value={child.stats.ranking}
                    color="green"
                  />
                  <StatCard
                    icon={UserX}
                    label="Absences"
                    value={child.stats.absences + 'h'}
                    color="red"
                  />
                  <StatCard
                    icon={Clock}
                    label="Retards"
                    value={child.stats.lateArrivals}
                    color="orange"
                  />
                </div>

                <div className="mt-8">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">
                    Actions rapides
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    <QuickActionButton
                      icon={Calendar}
                      label="Emploi du temps"
                      onClick={() =>
                        navigate(`/parent/emplois-du-temps?child=${child.id}`)
                      }
                    />
                    <QuickActionButton
                      icon={FileText}
                      label="Notes"
                      onClick={() =>
                        navigate(`/parent/notes?child=${child.id}`)
                      }
                    />
                    <QuickActionButton
                      icon={UserX}
                      label="Absences"
                      onClick={() =>
                        navigate(`/parent/absences?child=${child.id}`)
                      }
                    />
                    <QuickActionButton
                      icon={Mail}
                      label="Message"
                      onClick={() =>
                        navigate(`/parent/messages?recipient=${child.id}`)
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
          >
            Précédent
          </button>
          <span className="px-4 py-2 text-lg text-gray-700">
            Page {currentPage} sur {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
          >
            Suivant
          </button>
        </div>
      </div>
    </main>
  );
}
