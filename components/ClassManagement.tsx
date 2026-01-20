
import React, { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, FileDown, Upload } from 'lucide-react';
import { mockClasses } from '../data/mockData';
import { Class } from '../types';

export const ClassManagement: React.FC = () => {
  const [classes] = useState<Class[]>(mockClasses);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Mes Classes</h1>
          <p className="text-slate-500 text-sm">Gérez vos classes, les séries et les effectifs.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-slate-200 bg-white rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-slate-50 transition-all">
            <Upload className="w-4 h-4" />
            Importer
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
            <Plus className="w-4 h-4" />
            Nouvelle Classe
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {classes.map((cls) => (
          <div key={cls.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all group overflow-hidden">
            <div className="h-2 bg-blue-600"></div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{cls.name}</h3>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{cls.level}</span>
                </div>
                <button className="text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-100 rounded-lg transition-all">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Effectif</span>
                  <span className="font-bold text-slate-700">{cls.studentCount} élèves</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Série</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded-md text-slate-600 font-medium">
                    {cls.series || 'Tronc Commun'}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-50 flex items-center gap-2">
                <button className="flex-1 px-3 py-2 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 rounded-lg text-xs font-bold transition-colors">
                  Voir Élèves
                </button>
                <button className="px-3 py-2 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 rounded-lg text-xs font-bold transition-colors">
                  Notes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
          <FileDown className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">Rapports de fin d'année</h3>
          <p className="text-slate-500 max-w-sm mx-auto">Vous pouvez générer les listes de classes consolidées avec les moyennes annuelles en un clic.</p>
        </div>
        <button className="px-6 py-2 border border-blue-200 text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-50 transition-all">
          Générer rapports listes
        </button>
      </div>
    </div>
  );
};
