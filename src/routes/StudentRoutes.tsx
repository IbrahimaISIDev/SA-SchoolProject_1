// routes/StudentRoutes.tsx
import { Route } from 'react-router-dom';
import StudentProfile from '../components/fonctionnalites/utilisateurs/ProfilEtudiant';
import StudentAbsenceView from '../components/fonctionnalites/absences/FeuillePresence/absencesEtudiants';
import StudentGradesView from '../components/fonctionnalites/notes/VueNotesEtudiants';
import AssignmentSubmission from '../components/fonctionnalites/utilisateurs/ProfilEtudiant/SoumissionTraveaux';
import DocumentsAdministratifsEtudiants from '../components/fonctionnalites/utilisateurs/ProfilEtudiant/MesDocuments';
import FormulaireJustification from '../components/fonctionnalites/absences/FormulaireJustification';
import CalendrierEtudiant from '../components/fonctionnalites/planification/Calendrier/CalendrierEtudiant';
import React from 'react';
import { StudentResources } from '../components/fonctionnalites/utilisateurs/ProfilEtudiant/StudentRessource';
import StudentMessaging from '../components/messaging/StudentMessaging';

export const StudentRoutes = [
  <Route
    key="etudiant-login"
    path="/etudiant-login"
    element={<StudentProfile />}
  />,
  <Route
    key="etudiant-absences"
    path="/etudiant/absences"
    element={<StudentAbsenceView />}
  />,
  <Route
    key="etudiant-notes"
    path="/etudiant/notes"
    element={<StudentGradesView />}
  />,
  <Route
    key="etudiant-messages"
    path="/etudiant/messages"
    element={<StudentMessaging />}
  />,
  <Route
    key="etudiant-traveaux"
    path="/etudiant/traveaux"
    element={<AssignmentSubmission />}
  />,
  <Route
    key="etudiant-documents"
    path="/etudiant/documents"
    element={<DocumentsAdministratifsEtudiants />}
  />,
  <Route
    key="etudiant-ressources"
    path="/etudiant/ressources"
    element={<StudentResources />}
  />,
  <Route
    key="etudiant-justifications"
    path="/etudiant/justifications"
    element={<FormulaireJustification />}
  />,
  <Route
    key="etudiant-emploi-du-temps"
    path="/etudiant/emploi-du-temps"
    element={<CalendrierEtudiant />}
  />,
];
