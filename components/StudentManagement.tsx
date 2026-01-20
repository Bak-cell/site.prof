
import React, { useState } from 'react';
import { UserPlus, Search, Filter, MoreHorizontal, Mail, Phone, Calendar } from 'lucide-react';
import { mockStudents } from '../data/mockData';

export const StudentManagement: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-2 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Annuaire des Élèves</h1>
          <p className="text-slate-500 text-sm">Gérez les dossiers individuels et le suivi pédagogique.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
          <UserPlus className="w-4 h-4" />
          Nouvel Élève
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockStudents.map((student) => (
          <div key={student.id} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <button className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-blue-100">
                {student.firstName[0]}{student.lastName[0]}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">{student.lastName}</h3>
                <p className="text-slate-500 font-medium">{student.firstName}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">ID: {student.id}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${student.gender === 'Féminin' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'}`}>
                    {student.gender}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-50">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>Né(e) le {new Date(student.birthDate).toLocaleDateString('fr-FR')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="truncate">parent.{student.lastName.toLowerCase()}@mail.com</span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors">
                Profil Complet
              </button>
              <button className="px-3 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors">
                Absences
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
