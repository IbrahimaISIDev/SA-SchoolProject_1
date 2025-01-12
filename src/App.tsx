// App.tsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { LayoutProvider } from './contexts/LayoutContext';
import { ThemeProvider } from './contexts/ThemeContext';
import {
  MainLayout,
  StudentLayout,
  TeacherLayout,
  ParentLayout,
} from './components/layouts/Layout';
import { AdminRoutes } from './routes/AdminRoutes';
import { StudentRoutes } from './routes/StudentRoutes';
import { TeacherRoutes } from './routes/TeacherRoutes';
import { ParentRoutes } from './routes/ParentRoutes';
import LoginPage from './components/pages/Auth/LoginPage';
import DocumentsAdministratifs from './components/fonctionnalites/utilisateurs/ProfilEtudiant/DocumentsAdministratifs';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LayoutProvider>
          <Routes>
            {/* Routes publiques */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/documents/carte-etudiant"
              element={<DocumentsAdministratifs />}
            />
            <Route
              path="/documents/certificat-scolarite"
              element={<DocumentsAdministratifs />}
            />
            <Route
              path="/documents/releve-notes"
              element={<DocumentsAdministratifs />}
            />

            {/* Routes administrateur */}
            <Route element={<MainLayout />}>{AdminRoutes}</Route>

            {/* Routes étudiant */}
            <Route element={<StudentLayout />}>{StudentRoutes}</Route>

            {/* Routes professeur */}
            <Route element={<TeacherLayout />}>{TeacherRoutes}</Route>

            {/* Routes parent */}
            <Route element={<ParentLayout />}>{ParentRoutes}</Route>

            {/* Redirection par défaut */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </LayoutProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
