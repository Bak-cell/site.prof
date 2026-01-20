
import React from 'react';
import { ViewType } from '../types';
import { 
  LayoutDashboard, 
  Users, 
  UserSquare2, 
  GraduationCap, 
  CheckCircle2, 
  FileBarChart2,
  Bell,
  Search,
  LogOut,
  ChevronRight,
  Info
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onViewChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'classes', label: 'Mes Classes', icon: <Users className="w-5 h-5" /> },
    { id: 'students', label: 'Élèves', icon: <UserSquare2 className="w-5 h-5" /> },
    { id: 'grades', label: 'Notes & Évals', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'attendance', label: 'Présences', icon: <CheckCircle2 className="w-5 h-5" /> },
    { id: 'reports', label: 'Rapports', icon: <FileBarChart2 className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="w-12 h-10 bg-white rounded-lg flex items-center justify-center p-1 shadow-inner">
            {/* Logo ENS Placeholder - Représentation visuelle fidèle */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/fr/4/4c/Logo_ENS_Abidjan.png" 
              alt="ENS Logo" 
              className="object-contain h-full"
              onError={(e) => {
                // Fallback si l'image distante n'est pas accessible
                (e.target as HTMLImageElement).src = 'https://raw.githubusercontent.com/lucide-react/lucide/main/icons/school.svg';
                (e.target as HTMLImageElement).className = "invert w-6 h-6";
              }}
            />
          </div>
          <span className="text-xl font-bold tracking-tight">ClassPilot</span>
        </div>
        
        <nav className="flex-1 px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as ViewType)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                currentView === item.id 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
              {currentView === item.id && <ChevronRight className="ml-auto w-4 h-4" />}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white border-2 border-slate-700">
              BA
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-semibold truncate">M. Bakayoko Aboubakar</p>
              <p className="text-[10px] text-slate-400 font-medium truncate uppercase tracking-tighter">Physique-Chimie & SVT</p>
            </div>
          </div>
          
          <div className="px-2 mb-4">
             <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                <div className="flex items-center gap-2 mb-1 text-blue-400">
                   <Info className="w-3 h-3" />
                   <span className="text-[9px] font-bold uppercase tracking-widest">Crédits</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight italic">
                  Conçu par le Prof. Bakayoko Aboubakar
                </p>
             </div>
          </div>

          <button className="w-full flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-red-400 transition-colors text-xs font-medium border-t border-slate-800 pt-4">
            <LogOut className="w-4 h-4" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-full w-96">
            <Search className="w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher un élève, une classe..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-400"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">Année Scolaire</p>
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">2023-2024 • Trimestre 2</p>
            </div>
          </div>
        </header>

        {/* Dynamic Viewport */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
