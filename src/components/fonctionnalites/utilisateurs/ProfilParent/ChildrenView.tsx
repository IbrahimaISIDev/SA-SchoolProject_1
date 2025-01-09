import React from 'react';
import {
  GraduationCap,
  Calendar,
  UserX,
  FileText,
  ArrowRight,
  Mail,
  Star,
  Clock,
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';
import { useNavigate } from 'react-router-dom';

export default function ParentChildrenView() {
  const { sidebarOpen } = useLayout();
  const navigate = useNavigate();

  const children = [
    {
      id: 1,
      name: 'Fatou Diallo',
      photo: '/api/placeholder/150/150',
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
      photo: '/api/placeholder/150/150',
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
  ];

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
    <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
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
      <div className="p-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl font-bold mb-2">Mes enfants</h1>
          <p className="text-indigo-100">
            Suivi de la scolarité de vos enfants
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {children.map((child) => (
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
                  <button
                    onClick={() => navigate(`/parent/enfant/${child.id}`)}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    Voir détails
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
      </div>
    </main>
  );
}
