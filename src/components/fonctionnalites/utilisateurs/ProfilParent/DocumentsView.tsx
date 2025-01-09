import React, { useState } from 'react';
import {
  FileText,
  Download,
  Eye,
  Search,
  Filter,
  FileCheck,
  Receipt,
  Book,
  Calendar as CalendarIcon,
  File,
  Clock,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { Alert, AlertDescription } from '../../../ui/alert';
import { useLayout } from '../../../../contexts/LayoutContext';
export default function ParentDocumentsView() {
  const { sidebarOpen } = useLayout();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documentCategories = [
    { id: 'all', label: 'Tous les documents', icon: FileText },
    { id: 'certificates', label: 'Certificats de scolarité', icon: FileCheck },
    { id: 'invoices', label: 'Factures et reçus', icon: Receipt },
    { id: 'rules', label: 'Règlement intérieur', icon: Book },
    { id: 'calendar', label: 'Calendrier scolaire', icon: CalendarIcon },
    { id: 'forms', label: 'Formulaires', icon: File },
  ];

  const documents = [
    {
      id: 1,
      name: 'Certificat de scolarité - Fatou Diallo',
      category: 'certificates',
      date: '2024-01-15',
      size: '245 KB',
      status: 'available',
      child: 'Fatou Diallo',
    },
    {
      id: 2,
      name: 'Facture Frais de scolarité T1 2024',
      category: 'invoices',
      date: '2024-01-10',
      size: '180 KB',
      status: 'available',
      child: 'Tous les enfants',
    },
    {
      id: 3,
      name: 'Règlement intérieur 2023-2024',
      category: 'rules',
      date: '2023-09-01',
      size: '1.2 MB',
      status: 'available',
      child: 'Tous les enfants',
    },
    {
      id: 4,
      name: "Formulaire d'autorisation de sortie",
      category: 'forms',
      date: '2024-01-20',
      size: '125 KB',
      status: 'toComplete',
      child: 'Amadou Diallo',
    },
  ];

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.child.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId) => {
    const category = documentCategories.find((cat) => cat.id === categoryId);
    const Icon = category ? category.icon : FileText;
    return <Icon className="w-5 h-5" />;
  };

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
              <h1 className="text-3xl font-bold mb-2">
                Documents administratifs
              </h1>
              <p className="text-indigo-100">
                Accédez à tous vos documents importants
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {documentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                p-4 rounded-lg flex items-center space-x-3 transition-all
                ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              <div
                className={`
                p-2 rounded-lg
                ${
                  selectedCategory === category.id
                    ? 'bg-blue-500'
                    : 'bg-blue-100'
                }
              `}
              >
                {React.createElement(category.icon, {
                  className: `w-5 h-5 ${
                    selectedCategory === category.id
                      ? 'text-white'
                      : 'text-blue-600'
                  }`,
                })}
              </div>
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un document..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Document
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Enfant
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Taille
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          {getCategoryIcon(doc.category)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {doc.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {
                              documentCategories.find(
                                (cat) => cat.id === doc.category,
                              )?.label
                            }
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {doc.child}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {doc.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {doc.size}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-3">
                        {doc.status === 'available' ? (
                          <>
                            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Eye className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Download className="w-5 h-5" />
                            </button>
                          </>
                        ) : (
                          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1">
                            <span>Remplir</span>
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </main>
  );
}
