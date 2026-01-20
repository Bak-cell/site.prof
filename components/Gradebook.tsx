
import React, { useState } from 'react';
import { Plus, Search, Filter, Save, Download, Calculator, CheckCircle2 } from 'lucide-react';
import { mockEvaluations, mockStudents, mockGrades } from '../data/mockData';

export const Gradebook: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('1');
  const students = mockStudents.filter(s => s.classId === selectedClass);
  
  // Saisie simplifiée : un état local pour les notes en cours d'édition
  const [localGrades, setLocalGrades] = useState<Record<string, string>>({});

  const handleGradeChange = (studentId: string, value: string) => {
    // Validation basique 0-20
    const num = parseFloat(value);
    if (value === '' || (!isNaN(num) && num >= 0 && num <= 20)) {
      setLocalGrades(prev => ({ ...prev, [studentId]: value }));
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Notes & Évaluations</h1>
          <p className="text-slate-500 text-sm">Saisissez les notes et calculez les moyennes automatiquement.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200">
            <Save className="w-4 h-4" />
            Enregistrer les notes
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
            <Plus className="w-4 h-4" />
            Nouvelle Évaluation
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-slate-500">Classe:</span>
          <select 
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="text-sm bg-slate-50 border-none rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-100 outline-none text-slate-700 font-semibold"
          >
            <option value="1">6ème A</option>
            <option value="2">3ème B</option>
            <option value="3">1ère D</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-slate-500">Évaluation:</span>
          <select className="text-sm bg-slate-50 border-none rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-100 outline-none text-slate-700 font-semibold">
            {mockEvaluations.map(e => (
              <option key={e.id} value={e.id}>{e.title} ({e.type})</option>
            ))}
          </select>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <Calculator className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grade Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">N°</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Élève</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Sexe</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Note (/20)</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Observations</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {students.map((student, idx) => (
              <tr key={student.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4 text-sm text-slate-400 font-mono">{idx + 1}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                      {student.firstName[0]}{student.lastName[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase">{student.lastName}</p>
                      <p className="text-xs text-slate-500 font-medium">{student.firstName}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${student.gender === 'Masculin' ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'}`}>
                    {student.gender === 'Masculin' ? 'M' : 'F'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <input 
                    type="number" 
                    min="0" 
                    max="20"
                    step="0.25"
                    placeholder="--"
                    value={localGrades[student.id] || ''}
                    onChange={(e) => handleGradeChange(student.id, e.target.value)}
                    className="w-20 px-3 py-2 bg-slate-50 border-none rounded-lg text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </td>
                <td className="px-6 py-4">
                  <input 
                    type="text" 
                    placeholder="Observation pédagogique..."
                    className="w-full bg-transparent border-none text-xs text-slate-600 focus:ring-0 placeholder:text-slate-300 italic"
                  />
                </td>
                <td className="px-6 py-4 text-center">
                  {localGrades[student.id] ? (
                    <div className="flex justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-slate-200 mx-auto"></div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-blue-900 text-white p-6 rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/10 rounded-xl">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold">Calculateur de Moyenne Intelligent</h4>
            <p className="text-blue-200 text-sm">Le système détecte automatiquement les coefficients selon la série.</p>
          </div>
        </div>
        <button className="px-6 py-2 bg-white text-blue-900 rounded-xl text-sm font-bold hover:bg-blue-50 transition-all">
          Lancer le calcul T2
        </button>
      </div>
    </div>
  );
};
