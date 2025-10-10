function InvoicesTab() {
    const invoices = [
      { id: 'INV-001', project: 'E-commerce Platform', client: 'RetailCorp', amount: '$5,000', status: 'Paid', date: '2024-01-15', dueDate: '2024-01-30' },
      { id: 'INV-002', project: 'Mobile Banking App', client: 'FinTech Inc', amount: '$3,500', status: 'Pending', date: '2024-01-20', dueDate: '2024-02-05' },
      { id: 'INV-003', project: 'AI Chatbot', client: 'TechStart', amount: '$2,000', status: 'Overdue', date: '2024-01-10', dueDate: '2024-01-25' },
    ];
  
    return (
      <div>
        <div className="mb-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <i className="fas fa-plus mr-2"></i>
            Create Invoice
          </button>
        </div>
  
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">All Invoices</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoices.map((invoice, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{invoice.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.project}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.client}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{invoice.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : invoice.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.dueDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">View</button>
                      <button className="text-green-600 hover:text-green-900">Download</button>
                      <button className="text-purple-600 hover:text-purple-900">Send</button>
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
  
  export default InvoicesTab;