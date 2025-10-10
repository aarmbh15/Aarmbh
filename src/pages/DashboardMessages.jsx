function DashboardMessages() {
    const messages = [
      { sender: 'John Smith (RetailCorp)', subject: 'Project Update Request', time: '2 hours ago', unread: true },
      { sender: 'Sarah Johnson (FinTech Inc)', subject: 'Review Completed', time: '1 day ago', unread: false },
      { sender: 'Mike Wilson (TechStart)', subject: 'New Requirements', time: '2 days ago', unread: true },
    ];
  
    return (
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Messages</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
              <i className="fas fa-plus mr-2"></i>
              New Message
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {messages.map((message, index) => (
            <div key={index} className={`px-6 py-4 hover:bg-gray-50 cursor-pointer ${message.unread ? 'bg-blue-50' : ''}`}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center">
                    <h4 className={`text-sm ${message.unread ? 'font-semibold' : 'font-medium'} text-gray-900`}>
                      {message.sender}
                    </h4>
                    {message.unread && <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{message.subject}</p>
                </div>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default DashboardMessages;