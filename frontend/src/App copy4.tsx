// import React from 'react';
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { LayoutProvider } from './contexts/LayoutContext';
// import MenuLateral from './components/common/Disposition/MenuLateral';
// import PiedDePage from './components/common/Disposition/PiedDePage';
// import { useLayout } from './contexts/LayoutContext';
// import { Parametres } from './components/pages/settings';
// import ProfilEtudiant from './components/fonctionnalites/utilisateurs/ProfilEtudiant';
// import DocumentsAdministratifs from './components/fonctionnalites/utilisateurs/ProfilEtudiant/DocumentsAdministratifs';
// import PerformanceWidget from './components/pages/TableauBord/Widgets/PerformanceWidget';
// import AbsencesWidget from './components/pages/TableauBord/Widgets/AbsencesWidget';
// import CoursWidget from './components/pages/TableauBord/Widgets/CoursWidget';
// import ProchainsCoursPage from './components/pages/Planification/ProchainsCoursPage';
// import TableauBord from './components/pages/TableauBord';
// import ProfilProfesseur from './components/fonctionnalites/utilisateurs/ProfilProfesseur';
// import GestionNotes from './components/pages/Notes/GestionNotes';
// import GestionPresences from './components/pages/Presences';
// import GestionCours from './components/pages/Planification/GestionCours';
// import ProfilePage from './components/pages/Profile';
// import Planification from './components/pages/Planification';
// import GestionUtilisateurs from './components/fonctionnalites/utilisateurs/GestionUtilisateurs';
// import LoginPage from './components/pages/Auth/LoginPage';
// import MenuLateralProfesseur from './components/common/Disposition/MenuProfesseur';
// import MenuLateralEtudiant from './components/common/Disposition/MenuEtudiant';

// // Composant Layout de base
// const Layout = ({ children, menu: Menu }) => {
//   const { sidebarOpen } = useLayout();

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       <Menu />
//       <div className="flex-1 pt-16">
//         <div
//           className={`${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}
//         >
//           {children}
//         </div>
//       </div>
//       <PiedDePage />
//     </div>
//   );
// };

// // Layouts spécifiques pour chaque type d'utilisateur
// const AdminLayout = ({ children }) => (
//   <Layout menu={MenuLateral}>{children}</Layout>
// );

// const ProfesseurLayout = ({ children }) => (
//   <Layout menu={MenuLateralProfesseur}>{children}</Layout>
// );

// const EtudiantLayout = ({ children }) => (
//   <Layout menu={MenuLateralEtudiant}>{children}</Layout>
// );

// // Routes protégées par type d'utilisateur
// const ProtectedRoute = ({
//   element: Element,
//   layout: LayoutComponent,
//   allowedRoles,
// }) => {
//   const userRole = localStorage.getItem('userRole'); // À adapter selon votre gestion d'authentification
//   const isAuthenticated = localStorage.getItem('token');

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   if (allowedRoles && !allowedRoles.includes(userRole)) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return (
//     <LayoutComponent>
//       <Element />
//     </LayoutComponent>
//   );
// };

// // Composant principal de l'application
// const App = () => {
//   const location = useLocation();
//   const publicPaths = ['/login', '/etudiant-login', '/professeur-login'];
//   const isPublicPath = publicPaths.includes(location.pathname);

//   return (
//     <LayoutProvider>
//       <Routes>
//         {/* Routes publiques */}
//         <Route path="/login" element={<LoginPage />} />
//         <Route
//           path="/etudiant-login"
//           element={<LoginPage userType="etudiant" />}
//         />
//         <Route
//           path="/professeur-login"
//           element={<LoginPage userType="professeur" />}
//         />
//         {/* <Route path="/unauthorized" element={<UnauthorizedPage />} /> */}

//         {/* Routes Admin */}
//         <Route
//           path="/admin/*"
//           element={
//             <ProtectedRoute
//               element={() => (
//                 <Routes>
//                   <Route path="dashboard" element={<TableauBord />} />
//                   <Route
//                     path="utilisateurs"
//                     element={<GestionUtilisateurs />}
//                   />
//                   <Route path="planning" element={<Planification />} />
//                   <Route path="presences" element={<GestionPresences />} />
//                   <Route path="notes" element={<GestionNotes />} />
//                   <Route path="parametres" element={<Parametres />} />
//                   <Route path="profile" element={<ProfilePage />} />
//                 </Routes>
//               )}
//               layout={AdminLayout}
//               allowedRoles={['admin']}
//             />
//           }
//         />

//         {/* Routes Professeur */}
//         <Route
//           path="/professeur/*"
//           element={
//             <ProtectedRoute
//               element={() => (
//                 <Routes>
//                   <Route path="dashboard" element={<TableauBord />} />
//                   <Route
//                     path="emploi-du-temps"
//                     element={<ProchainsCoursPage />}
//                   />
//                   <Route path="cours" element={<GestionCours />} />
//                   <Route path="classes" element={<GestionPresences />} />
//                   <Route path="notes" element={<GestionNotes />} />
//                   {/* <Route path="annulations" element={<GestionAnnulations />} /> */}
//                   {/* <Route path="documents" element={<Documents />} /> */}
//                   {/* <Route path="messages" element={<Messages />} /> */}
//                   <Route path="profile" element={<ProfilProfesseur />} />
//                   <Route path="parametres" element={<Parametres />} />
//                 </Routes>
//               )}
//               layout={ProfesseurLayout}
//               allowedRoles={['professeur']}
//             />
//           }
//         />

//         {/* Routes Étudiant */}
//         <Route
//           path="/etudiant/*"
//           element={
//             <ProtectedRoute
//               element={() => (
//                 <Routes>
//                   <Route path="dashboard" element={<TableauBord />} />
//                   <Route
//                     path="emploi-du-temps"
//                     element={<ProchainsCoursPage />}
//                   />
//                   <Route path="cours" element={<CoursWidget />} />
//                   <Route path="absences" element={<AbsencesWidget />} />
//                   <Route path="notes" element={<PerformanceWidget />} />
//                   <Route
//                     path="documents"
//                     element={<DocumentsAdministratifs />}
//                   />
//                   {/* <Route path="messages" element={<Messages />} /> */}
//                   <Route path="profile" element={<ProfilEtudiant />} />
//                   <Route path="parametres" element={<Parametres />} />
//                 </Routes>
//               )}
//               layout={EtudiantLayout}
//               allowedRoles={['etudiant']}
//             />
//           }
//         />

//         {/* Redirection par défaut */}
//         <Route path="/" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </LayoutProvider>
//   );
// };

// export default App;
