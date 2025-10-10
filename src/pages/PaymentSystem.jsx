import { useState } from 'react';
import InvoicesTab from './InvoicesTab';
import PaymentsTab from './PaymentsTab';
import BillingTab from './BillingTab';

function PaymentSystem() {
  const [activeTab, setActiveTab] = useState('invoices');

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment System</h1>
          <p className="text-gray-600">Manage invoices, track payments, and handle billing.</p>
        </div>

        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { key: 'invoices', label: 'Invoices', icon: 'fas fa-file-invoice' },
                { key: 'payments', label: 'Payments', icon: 'fas fa-credit-card' },
                { key: 'billing', label: 'Billing Info', icon: 'fas fa-building' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.key ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <i className={`${tab.icon} mr-2`}></i>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {activeTab === 'invoices' && <InvoicesTab />}
        {activeTab === 'payments' && <PaymentsTab />}
        {activeTab === 'billing' && <BillingTab />}
      </div>
    </div>
  );
}

export default PaymentSystem;