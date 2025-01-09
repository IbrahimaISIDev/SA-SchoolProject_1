import React from 'react';
import {
  Users,
  GraduationCap,
  Bell,
  Calendar,
  UserX,
  FileText,
  Mail,
  AlertCircle,
  ArrowRight,
  CreditCard,
  BookOpen,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { Alert, AlertDescription } from '../../../ui/alert';
import { useLayout } from '../../../../contexts/LayoutContext';
import { useNavigate } from 'react-router-dom';

export default function ParentDashboard() {
  const { sidebarOpen } = useLayout();
  const navigate = useNavigate();

  const children = [
    {
      id: 1,
      name: 'Fatou Diallo',
      class: 'L2 GL',
      photo: '/api/placeholder/150/150',
      stats: {
        average: 15.5,
        absences: 4,
        ranking: '2ème/35',
        nextExam: '2024-02-15',
      },
      payments: {
        status: 'En règle',
        nextPayment: '2024-02-28',
      },
      recentGrades: [
        { subject: 'TypeScript', grade: 16 },
        { subject: 'Laravel', grade: 15 },
      ],
    },
    {
      id: 2,
      name: 'Amadou Diallo',
      class: 'L1 GL',
      photo: '/api/placeholder/150/150',
      stats: {
        average: 14.2,
        absences: 6,
        ranking: '5ème/40',
        nextExam: '2024-02-20',
      },
      payments: {
        status: 'En retard',
        nextPayment: '2024-02-05',
      },
      recentGrades: [
        { subject: 'Python', grade: 14 },
        { subject: 'HTML/CSS', grade: 15 },
      ],
    },
  ];

  const notifications = [
    {
      id: 1,
      type: 'exam',
      message: 'Examen de TypeScript prévu le 15 Février 2024',
      time: '2 heures',
      child: 'Fatou Diallo',
    },
    {
      id: 2,
      type: 'payment',
      message: 'Paiement en retard pour Amadou Diallo',
      time: '1 jour',
      urgent: true,
    },
    {
      id: 3,
      type: 'grade',
      message: 'Nouvelle note en Python: 14/20',
      time: '3 heures',
      child: 'Amadou Diallo',
    },
  ];

  const QuickAction = ({ icon: Icon, label, onClick }) => (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 p-3 hover:bg-gray-50 rounded-lg w-full transition-colors"
    >
      <div className="bg-blue-100 p-2 rounded-lg">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <span className="text-sm text-gray-700">{label}</span>
    </button>
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
          <h1 className="text-3xl font-bold mb-2">Bonjour, M. Diallo</h1>
          <p className="text-indigo-100">Bienvenue dans votre espace parent</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section principale - Aperçu des enfants */}
          <div className="lg:col-span-2 space-y-8">
            {children.map((child) => (
              <Card key={child.id} className="border-t-4 border-t-blue-600">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-6">
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
                        <p className="text-gray-500">{child.class}</p>
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

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Moyenne</p>
                      <p className="text-xl font-bold text-gray-900">
                        {child.stats.average}/20
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Classement</p>
                      <p className="text-xl font-bold text-gray-900">
                        {child.stats.ranking}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Absences</p>
                      <p className="text-xl font-bold text-gray-900">
                        {child.stats.absences}h
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Prochain examen</p>
                      <p className="text-xl font-bold text-gray-900">
                        {child.stats.nextExam}
                      </p>
                    </div>
                  </div>

                  {child.payments.status === 'En retard' && (
                    <Alert className="mb-6 bg-red-50 text-red-800 border-red-200">
                      <AlertCircle className="w-4 h-4" />
                      <AlertDescription>
                        Paiement en retard. Prochaine échéance le{' '}
                        {child.payments.nextPayment}
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">
                      Dernières notes
                    </h3>
                    <div className="flex space-x-4">
                      {child.recentGrades.map((grade, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-3 rounded-lg flex-1"
                        >
                          <p className="text-sm text-gray-600">
                            {grade.subject}
                          </p>
                          <p className="text-lg font-bold text-gray-900">
                            {grade.grade}/20
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar droite */}
          <div className="space-y-8">
            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 rounded-lg ${
                        notification.urgent ? 'bg-red-50' : 'bg-gray-50'
                      }`}
                    >
                      <p
                        className={`text-sm ${
                          notification.urgent ? 'text-red-800' : 'text-gray-800'
                        }`}
                      >
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Il y a {notification.time}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions rapides */}
            <Card>
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <QuickAction
                    icon={Calendar}
                    label="Emplois du temps"
                    onClick={() => navigate('/parent/emplois-du-temps')}
                  />
                  <QuickAction
                    icon={CreditCard}
                    label="Effectuer un paiement"
                    onClick={() => navigate('/parent/paiements')}
                  />
                  <QuickAction
                    icon={FileText}
                    label="Notes & Bulletins"
                    onClick={() => navigate('/parent/notes')}
                  />
                  <QuickAction
                    icon={UserX}
                    label="Déclarer une absence"
                    onClick={() => navigate('/parent/absences')}
                  />
                  <QuickAction
                    icon={Mail}
                    label="Messages"
                    onClick={() => navigate('/parent/messages')}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
