import React, { useState } from 'react';
import { Calendar, Eye, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';
import { useNavigate } from 'react-router-dom';

export default function ParentAbsencesView() {
  const navigate = useNavigate();
  const { sidebarOpen } = useLayout();
  const [periodFilter, setPeriodFilter] = useState('week');
  const [expandedChild, setExpandedChild] = useState(null);

  const children = [
    {
      id: 1,
      name: 'Fatou Diallo',
      class: 'L2 GL',
      studentId: 'ETU2024002',
      totalAbsences: 12,
      unjustifiedAbsences: 4,
      absences: [
        {
          id: 1,
          date: '2024-12-30',
          course: 'TypeScript',
          professor: 'Coach Aly',
          status: 'non justifiée',
          hours: 2,
        },
        {
          id: 2,
          date: '2024-12-29',
          course: 'Laravel',
          professor: 'Coach Wane',
          status: 'justifiée',
          hours: 4,
        },
      ],
    },
    {
      id: 2,
      name: 'Amadou Diallo',
      class: 'L1 GL',
      studentId: 'ETU2024003',
      totalAbsences: 8,
      unjustifiedAbsences: 2,
      absences: [
        {
          id: 1,
          date: '2024-12-28',
          course: 'Python',
          professor: 'Coach Samba',
          status: 'justifiée',
          hours: 4,
        },
      ],
    },
  ];

  const toggleChildDetails = (childId) => {
    setExpandedChild(expandedChild === childId ? null : childId);
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Absences de mes enfants
                </h1>
                <p className="text-indigo-100">
                  Suivi des absences et justificatifs
                </p>
              </div>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-50 transition duration-200 shadow-md">
                <Download size={20} />
                Exporter toutes les absences
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <select
              className="p-3 bg-gray-50 rounded-lg border focus:border-purple-500"
              value={periodFilter}
              onChange={(e) => setPeriodFilter(e.target.value)}
            >
              <option value="week">Cette semaine</option>
              <option value="month">Ce mois</option>
              <option value="semester">Ce semestre</option>
            </select>
          </div>

          {children.map((child) => (
            <div key={child.id} className="mb-8">
              <Card className="border-t-4 border-t-blue-600">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <div>
                            <h2 className="text-xl font-bold text-gray-900">
                              {child.name}
                            </h2>
                            <p className="text-sm text-gray-500">
                              {child.class} - {child.studentId}
                            </p>
                          </div>
                          <div className="flex space-x-6">
                            <div className="text-center">
                              <p className="text-sm font-medium text-gray-500">
                                Total absences
                              </p>
                              <p className="text-2xl font-bold text-gray-900">
                                {child.totalAbsences}h
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-medium text-gray-500">
                                Non justifiées
                              </p>
                              <p className="text-2xl font-bold text-red-600">
                                {child.unjustifiedAbsences}h
                              </p>
                            </div>
                            <button
                              onClick={() => toggleChildDetails(child.id)}
                              className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                              {expandedChild === child.id ? (
                                <ChevronUp className="h-6 w-6 text-gray-500" />
                              ) : (
                                <ChevronDown className="h-6 w-6 text-gray-500" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {expandedChild === child.id && (
                      <div className="mt-6">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                  Date
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                  Cours
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                  Heures
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                  Statut
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                  Actions
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {child.absences.map((absence) => (
                                <tr
                                  key={absence.id}
                                  className="hover:bg-gray-50"
                                >
                                  <td className="px-6 py-4 text-gray-500">
                                    {absence.date}
                                  </td>
                                  <td className="px-6 py-4">
                                    <div className="text-gray-900">
                                      {absence.course}
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                      {absence.professor}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 text-gray-500">
                                    {absence.hours}h
                                  </td>
                                  <td className="px-6 py-4">
                                    <span
                                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        absence.status === 'justifiée'
                                          ? 'bg-green-100 text-green-800'
                                          : 'bg-red-100 text-red-800'
                                      }`}
                                    >
                                      {absence.status}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4">
                                    <button
                                      onClick={() =>
                                        navigate('/etudiant/justifications')
                                      }
                                      className="text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                      Soumettre justificatif
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

/* import React, { useState } from 'react';
import { 
  Calendar, 
  Bell, 
  AlertTriangle, 
  FileCheck, 
  PlusCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Calendar as CalendarIcon,
  FileText,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useLayout } from '../contexts/LayoutContext';

export default function ParentAbsencesManagement() {
  const { sidebarOpen } = useLayout();
  const [activeTab, setActiveTab] = useState('history');
  const [expandedChild, setExpandedChild] = useState(null);
  const [showNotifyModal, setShowNotifyModal] = useState(false);

  const children = [
    {
      id: 1,
      name: 'Fatou Diallo',
      class: 'L2 GL',
      stats: {
        totalAbsences: 12,
        justified: 8,
        unjustified: 4,
        plannedAbsences: 1,
        attendanceRate: 92
      },
      absences: [
        {
          id: 1,
          date: '2024-12-30',
          type: 'absence',
          course: 'TypeScript',
          professor: 'Coach Aly',
          status: 'non justifiée',
          hours: 2,
          urgent: true
        },
        {
          id: 2,
          date: '2024-12-29',
          type: 'absence',
          course: 'Laravel',
          professor: 'Coach Wane',
          status: 'justifiée',
          hours: 4,
          urgent: false
        }
      ],
      plannedAbsences: [
        {
          id: 1,
          date: '2025-01-15',
          reason: 'Rendez-vous médical',
          status: 'en attente',
          duration: '2h'
        }
      ]
    }
  ];

  const StatCard = ({ icon: Icon, label, value, description, color }) => (
    <Card className="border-l-4 border-l-blue-600">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
            {description && (
              <p className="text-sm text-gray-500 mt-1">{description}</p>
            )}
          </div>
          <div className={bg-${color}-100 p-3 rounded-full}>
            <Icon className={h-6 w-6 text-${color}-600} />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const TabButton = ({ active, label, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-colors ${
        active 
          ? 'bg-blue-600 text-white' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {label}
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
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">Gestion des absences</h1>
              <p className="text-indigo-100">
                Suivi et justification des absences
              </p>
            </div>
            <button
              onClick={() => setShowNotifyModal(true)}
              className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2"
            >
              <PlusCircle className="w-5 h-5" />
              Signaler une absence
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {children.map((child) => (
            <Card key={child.id} className="border-t-4 border-t-blue-600">
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle>{child.name}</CardTitle>
                  <p className="text-sm text-gray-500">{child.class}</p>
                </div>
                <button
                  onClick={() => setExpandedChild(expandedChild === child.id ? null : child.id)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {expandedChild === child.id ? 
                    <ChevronUp className="w-5 h-5" /> : 
                    <ChevronDown className="w-5 h-5" />
                  }
                </button>
              </CardHeader>

              {expandedChild === child.id && (
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <StatCard
                      icon={Clock}
                      label="Total des absences"
                      value={${child.stats.totalAbsences}h}
                      color="blue"
                    />
                    <StatCard
                      icon={CheckCircle2}
                      label="Absences justifiées"
                      value={${child.stats.justified}h}
                      color="green"
                    />
                    <StatCard
                      icon={XCircle}
                      label="Non justifiées"
                      value={${child.stats.unjustified}h}
                      color="red"
                    />
                    <StatCard
                      icon={CalendarIcon}
                      label="Taux de présence"
                      value={${child.stats.attendanceRate}%}
                      color="purple"
                    />
                  </div>

                  {child.absences.some(a => a.urgent) && (
                    <Alert className="mb-6 border-red-600 bg-red-50">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertTitle className="text-red-600">Action requise</AlertTitle>
                      <AlertDescription>
                        Des absences nécessitent une justification rapidement
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="flex space-x-4 mb-6">
                    <TabButton
                      active={activeTab === 'history'}
                      label="Historique"
                      onClick={() => setActiveTab('history')}
                    />
                    <TabButton
                      active={activeTab === 'planned'}
                      label="Absences prévues"
                      onClick={() => setActiveTab('planned')}
                    />
                  </div>

                  {activeTab === 'history' ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50 border-b">
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                              Date
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                              Cours
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                              Durée
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                              Statut
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {child.absences.map((absence) => (
                            <tr key={absence.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4">
                                <div className="text-gray-900">{absence.date}</div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-gray-900">{absence.course}</div>
                                <div className="text-gray-500 text-sm">
                                  {absence.professor}
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-500">
                                {absence.hours}h
                              </td>
                              <td className="px-6 py-4">
                                <span
                                  className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    absence.status === 'justifiée'
                                      ? 'bg-green-100 text-green-800'
                                      : 'bg-red-100 text-red-800'
                                  }`}
                                >
                                  {absence.status}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                {absence.status === 'non justifiée' && (
                                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                                    <FileCheck className="w-4 h-4" />
                                    Justifier
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {child.plannedAbsences.map((absence) => (
                        <Card key={absence.id} className="bg-gray-50 border-none">
                          <CardContent className="flex justify-between items-center p-4">
                            <div>
                              <p className="font-medium">{absence.date}</p>
                              <p className="text-sm text-gray-500">{absence.reason}</p>
                              <p className="text-sm text-gray-500">Durée: {absence.duration}</p>
                            </div>
                            <span
                              className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800"
                            >
                              {absence.status}
                            </span>
                          </CardContent>
                        </Card>
                      ))}
                      
                      <button
                        className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors flex items-center justify-center gap-2"
                        onClick={() => setShowNotifyModal(true)}
                      >
                        <PlusCircle className="w-5 h-5" />
                        Planifier une absence
                      </button>
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
} */
