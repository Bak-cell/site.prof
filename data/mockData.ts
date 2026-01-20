
import { Class, Student, Gender, Evaluation, Grade } from '../types';

export const mockClasses: Class[] = [
  { id: '1', name: '6ème A', level: 'Sixième', studentCount: 45 },
  { id: '2', name: '3ème B', level: 'Troisième', studentCount: 38 },
  { id: '3', name: '1ère D', level: 'Première', series: 'D', studentCount: 52 },
  { id: '4', name: 'Tle C', level: 'Terminale', series: 'C', studentCount: 30 },
];

export const mockStudents: Student[] = [
  { id: 's1', firstName: 'Koffi', lastName: 'Yao', gender: Gender.MALE, birthDate: '2010-05-12', classId: '1' },
  { id: 's2', firstName: 'Awa', lastName: 'Diallo', gender: Gender.FEMALE, birthDate: '2011-02-28', classId: '1' },
  { id: 's3', firstName: 'Bakary', lastName: 'Traoré', gender: Gender.MALE, birthDate: '2008-11-15', classId: '2' },
  { id: 's4', firstName: 'Fatou', lastName: 'Ndiaye', gender: Gender.FEMALE, birthDate: '2009-08-22', classId: '2' },
];

export const mockEvaluations: Evaluation[] = [
  { id: 'e1', classId: '1', type: 'Devoir', date: '2024-03-10', title: 'Calcul Littéral', coefficient: 2 },
  { id: 'e2', classId: '1', type: 'Interrogation', date: '2024-03-15', title: 'Géométrie', coefficient: 1 },
];

export const mockGrades: Grade[] = [
  { id: 'g1', studentId: 's1', classId: '1', subjectId: 'math', evaluationId: 'e1', value: 14.5 },
  { id: 'g2', studentId: 's2', classId: '1', subjectId: 'math', evaluationId: 'e1', value: 16.0 },
  { id: 'g3', studentId: 's1', classId: '1', subjectId: 'math', evaluationId: 'e2', value: 12.0 },
];
