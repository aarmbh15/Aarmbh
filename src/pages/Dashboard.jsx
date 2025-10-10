import { useState } from 'react';
import DashboardOverview from './DashboardOverview';
import DashboardProjects from './DashboardProjects';
import DashboardMessages from './DashboardMessages';
import DashboardPayments from './DashboardPayments';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Dashboard</h1>
          <p className="text-gray-600">Manage your projects, track progress, and communicate with the team.</p>
        </div>

        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { key: 'overview', label: 'Overview', icon: 'fas fa-chart-line' },
                { key: 'projects', label: 'My Projects', icon: 'fas fa-folder' },
                { key: 'messages', label: 'Messages', icon: 'fas fa-comments' },
                { key: 'payments', label: 'Payments', icon: 'fas fa-credit-card' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.key
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <i className={`${tab.icon} mr-2`}></i>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {activeTab === 'overview' && <DashboardOverview />}
        {activeTab === 'projects' && <DashboardProjects />}
        {activeTab === 'messages' && <DashboardMessages />}
        {activeTab === 'payments' && <DashboardPayments />}
      </div>
    </div>
  );
}

export default Dashboard;