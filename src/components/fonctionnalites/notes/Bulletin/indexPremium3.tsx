import React from 'react';
import { Card } from '../../../ui/card';
import { Badge } from '../../../ui/badge';
import { GraduationCap, Award, BookOpen, Building2 } from 'lucide-react';

const GradeReport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* En-tête avec design premium */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
          <div className="relative p-8 border-b">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-4 flex items-center space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-4 text-white shadow-lg">
                  <Building2 size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                    ISI SUPTECH
                  </h2>
                  <div className="flex items-center text-gray-600 mt-1">
                    <BookOpen size={14} className="mr-1" />
                    <span className="text-sm">Excellence Académique</span>
                  </div>
                </div>
              </div>

              <div className="col-span-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">
                        Année académique :
                      </span>
                      <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 text-xs">
                        2022-2023
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-800">
                        Ibrahima Sory DIALLO
                      </p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                        411-23-1085/ISI SUPTECH
                      </p>
                    </div>
                  </div>
                  <div className="text-right space-y-3">
                    <Badge className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-4 py-1">
                      Semestre 2
                    </Badge>
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-800">Licence</p>
                      <p className="text-sm text-gray-500">
                        Réseaux Informatiques
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tableau des notes avec design amélioré */}
        <div className="p-8">
          <div className="bg-white rounded-xl shadow-sm border">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 bg-gray-50 border-b">
                    UE / Éléments constitutifs
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-gray-700 bg-gray-50 border-b">
                    MCC 40%
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-gray-700 bg-gray-50 border-b">
                    Examen 60%
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-gray-700 bg-gray-50 border-b">
                    Moy EC
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-gray-700 bg-gray-50 border-b">
                    Coef EC
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-gray-700 bg-gray-50 border-b">
                    Moyenne Coef
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-gray-700 bg-gray-50 border-b">
                    Crédit EC
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-700 bg-gray-50 border-b">
                    Appréciation
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* UE1.2.1 */}
                <tr>
                  <td
                    colSpan={8}
                    className="py-3 px-6 font-medium bg-blue-50 text-blue-700 border-b"
                  >
                    UE1.2.1 ALA 1102
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 border-b">
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                      Algorithmique
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center border-b">
                    <span className="inline-block min-w-[40px] text-blue-700 font-medium">
                      12.00
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center border-b">
                    <span className="inline-block min-w-[40px] text-blue-700 font-medium">
                      12.00
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center border-b font-medium">
                    12.00
                  </td>
                  <td className="py-4 px-4 text-center border-b text-gray-600">
                    3.00
                  </td>
                  <td className="py-4 px-4 text-center border-b font-medium">
                    36.00
                  </td>
                  <td className="py-4 px-4 text-center border-b text-gray-600">
                    5
                  </td>
                  <td className="py-4 px-6 text-center border-b">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transition-colors">
                      Assez bien
                    </Badge>
                  </td>
                </tr>

                {/* Total UE avec style amélioré */}
                <tr className="bg-gradient-to-r from-blue-50 to-transparent">
                  <td
                    colSpan={5}
                    className="py-3 px-6 text-right font-medium text-blue-700"
                  >
                    Total UE1.2.1
                  </td>
                  <td className="py-3 px-4 text-center font-semibold text-blue-700">
                    72.00
                  </td>
                  <td className="py-3 px-4 text-center font-medium">5.00</td>
                  <td className="py-3 px-6 text-center">
                    <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                      Validée
                    </Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Récapitulatif avec cards améliorées */}
        <div className="px-8 pb-8">
          <div className="grid grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-white to-blue-50 border border-blue-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Award size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Semestre 1</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Crédits obtenus</span>
                  <Badge className="bg-blue-100 text-blue-700">30/30</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Moyenne</span>
                    <span className="font-semibold text-gray-800">
                      12,26 / 20
                    </span>
                  </div>
                  <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                      style={{ width: '61.3%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Cartes similaires pour Semestre 2 et Total */}
            {/* ... */}
          </div>
        </div>

        {/* Décision avec style premium */}
        <div className="px-8 pb-8">
          <div className="bg-gradient-to-r from-amber-50 to-transparent border border-amber-100 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-amber-100 rounded-lg mt-1">
                <GraduationCap size={20} className="text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Décision du conseil de classe
                </h3>
                <p className="text-gray-600">
                  Admis(e) sous réserve - Travail Insuffisant UE à reprendre
                  voir récapitulatif
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Signature avec style élégant */}
        <div className="p-8 bg-gradient-to-b from-transparent to-gray-50">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Le Directeur des études
            </p>
            <div className="h-20 flex justify-end items-center">
              <div className="w-32 h-16 border-b-2 border-gray-300"></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Cachet et signature</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeReport;
