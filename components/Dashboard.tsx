
import React from 'react';
import { 
  Users, 
  GraduationCap, 
  TrendingUp, 
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  CalendarDays
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const stats = [
  { label: 'Effectif Total', value: '165', subValue: '+4 cette semaine', icon: <Users className="w-6 h-6" />, color: 'bg-blue-500', trend: 'up' },
  { label: 'Moyenne Générale', value: '12.45', subValue: '+0.5 pts vs T1', icon: <GraduationCap className="w-6 h-6" />, color: 'bg-emerald-500', trend: 'up' },
  { label: 'Taux de Présence', value: '94%', subValue: '-2% aujourd\'hui', icon: <Clock className="w-6 h-6" />, color: 'bg-orange-500', trend: 'down' },
  { label: 'Évaluations', value: '24', subValue: 'Terminées', icon: <TrendingUp className="w-6 h-6" />, color: 'bg-purple-500', trend: 'neutral' },
];

const data = [
  { name: '6ème A', moyenne: 11.2, presence: 98 },
  { name: '3ème B', moyenne: 13.5, presence: 92 },
  { name: '1ère D', moyenne: 10.8, presence: 88 },
  { name: 'Tle C', moyenne: 14.1, presence: 95 },
];

const performanceHistory = [
  { month: 'Oct', val: 11.5 },
  { month: 'Nov', val: 12.1 },
  { month: 'Déc', val: 11.8 },
  { month: 'Jan', val: 12.4 },
  { month: 'Fév', val: 12.9 },
  { month: 'Mar', val: 13.2 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Bonjour, M. Bakayoko 👋</h1>
          <p className="text-slate-500">Prêt pour vos cours de Physique-Chimie & SVT ?</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
            <CalendarDays className="w-4 h-4" />
            Mars 2024
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
            Faire l'appel
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl text-white ${stat.color} shadow-lg shadow-${stat.color.split('-')[1]}-100 transition-transform group-hover:scale-110`}>
                {stat.icon}
              </div>
              {stat.trend === 'up' ? (
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-lg">
                  <ArrowUpRight className="w-3 h-3" />
                  HAUSSE
                </div>
              ) : stat.trend === 'down' ? (
                <div className="flex items-center gap-1 text-red-600 text-xs font-bold bg-red-50 px-2 py-1 rounded-lg">
                  <ArrowDownRight className="w-3 h-3" />
                  BAISSE
                </div>
              ) : null}
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</h3>
              <p className="text-slate-400 text-xs mt-2">{stat.subValue}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance by Class */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-900">Performance par classe</h3>
            <select className="text-sm bg-slate-50 border-none rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-100 outline-none text-slate-600 font-medium cursor-pointer">
              <option>Trimestre 2</option>
              <option>Trimestre 1</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="moyenne" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Evolution Timeline */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-900">Évolution Moyenne</h3>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              Générale
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceHistory} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} domain={[10, 16]} />
                <Tooltip />
                <Area type="monotone" dataKey="val" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">Activités Récentes</h3>
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">Voir tout</button>
        </div>
        <div className="divide-y divide-slate-50">
          {[
            { title: "Appel effectué - 6ème A", time: "Il y a 2 heures", type: "presence" },
            { title: "Notes saisies - Devoir Math 3ème B", time: "Hier à 14:20", type: "grade" },
            { title: "Nouveau rapport généré - Trimestre 2", time: "12 Mar 2024", type: "report" }
          ].map((item, i) => (
            <div key={i} className="p-4 hover:bg-slate-50 transition-colors flex items-center gap-4">
              <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-emerald-500' : 'bg-purple-500'}`}></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-700">{item.title}</p>
                <p className="text-xs text-slate-400">{item.time}</p>
              </div>
              <button className="text-slate-400 hover:text-slate-600 p-2">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Simple icon for internal use in Dashboard
function ChevronRight(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
