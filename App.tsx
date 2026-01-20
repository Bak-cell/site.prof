
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { ClassManagement } from './components/ClassManagement';
import { StudentManagement } from './components/StudentManagement';
import { Gradebook } from './components/Gradebook';
import { Attendance } from './components/Attendance';
import { Reports } from './components/Reports';
import { ViewType } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'classes': return <ClassManagement />;
      case 'students': return <StudentManagement />;
      case 'grades': return <Gradebook />;
      case 'attendance': return <Attendance />;
      case 'reports': return <Reports />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

export default App;
