function DashboardPayments() {
    const payments = [
      { project: 'E-commerce Platform', amount: '$5,000', status: 'Paid', date: '2024-01-10' },
      { project: 'Mobile Banking App', amount: '$3,500', status: 'Pending', date: '2024-01-15' },
      { project: 'AI Chatbot', amount: '$2,000', status: 'Overdue', date: '2024-01-05' },
    ];
  
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Total Earned</h3>
            <p className="text-2xl font-bold text-green-600">$24,500</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Pending Payments</h3>
            <p className="text-2xl font-bold text-yellow-600">$3,500</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Overdue</h3>
            <p className="text-2xl font-bold text-red-600">$2,000</p>
          </div>
        </div>
  
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Payment History</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {payments.map((payment, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.project}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          payment.status === 'Paid'
                            ? 'bg-green-100 text-green-800'
                            : payment.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">
                        <i className="fas fa-download mr-1"></i>
                        Invoice
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default DashboardPayments;