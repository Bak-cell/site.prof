
import React from 'react';
import { FileText, FileSpreadsheet, Download, Printer, Archive, ShieldCheck, PieChart } from 'lucide-react';

export const Reports: React.FC = () => {
  const reports = [
    { title: "Bulletins de notes", desc: "Génération individuelle ou par classe pour le T2", icon: <FileText className="text-blue-600" />, count: 165 },
    { title: "Statistiques Trimestrielles", desc: "Analyse comparative des performances par matière", icon: <PieChart className="text-purple-600" />, count: 4 },
    { title: "Registre d'appel consolidé", desc: "Suivi des présences mensuelles exportable Excel", icon: <FileSpreadsheet className="text-emerald-600" />, count: 12 },
    { title: "Certificats de scolarité", desc: "Modèles officiels pré-remplis", icon: <Archive className="text-orange-600" />, count: 0 }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Centre de Rapports</h1>
        <p className="text-slate-500 text-sm">Générez, exportez et archivez vos documents administratifs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-5">
            <div className="p-4 bg-slate-50 rounded-2xl">
              {React.cloneElement(report.icon as React.ReactElement, { className: "w-8 h-8 " + (report.icon as React.ReactElement).props.className })}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-bold text-slate-900">{report.title}</h3>
                {report.count > 0 && <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">{report.count} fichiers</span>}
              </div>
              <p className="text-sm text-slate-500 mb-6">{report.desc}</p>
              <div className="flex items-center gap-3">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                  <Download className="w-3.5 h-3.5" />
                  Générer PDF
                </button>
                <button className="px-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all">
                  Excel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Advanced Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <h3 className="font-bold text-slate-900">Archives de fin de cycle</h3>
          </div>
          <button className="text-sm font-bold text-blue-600">Accéder aux archives</button>
        </div>
        <div className="p-8 text-center max-w-xl mx-auto space-y-4">
          <p className="text-slate-500 text-sm leading-relaxed">
            Conformément aux normes du Ministère de l'Éducation, ClassPilot permet de sauvegarder les dossiers scolaires sur 10 ans pour assurer la continuité pédagogique.
          </p>
          <div className="flex justify-center gap-8 py-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">2022</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Clôturé</p>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">2023</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Clôturé</p>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">2024</p>
              <p className="text-[10px] text-blue-400 font-bold uppercase italic tracking-widest animate-pulse">En cours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
