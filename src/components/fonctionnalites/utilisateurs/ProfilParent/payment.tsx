import React, { useState } from 'react';
import {
  CreditCard,
  Download,
  Calendar,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
  ArrowRight,
  Bell,
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '../../../ui/card';
import { useLayout } from '../../../../contexts/LayoutContext';

export default function ParentPaymentsView() {
  const { sidebarOpen } = useLayout();
  const [activeTab, setActiveTab] = useState('overview');

  const children = [
    {
      id: 1,
      name: 'Fatou Diallo',
      class: 'L2 GL',
      totalFees: 1500000,
      paidAmount: 900000,
      remainingAmount: 600000,
      nextPayment: '2024-02-15',
      paymentProgress: 60,
    },
    {
      id: 2,
      name: 'Amadou Diallo',
      class: 'L1 GL',
      totalFees: 1200000,
      paidAmount: 800000,
      remainingAmount: 400000,
      nextPayment: '2024-02-15',
      paymentProgress: 67,
    },
  ];

  const transactions = [
    {
      id: 1,
      date: '2024-01-15',
      description: 'Mensualité Janvier - Fatou Diallo',
      amount: 150000,
      status: 'completed',
      method: 'Wave',
    },
    {
      id: 2,
      date: '2024-01-15',
      description: 'Mensualité Janvier - Amadou Diallo',
      amount: 150000,
      status: 'completed',
      method: 'Orange Money',
    },
    {
      id: 3,
      date: '2024-02-15',
      description: 'Mensualité Février - Fatou Diallo',
      amount: 150000,
      status: 'pending',
      method: 'En attente',
    },
  ];

  const upcomingPayments = [
    {
      id: 1,
      childName: 'Fatou Diallo',
      dueDate: '2024-02-15',
      amount: 150000,
      type: 'Mensualité Février',
    },
    {
      id: 2,
      childName: 'Amadou Diallo',
      dueDate: '2024-02-15',
      amount: 150000,
      type: 'Mensualité Février',
    },
  ];

  return (
    <main
      className={`
        fixed 
        top-[73px] 
        right-0 
        bottom-0 
        overflow-y-auto
        bg-gray-50
        transition-all
        duration-300
        ${sidebarOpen ? 'left-64' : 'left-20'}
      `}
    >
      <div className="p-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Paiements Scolarité</h1>
              <p className="text-indigo-100">
                Gérez les paiements de scolarité de vos enfants
              </p>
            </div>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition-colors">
              <CreditCard className="w-5 h-5" />
              Nouveau paiement
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg p-4 mb-8">
          <div className="flex space-x-4 border-b">
            {[
              { id: 'overview', label: "Vue d'ensemble" },
              { id: 'history', label: 'Historique' },
              { id: 'schedule', label: 'Échéancier' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-4 text-sm font-medium transition-colors relative
                  ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'overview' && (
          <>
            {/* Children Payment Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {children.map((child) => (
                <Card key={child.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">
                          {child.name}
                        </h2>
                        <p className="text-gray-500">{child.class}</p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                        Détails <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${child.paymentProgress}%` }}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Montant payé</p>
                          <p className="text-lg font-bold text-gray-900">
                            {child.paidAmount.toLocaleString()} FCFA
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Reste à payer</p>
                          <p className="text-lg font-bold text-red-600">
                            {child.remainingAmount.toLocaleString()} FCFA
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-amber-600">
                          <Bell className="w-4 h-4" />
                          <span className="text-sm">
                            Prochaine échéance : {child.nextPayment}
                          </span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Payer maintenant
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Transactions */}
            <Card className="mb-8">
              <CardHeader>
                <h2 className="text-xl font-bold">Transactions récentes</h2>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">
                          Date
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">
                          Description
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">
                          Montant
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">
                          Méthode
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">
                          Statut
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b">
                          <td className="py-4 px-6">{transaction.date}</td>
                          <td className="py-4 px-6">
                            {transaction.description}
                          </td>
                          <td className="py-4 px-6 font-medium">
                            {transaction.amount.toLocaleString()} FCFA
                          </td>
                          <td className="py-4 px-6">{transaction.method}</td>
                          <td className="py-4 px-6">
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold
                              ${
                                transaction.status === 'completed'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}
                            >
                              {transaction.status === 'completed' ? (
                                <CheckCircle className="w-3 h-3" />
                              ) : (
                                <Clock className="w-3 h-3" />
                              )}
                              {transaction.status === 'completed'
                                ? 'Complété'
                                : 'En attente'}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <button className="text-blue-600 hover:text-blue-800">
                              <Download className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === 'history' && (
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Historique complet</h2>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <Download className="w-4 h-4" />
                  Exporter
                </button>
              </div>
              {/* Similar table as in overview but with more entries */}
            </CardContent>
          </Card>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold">Prochains paiements</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingPayments.map((payment) => (
                    <div
                      key={payment.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Calendar className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">{payment.type}</h3>
                          <p className="text-sm text-gray-500">
                            {payment.childName}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">
                          {payment.amount.toLocaleString()} FCFA
                        </p>
                        <p className="text-sm text-gray-500">
                          Échéance : {payment.dueDate}
                        </p>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Payer
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold">Rappels de paiement</h2>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                  <div>
                    <p className="font-medium text-amber-800">
                      Paiement à venir
                    </p>
                    <p className="text-sm text-amber-600">
                      N'oubliez pas le paiement de la mensualité de Février
                      avant le 15/02/2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </main>
  );
}
