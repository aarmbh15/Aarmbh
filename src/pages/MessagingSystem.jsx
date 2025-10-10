import { useState } from 'react';

function MessagingSystem() {
  const [selectedChat, setSelectedChat] = useState(0);
  const [newMessage, setNewMessage] = useState('');

  const chats = [
    {
      id: 1,
      name: 'John Smith',
      company: 'RetailCorp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      lastMessage: 'Thanks for the update on the project.',
      time: '2 hours ago',
      unread: 2,
      status: 'online',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'FinTech Inc',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
      lastMessage: 'The design looks great!',
      time: '1 day ago',
      unread: 0,
      status: 'offline',
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'John Smith',
      content: 'Hi Alex, how is the progress on the e-commerce platform?',
      time: '10:30 AM',
      isMe: false,
    },
    {
      id: 2,
      sender: 'Me',
      content:
        "Hello John! The project is going well. We've completed the user authentication and product catalog features. Currently working on the payment integration.",
      time: '10:35 AM',
      isMe: true,
    },
    {
      id: 3,
      sender: 'John Smith',
      content: "That's great to hear! When do you expect to have the payment system ready?",
      time: '10:37 AM',
      isMe: false,
    },
    {
      id: 4,
      sender: 'Me',
      content: "We should have the payment integration completed by Friday. I'll send you a demo link once it's ready for testing.",
      time: '10:40 AM',
      isMe: true,
    },
  ];

  return (
    <div className="pt-16 h-screen bg-gray-50">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow h-full overflow-hidden">
          <div className="flex h-full">
            <div className="w-1/3 border-r border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Messages</h2>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="overflow-y-auto">
                {chats.map((chat, index) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(index)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${selectedChat === index ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
                        <div
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                            chat.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                          }`}
                        ></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-medium text-gray-900 truncate">{chat.name}</p>
                            <p className="text-xs text-gray-500">{chat.company}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">{chat.time}</p>
                            {chat.unread > 0 && (
                              <div className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-1">
                                {chat.unread}
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 truncate mt-1">{chat.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={chats[selectedChat].avatar} alt={chats[selectedChat].name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{chats[selectedChat].name}</h3>
                      <p className="text-sm text-gray-500">{chats[selectedChat].company}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                      <i className="fas fa-phone"></i>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                      <i className="fas fa-video"></i>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.isMe ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'}`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.isMe ? 'text-blue-100' : 'text-gray-500'}`}>{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center space-x-4">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <i className="fas fa-paperclip"></i>
                  </button>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagingSystem;