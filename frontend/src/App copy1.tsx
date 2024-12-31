// src/App.tsx
import React, { JSX, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { LayoutProvider } from './contexts/LayoutContext';
import TableauBord from './components/pages/TableauBord';
import AbsencesWidget from './components/pages/TableauBord/Widgets/AbsencesWidget';
import CoursWidget from './components/pages/TableauBord/Widgets/CoursWidget';
import PerformanceWidget from './components/pages/TableauBord/Widgets/PerformanceWidget';
import StatWidget from './components/pages/TableauBord/Widgets/StatWidget';
import GestionUtilisateurs from './components/fonctionnalites/utilisateurs/GestionUtilisateurs';
import ProfilAdministrateur from './components/fonctionnalites/utilisateurs/ProfilAdministrateur';
import MenuLateral from './components/common/Disposition/MenuLateral';
import PiedDePage from './components/common/Disposition/PiedDePage';
import { useLayout } from './contexts/LayoutContext';
import Planification from './components/pages/Planification';
import GestionPresences from './components/pages/Presences';
import GestionNotes from './components/pages/Notes';
import { Parametres } from './components/pages/settings/index';
import AjouterUtilisateur from './components/pages/Utilisateurs/Administration';
import Administration from './components/pages/Utilisateurs';
import GestionCours from './components/pages/Planification/GestionCours';
import LoginPage from './components/pages/Auth/LoginPage';

// Composant pour protéger les routes
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token'); // Vérifie le token d'authentification
  return token ? children : <Navigate to="/login" replace />;
};

function AppContent() {
  const { sidebarOpen } = useLayout();

  // // Vérifie l'authentification et redirige vers /login si non connecté
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     window.location.href = '/login';
  //   }
  // }, []);

  // Gestion de l'affichage dynamique
  const isLoginPage = window.location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {!isLoginPage && <MenuLateral />}
      <div className="flex-1 pt-16">
        <div className={`${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all`}>
          <Routes>
            {/* Routes protégées */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <TableauBord />
                </ProtectedRoute>
              }
            />
            <Route
              path="/absences"
              element={
                <ProtectedRoute>
                  <AbsencesWidget />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cours"
              element={
                <ProtectedRoute>
                  <CoursWidget />
                </ProtectedRoute>
              }
            />
            <Route
              path="/performance"
              element={
                <ProtectedRoute>
                  <PerformanceWidget />
                </ProtectedRoute>
              }
            />
            <Route
              path="/planning"
              element={
                <ProtectedRoute>
                  <Planification />
                </ProtectedRoute>
              }
            />
            <Route
              path="/presences"
              element={
                <ProtectedRoute>
                  <GestionPresences />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notes"
              element={
                <ProtectedRoute>
                  <GestionNotes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/utilisateurs"
              element={
                <ProtectedRoute>
                  <Administration />
                </ProtectedRoute>
              }
            />
            <Route
              path="/parametres"
              element={
                <ProtectedRoute>
                  <Parametres />
                </ProtectedRoute>
              }
            />
            <Route
              path="/planification/gestion-cours"
              element={
                <ProtectedRoute>
                  <GestionCours />
                </ProtectedRoute>
              }
            />
            <Route
              path="/utilisateurs/gestion-users"
              element={
                <ProtectedRoute>
                  <AjouterUtilisateur />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ajouter-utilisateur"
              element={
                <ProtectedRoute>
                  <AjouterUtilisateur />
                </ProtectedRoute>
              }
            />
            <Route
              path="/stats"
              element={
                <ProtectedRoute>
                  <StatWidget
                    icon="chart"
                    title="Statistiques"
                    value="100"
                    evolution="+10%"
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/utilisateurs"
              element={
                <ProtectedRoute>
                  <GestionUtilisateurs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/profil"
              element={
                <ProtectedRoute>
                  <ProfilAdministrateur />
                </ProtectedRoute>
              }
            />

            {/* Route de connexion */}
            <Route path="/login" element={<LoginPage />} />

            {/* Route 404 */}
            <Route path="*" element={<div>Page non trouvée</div>} />
          </Routes>
        </div>
      </div>
      {!isLoginPage && <PiedDePage />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <LayoutProvider>
        <AppContent />
      </LayoutProvider>
    </Router>
  );
}

export default App;

// // src/App.tsx
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { LayoutProvider } from './contexts/LayoutContext';
// import { useLayout } from './contexts/LayoutContext';
// import MenuLateral from './components/common/Disposition/MenuLateral';
// import PiedDePage from './components/common/Disposition/PiedDePage';
// import AppRoutes from './routes';

// const AppContent = () => {
//   const { sidebarOpen } = useLayout();
//   const isLoginPage = window.location.pathname === '/login';

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {!isLoginPage && <MenuLateral />}
//       <div className="flex-1 pt-16">
//         <div className={`${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all`}>
//           <AppRoutes />
//         </div>
//       </div>
//       {!isLoginPage && <PiedDePage />}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <LayoutProvider>
//         <AppContent />
//       </LayoutProvider>
//     </Router>
//   );
// };

// export default App;
