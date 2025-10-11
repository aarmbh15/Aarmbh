import { useState } from 'react';
import DashboardOverview from './DashboardOverview';
import DashboardProjects from './DashboardProjects';
import DashboardMessages from './DashboardMessages';
import DashboardPayments from './DashboardPayments';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const primaryGold = '#f7dab2'; 
    const deepestBlack = 'bg-gray-950';

  return (
    // Set main background to deepestBlack
    <div className={`pt-16 min-h-screen ${deepestBlack}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          {/* Text color changed for dark background */}
          <h1 className="text-3xl font-bold text-white mb-2">Project Dashboard</h1>
          <p className="text-gray-400">Manage your projects, track progress, and communicate with the team.</p>
        </div>

        {/* Dashboard content wrapper, keeping it a lighter contrast for utility */}
        <div className="bg-white p-6 rounded-xl shadow-lg"> 
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
                        // Use Primary Gold for active tab indicator
                        ? 'text-neutral-900' // Dark text on light tab
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    style={activeTab === tab.key ? { borderColor: primaryGold } : {}}
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
    </div>
  );
}

export default Dashboard;