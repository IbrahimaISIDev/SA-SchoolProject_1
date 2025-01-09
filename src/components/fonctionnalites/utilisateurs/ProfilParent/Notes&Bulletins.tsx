// import React, { useState } from 'react';
// import {
//   Download,
//   ChevronDown,
//   ChevronUp,
//   TrendingUp,
//   TrendingDown,
//   Minus,
//   Star,
//   BookOpen,
//   Trophy,
// } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
// import { useLayout } from '../../../../contexts/LayoutContext';

// export default function ParentGradesView() {
//   const { sidebarOpen } = useLayout();
//   const [selectedChild, setSelectedChild] = useState('all');
//   const [selectedPeriod, setSelectedPeriod] = useState('semester1');
//   const [expandedSubject, setExpandedSubject] = useState(null);

//   const children = [
//     {
//       id: 1,
//       name: 'Fatou Diallo',
//       class: 'L2 GL',
//       average: 15.5,
//       rank: '2/35',
//       appreciation: 'Excellent travail, continue ainsi !',
//       periods: {
//         semester1: {
//           average: 15.5,
//           subjects: [
//             {
//               name: 'TypeScript',
//               teacher: 'Coach Aly',
//               coefficient: 3,
//               grades: [
//                 { type: 'Devoir', value: 16, date: '2024-01-15' },
//                 { type: 'Examen', value: 15, date: '2024-01-30' },
//               ],
//               average: 15.5,
//               classAverage: 14.2,
//             },
//             {
//               name: 'Laravel',
//               teacher: 'Coach Wane',
//               coefficient: 4,
//               grades: [
//                 { type: 'Devoir', value: 17, date: '2024-01-10' },
//                 { type: 'Projet', value: 16, date: '2024-01-25' },
//                 { type: 'Examen', value: 15, date: '2024-01-31' },
//               ],
//               average: 16,
//               classAverage: 13.8,
//             },
//           ],
//         },
//       },
//     },
//     {
//       id: 2,
//       name: 'Amadou Diallo',
//       class: 'L1 GL',
//       average: 14.2,
//       rank: '5/40',
//       appreciation: 'Bon trimestre, peut encore progresser.',
//       periods: {
//         semester1: {
//           average: 14.2,
//           subjects: [
//             {
//               name: 'Python',
//               teacher: 'Coach Samba',
//               coefficient: 3,
//               grades: [
//                 { type: 'Devoir', value: 14, date: '2024-01-15' },
//                 { type: 'Examen', value: 15, date: '2024-01-30' },
//               ],
//               average: 14.5,
//               classAverage: 13.5,
//             },
//           ],
//         },
//       },
//     },
//   ];

//   const GradeComparison = ({ studentAverage, classAverage }) => {
//     const difference = (studentAverage - classAverage).toFixed(1);
//     const icon =
//       difference > 0 ? TrendingUp : difference < 0 ? TrendingDown : Minus;
//     const color =
//       difference > 0
//         ? 'text-green-600'
//         : difference < 0
//           ? 'text-red-600'
//           : 'text-gray-600';

//     return (
//       <div className={`flex items-center gap-1 ${color}`}>
//         {React.createElement(icon, { className: 'w-4 h-4' })}
//         <span className="text-sm">{Math.abs(difference)} pts vs. classe</span>
//       </div>
//     );
//   };

//   return (
//     <main
//       className={`
//         fixed
//         top-[73px]
//         right-0
//         bottom-0
//         overflow-y-auto
//         bg-gray-50
//         transition-all
//         duration-300
//         ${sidebarOpen ? 'left-64' : 'left-20'}
//       `}
//     >
//       <div className="p-8">
//         <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
//           <div className="flex justify-between items-start">
//             <div>
//               <h1 className="text-3xl font-bold mb-2">Notes & Bulletins</h1>
//               <p className="text-indigo-100">
//                 Suivi des résultats scolaires de vos enfants
//               </p>
//             </div>
//             <button className="bg-white text-blue-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50">
//               <Download className="w-5 h-5" />
//               Télécharger les bulletins
//             </button>
//           </div>
//         </div>

//         <div className="flex gap-4 mb-8">
//           <select
//             value={selectedChild}
//             onChange={(e) => setSelectedChild(e.target.value)}
//             className="p-3 bg-white rounded-lg border border-gray-200 focus:border-blue-500 w-64"
//           >
//             <option value="all">Tous les enfants</option>
//             {children.map((child) => (
//               <option key={child.id} value={child.id}>
//                 {child.name}
//               </option>
//             ))}
//           </select>

//           <select
//             value={selectedPeriod}
//             onChange={(e) => setSelectedPeriod(e.target.value)}
//             className="p-3 bg-white rounded-lg border border-gray-200 focus:border-blue-500 w-64"
//           >
//             <option value="semester1">Semestre 1</option>
//             <option value="semester2">Semestre 2</option>
//           </select>
//         </div>

//         {children.map((child) => (
//           <Card key={child.id} className="mb-8">
//             <CardHeader>
//               <div className="flex justify-between items-start">
//                 <div>
//                   <CardTitle>{child.name}</CardTitle>
//                   <p className="text-sm text-gray-500">{child.class}</p>
//                 </div>
//                 <div className="text-right">
//                   <div className="flex items-center gap-4">
//                     <div>
//                       <p className="text-sm text-gray-500">Moyenne générale</p>
//                       <p className="text-2xl font-bold text-blue-600">
//                         {child.average}/20
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Rang</p>
//                       <p className="text-2xl font-bold text-purple-600">
//                         {child.rank}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-6">
//                 {child.periods[selectedPeriod].subjects.map(
//                   (subject, index) => (
//                     <div key={index} className="border rounded-lg">
//                       <div
//                         className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
//                         onClick={() =>
//                           setExpandedSubject(
//                             expandedSubject === index ? null : index,
//                           )
//                         }
//                       >
//                         <div className="flex items-center gap-4">
//                           <div className="bg-blue-100 p-2 rounded-lg">
//                             <BookOpen className="w-6 h-6 text-blue-600" />
//                           </div>
//                           <div>
//                             <h3 className="font-medium">{subject.name}</h3>
//                             <p className="text-sm text-gray-500">
//                               {subject.teacher} • Coefficient{' '}
//                               {subject.coefficient}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-6">
//                           <div className="text-right">
//                             <p className="font-bold text-lg">
//                               {subject.average}/20
//                             </p>
//                             <GradeComparison
//                               studentAverage={subject.average}
//                               classAverage={subject.classAverage}
//                             />
//                           </div>
//                           {expandedSubject === index ? (
//                             <ChevronUp className="w-5 h-5 text-gray-400" />
//                           ) : (
//                             <ChevronDown className="w-5 h-5 text-gray-400" />
//                           )}
//                         </div>
//                       </div>
//                       {expandedSubject === index && (
//                         <div className="border-t p-4">
//                           <table className="w-full">
//                             <thead>
//                               <tr className="text-sm text-gray-500">
//                                 <th className="text-left py-2">Type</th>
//                                 <th className="text-left py-2">Date</th>
//                                 <th className="text-right py-2">Note</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {subject.grades.map((grade, idx) => (
//                                 <tr key={idx} className="border-t">
//                                   <td className="py-3">{grade.type}</td>
//                                   <td className="py-3">{grade.date}</td>
//                                   <td className="py-3 text-right font-medium">
//                                     {grade.value}/20
//                                   </td>
//                                 </tr>
//                               ))}
//                             </tbody>
//                           </table>
//                         </div>
//                       )}
//                     </div>
//                   ),
//                 )}

//                 <Card className="bg-gray-50">
//                   <CardContent className="pt-6">
//                     <div className="flex items-start gap-3">
//                       <Trophy className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
//                       <div>
//                         <h4 className="font-medium mb-1">
//                           Appréciation générale
//                         </h4>
//                         <p className="text-gray-600">{child.appreciation}</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </main>
//   );
// }

import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Download,
  ChevronDown,
  ChevronUp,
  Book,
  Medal,
  Users,
  FileText,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';

export default function ParentGradesView() {
  const { sidebarOpen } = useLayout();
  const [selectedChild, setSelectedChild] = useState('1');
  const [selectedPeriod, setSelectedPeriod] = useState('semester1');
  const [expandedSubject, setExpandedSubject] = useState(null);

  const children = [
    { id: '1', name: 'Fatou Diallo', class: 'L2 GL' },
    { id: '2', name: 'Amadou Diallo', class: 'L1 GL' },
  ];

  const periods = [
    { id: 'semester1', name: 'Semestre 1' },
    { id: 'semester2', name: 'Semestre 2' },
  ];

  // Données pour le graphique d'évolution
  const performanceData = [
    { month: 'Oct', moyenne: 14.5 },
    { month: 'Nov', moyenne: 15.2 },
    { month: 'Dec', moyenne: 14.8 },
    { month: 'Jan', moyenne: 15.5 },
  ];

  const subjects = [
    {
      id: 1,
      name: 'Programmation TypeScript',
      teacher: 'Coach Aly',
      grades: [
        {
          id: 1,
          title: 'TP 1',
          grade: 15,
          coefficient: 1,
          date: '2024-10-15',
          comment: 'Bon travail',
        },
        {
          id: 2,
          title: 'Examen',
          grade: 16,
          coefficient: 2,
          date: '2024-11-20',
          comment: 'Très bonne maîtrise',
        },
      ],
      average: 15.7,
      classAverage: 14.2,
      ranking: '5/35',
      teacherComment: 'Élève sérieuse et appliquée. Continue ainsi.',
    },
    {
      id: 2,
      name: 'Framework Laravel',
      teacher: 'Coach Wane',
      grades: [
        {
          id: 1,
          title: 'Contrôle',
          grade: 14,
          coefficient: 1,
          date: '2024-10-10',
          comment: 'Peut mieux faire',
        },
        {
          id: 2,
          title: 'Projet',
          grade: 17,
          coefficient: 2,
          date: '2024-12-01',
          comment: 'Excellent projet',
        },
      ],
      average: 16,
      classAverage: 13.8,
      ranking: '3/35',
      teacherComment: 'Très bonne progression ce semestre.',
    },
  ];

  const StatCard = ({ icon: Icon, title, value, subtitle }) => (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
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
        {/* En-tête */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Notes & Bulletins</h1>
              <p className="text-indigo-100">
                Suivi des performances scolaires
              </p>
            </div>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition-colors">
              <Download size={20} />
              Télécharger le bulletin
            </button>
          </div>
        </div>

        {/* Filtres */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <select
            value={selectedChild}
            onChange={(e) => setSelectedChild(e.target.value)}
            className="p-3 bg-white rounded-lg border focus:border-blue-500"
          >
            {children.map((child) => (
              <option key={child.id} value={child.id}>
                {child.name} - {child.class}
              </option>
            ))}
          </select>

          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="p-3 bg-white rounded-lg border focus:border-blue-500"
          >
            {periods.map((period) => (
              <option key={period.id} value={period.id}>
                {period.name}
              </option>
            ))}
          </select>
        </div>

        {/* Statistiques générales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={Medal}
            title="Moyenne générale"
            value="15.2/20"
            subtitle="Semestre en cours"
          />
          <StatCard
            icon={Users}
            title="Classement"
            value="5ème"
            subtitle="Sur 35 élèves"
          />
          <StatCard
            icon={Book}
            title="Matières"
            value="8"
            subtitle="Ce semestre"
          />
          <StatCard
            icon={FileText}
            title="Évaluations"
            value="12"
            subtitle="Total ce semestre"
          />
        </div>

        {/* Graphique d'évolution */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              Évolution des moyennes
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 20]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="moyenne"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Liste des matières */}
        <div className="space-y-4">
          {subjects.map((subject) => (
            <Card key={subject.id}>
              <div
                className="p-6 cursor-pointer"
                onClick={() =>
                  setExpandedSubject(
                    expandedSubject === subject.id ? null : subject.id,
                  )
                }
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-gray-500">{subject.teacher}</p>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Moyenne</p>
                      <p className="text-lg font-semibold text-blue-600">
                        {subject.average}/20
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Moyenne classe</p>
                      <p className="text-lg font-semibold">
                        {subject.classAverage}/20
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Rang</p>
                      <p className="text-lg font-semibold">{subject.ranking}</p>
                    </div>
                    {expandedSubject === subject.id ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </div>

                {expandedSubject === subject.id && (
                  <div className="mt-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                              Évaluation
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                              Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                              Note
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                              Coef.
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                              Commentaire
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {subject.grades.map((grade) => (
                            <tr key={grade.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4">{grade.title}</td>
                              <td className="px-6 py-4">{grade.date}</td>
                              <td className="px-6 py-4 font-semibold">
                                {grade.grade}/20
                              </td>
                              <td className="px-6 py-4">
                                ×{grade.coefficient}
                              </td>
                              <td className="px-6 py-4">{grade.comment}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-500">
                        Commentaire du professeur
                      </p>
                      <p className="mt-1 text-gray-700">
                        {subject.teacherComment}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
