// -------- Types de base pour les entités --------
export interface Student {
  id: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  email: string;
  telephone: string;
  classe: string;
  photo: string;
}

export interface Module {
  nom: string;
  moyenne: number;
  credits: number;
  status: string;
}

export interface Professeur {
  id: string;
  nom: string;
  prenom: string;
  titre: string;
  specialite: string;
  photo: string;
}

// -------- Types pour les filtres --------
export type UserType = 'student' | 'parent' | 'teacher';

export interface BaseFilters {
  type: UserType;
  module: string; // Rendu requis
  professeur: string; // Rendu requis
}

export interface StudentFilters extends BaseFilters {
  type: 'student';
  classe: string;
}

export interface ParentFilters extends BaseFilters {
  type: 'parent';
  enfant: string;
}

export interface TeacherFilters extends BaseFilters {
  type: 'teacher';
  classe: string;
  salle: string;
}

export type UserFilters = StudentFilters | ParentFilters | TeacherFilters;

// -------- Types pour les options de filtres --------
export type BaseFilterOption = {
  value: string;
  label: string;
};

export type FilterConfig = {
  id: string;
  label: string;
  options: BaseFilterOption[];
  colSpan?: number;
};

// -------- Types pour le calendrier --------
export type CourseType = 'CM' | 'TD' | 'TP';

export type BaseCourse = {
  jour: string;
  id: number;
  module: string;
  salle: string;
  debut: string;
  fin: string;
  type: CourseType;
  description?: string;
  professeur: string;
};

export type Course = BaseCourse & {
  date: Date;
};

export type BaseProps = {
  date: Date;
  onNavigate: (direction: 'precedent' | 'suivant') => void;
};

export interface CalendarStats {
  id: string;
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple';
}

// Mise à jour de l'interface CalendarViewProps
export interface CalendarViewProps {
  type: UserType;
  stats: CalendarStats[];
  title: string;
  subtitle: string;
  filters: UserFilters;
  onFilterChange: (filters: UserFilters) => void;
}

// -------- Type guards pour la vérification des types --------
export const isStudentFilters = (
  filters: UserFilters,
): filters is StudentFilters => {
  return filters.type === 'student' && 'classe' in filters;
};

export const isParentFilters = (
  filters: UserFilters,
): filters is ParentFilters => {
  return filters.type === 'parent' && 'enfant' in filters;
};

export const isTeacherFilters = (
  filters: UserFilters,
): filters is TeacherFilters => {
  return (
    filters.type === 'teacher' && 'classe' in filters && 'salle' in filters
  );
};
