// routes/TeacherRoutes.tsx
import { Route } from 'react-router-dom';
import ProfilProfesseur from '../components/fonctionnalites/utilisateurs/ProfilProfesseur';
import LeaveRequest from '../components/fonctionnalites/utilisateurs/ProfilProfesseur/MesDemandes';
import GradeManagement from '../components/fonctionnalites/utilisateurs/ProfilProfesseur/MesEvaluations';
import ProfessorClasses from '../components/fonctionnalites/utilisateurs/ProfilProfesseur/MesClasses';
import ProfessorCourses from '../components/fonctionnalites/utilisateurs/ProfilProfesseur/MesCours';
import AssignmentManagement from '../components/fonctionnalites/utilisateurs/ProfilProfesseur/Corrections';
import DocumentsAdministratifsProfs from '../components/fonctionnalites/utilisateurs/ProfilProfesseur/MesDocuments';
import ProfessorMessaging from '../components/pages/messages/MessagesProfesseurs';
import CalendrierProfesseur from '../components/fonctionnalites/planification/Calendrier/CalendrierProfesseur';
import React from 'react';

export const TeacherRoutes = [
  <Route
    key="professeur-login"
    path="/professeur-login"
    element={<ProfilProfesseur />}
  />,
  <Route
    key="professeur-annulations"
    path="/professeur/annulations"
    element={<LeaveRequest />}
  />,
  <Route
    key="professeur-notes"
    path="/professeur/notes"
    element={<GradeManagement />}
  />,
  <Route
    key="professeur-classes"
    path="/professeur/classes"
    element={<ProfessorClasses />}
  />,
  <Route
    key="professeur-cours"
    path="/professeur/cours"
    element={<ProfessorCourses />}
  />,
  <Route
    key="professeur-corrections"
    path="/professeur/corrections"
    element={<AssignmentManagement />}
  />,
  <Route
    key="professeur-documents"
    path="/professeur/documents"
    element={<DocumentsAdministratifsProfs />}
  />,
  <Route
    key="professeur-messages"
    path="/professeur/messages"
    element={<ProfessorMessaging />}
  />,
  <Route
    key="professeur-emploi-du-temps"
    path="/professeur/emploi-du-temps"
    element={<CalendrierProfesseur />}
  />,
];
