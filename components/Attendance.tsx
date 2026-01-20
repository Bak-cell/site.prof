
import React, { useState } from 'react';
import { Check, X, Clock, Calendar, ChevronLeft, ChevronRight, Save } from 'lucide-react';
import { mockStudents } from '../data/mockData';

export const Attendance: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('1');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const students = mockStudents.filter(s => s.classId === selectedClass);
  
  const [attendance, setAttendance] = useState<Record<string, 'PRESENT' | 'ABSENT' | 'LATE'>>(
    students.reduce((acc, s) => ({ ...acc, [s.id]: 'PRESENT' }), {})
  );

  const toggleStatus = (studentId: string, status: 'PRESENT' | 'ABSENT' | 'LATE') => {
    setAttendance(prev => ({ ...prev, [studentId]: status }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Appel Journalier</h1>
          <p className="text-slate-500 text-sm">Effectuez l'appel pour la classe sélectionnée.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
          <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 px-2 text-sm font-bold text-slate-700">
            <Calendar className="w-4 h-4 text-blue-500" />
            {new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
          </div>
          <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: List */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <select 
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="text-sm font-bold text-slate-700 border-none bg-slate-50 rounded-lg px-4 py-2"
            >
              <option value="1">6ème A</option>
              <option value="2">3ème B</option>
            </select>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-wider">
              <div className="flex items-center gap-1.5 text-emerald-600">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                Présents: {Object.values(attendance).filter(v => v === 'PRESENT').length}
              </div>
              <div className="flex items-center gap-1.5 text-red-600">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                Absents: {Object.values(attendance).filter(v => v === 'ABSENT').length}
              </div>
            </div>
          </div>
          
          <div className="divide-y divide-slate-100">
            {students.map((student) => (
              <div key={student.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                    {student.firstName[0]}{student.lastName[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 uppercase">{student.lastName}</p>
                    <p className="text-xs text-slate-500">{student.firstName}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => toggleStatus(student.id, 'PRESENT')}
                    className={`p-2 rounded-lg transition-all ${attendance[student.id] === 'PRESENT' ? 'bg-emerald-500 text-white shadow-md shadow-emerald-100' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                  >
                    <Check className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => toggleStatus(student.id, 'ABSENT')}
                    className={`p-2 rounded-lg transition-all ${attendance[student.id] === 'ABSENT' ? 'bg-red-500 text-white shadow-md shadow-red-100' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => toggleStatus(student.id, 'LATE')}
                    className={`p-2 rounded-lg transition-all ${attendance[student.id] === 'LATE' ? 'bg-orange-500 text-white shadow-md shadow-orange-100' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                  >
                    <Clock className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-3 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
              <Save className="w-5 h-5" />
              Valider l'appel
            </button>
          </div>
        </div>

        {/* Right Column: Insights */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Statistiques du jour</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Ponctualité</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900">92%</span>
                  <span className="text-xs text-emerald-600 font-bold">+2.4% vs hier</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full mt-2">
                  <div className="h-full bg-blue-500 rounded-full w-[92%]"></div>
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Absences critiques</p>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 text-[10px] text-white flex items-center justify-center font-bold">+2</div>
                </div>
                <p className="text-[10px] text-slate-400 mt-2">5 élèves ont dépassé le seuil d'alerte.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-2xl text-white shadow-xl shadow-blue-100">
            <h3 className="font-bold text-lg mb-2">Notification Parents</h3>
            <p className="text-blue-100 text-sm mb-4">Envoyez automatiquement des SMS aux parents des élèves absents sans justification.</p>
            <button className="w-full py-2 bg-white text-blue-700 rounded-lg text-sm font-bold hover:bg-blue-50 transition-all">
              Configurer alertes SMS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
