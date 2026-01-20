
export enum Gender {
  MALE = 'Masculin',
  FEMALE = 'Féminin'
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  birthDate: string;
  classId: string;
  email?: string;
}

export interface Class {
  id: string;
  name: string; // e.g., 6ème A
  level: string; // e.g., Sixième
  series?: string; // e.g., S, L
  studentCount: number;
}

export interface Grade {
  id: string;
  studentId: string;
  classId: string;
  subjectId: string;
  evaluationId: string;
  value: number;
}

export interface Evaluation {
  id: string;
  classId: string;
  type: 'Devoir' | 'Interrogation' | 'Examen';
  date: string;
  title: string;
  coefficient: number;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  date: string;
  status: 'PRESENT' | 'ABSENT' | 'LATE';
}

export type ViewType = 'dashboard' | 'classes' | 'students' | 'grades' | 'attendance' | 'reports';
