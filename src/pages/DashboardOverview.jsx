function DashboardOverview() {
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Active Projects', value: '3', icon: 'fas fa-folder-open', color: 'text-blue-600', bg: 'bg-blue-50' },
            { title: 'Completed', value: '12', icon: 'fas fa-check-circle', color: 'text-green-600', bg: 'bg-green-50' },
            { title: 'Total Earnings', value: '$24,500', icon: 'fas fa-dollar-sign', color: 'text-purple-600', bg: 'bg-purple-50' },
            { title: 'Client Rating', value: '4.9', icon: 'fas fa-star', color: 'text-yellow-600', bg: 'bg-yellow-50' },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className={`${stat.bg} ${stat.color} p-3 rounded-lg mr-4`}>
                  <i className={stat.icon}></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'Project milestone completed', project: 'E-commerce Platform', time: '2 hours ago' },
                { action: 'New message from client', project: 'Mobile App', time: '4 hours ago' },
                { action: 'Payment received', project: 'Analytics Dashboard', time: '1 day ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                    <i className="fas fa-bell text-sm"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.project} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Create Project', icon: 'fas fa-plus', color: 'bg-blue-600' },
                { title: 'Send Message', icon: 'fas fa-message', color: 'bg-green-600' },
                { title: 'Generate Invoice', icon: 'fas fa-file-invoice', color: 'bg-purple-600' },
                { title: 'View Reports', icon: 'fas fa-chart-bar', color: 'bg-orange-600' },
              ].map((action, index) => (
                <button key={index} className={`${action.color} text-white p-4 rounded-lg hover:opacity-90 transition-opacity`}>
                  <i className={`${action.icon} text-xl mb-2`}></i>
                  <div className="text-sm font-medium">{action.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default DashboardOverview;