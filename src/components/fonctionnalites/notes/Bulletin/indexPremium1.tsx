import React from 'react';
import { Card } from '../../../ui/card';
import { Badge } from '../../../ui/badge';
import { GraduationCap, Award, CheckCircle, AlertCircle } from 'lucide-react';

const GradeReport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* En-tête avec dégradé */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4 flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4">
                <GraduationCap size={40} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">ISI SUPTECH</h2>
                <p className="text-blue-100">Excellence académique</p>
              </div>
            </div>

            <div className="col-span-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-100">Année académique</span>
                    <Badge
                      variant="outline"
                      className="border-white/40 text-white"
                    >
                      2022-2023
                    </Badge>
                  </div>
                  <p className="text-lg font-medium">Ibrahima Sory DIALLO</p>
                  <p className="text-sm text-blue-100">
                    411-23-1085/ISI SUPTECH
                  </p>
                </div>
                <div className="text-right space-y-3">
                  <Badge className="bg-white text-blue-600">Semestre 2</Badge>
                  <p className="text-lg font-medium">Licence</p>
                  <p className="text-sm text-blue-100">Réseaux Informatiques</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <Card className="p-6 border border-blue-100 bg-gradient-to-br from-white to-blue-50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-700">
                  Moyenne Générale
                </h3>
                <Award className="text-blue-600 w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-blue-600">
                12,05<span className="text-lg text-gray-400">/20</span>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Progression constante
              </div>
            </Card>

            <Card className="p-6 border border-blue-100 bg-gradient-to-br from-white to-green-50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-700">Crédits Obtenus</h3>
                <CheckCircle className="text-green-600 w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-green-600">
                52<span className="text-lg text-gray-400">/60</span>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Excellent taux de réussite
              </div>
            </Card>

            <Card className="p-6 border border-blue-100 bg-gradient-to-br from-white to-yellow-50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-700">UE Validées</h3>
                <AlertCircle className="text-yellow-600 w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-yellow-600">
                4<span className="text-lg text-gray-400">/5</span>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                En cours de validation
              </div>
            </Card>
          </div>

          {/* Tableau des notes avec style amélioré */}
          <div className="overflow-hidden rounded-xl border border-blue-100 mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-blue-50">
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">
                    UE / Éléments constitutifs
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-gray-600">
                    MCC 40%
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-gray-600">
                    Examen 60%
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-gray-600">
                    Moy EC
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-gray-600">
                    Coef EC
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-gray-600">
                    Moyenne Coef
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-gray-600">
                    Crédit EC
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-600">
                    Appréciation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-50/50">
                  <td
                    colSpan={8}
                    className="py-3 px-6 font-semibold text-blue-600"
                  >
                    UE1.2.1 ALA 1102
                  </td>
                </tr>
                <tr className="border-t border-blue-50">
                  <td className="py-4 px-6 text-gray-600">Algorithmique</td>
                  <td className="py-4 px-4 text-center">
                    <Badge variant="outline" className="bg-blue-50">
                      12.00
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Badge variant="outline" className="bg-blue-50">
                      12.00
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-center font-medium text-gray-700">
                    12.00
                  </td>
                  <td className="py-4 px-4 text-center text-gray-500">3.00</td>
                  <td className="py-4 px-4 text-center font-medium text-blue-600">
                    36.00
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Badge className="bg-green-100 text-green-700">5</Badge>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-3 py-1 rounded-full text-green-700 bg-green-100 text-sm font-medium">
                      Assez bien
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-blue-50">
                  <td className="py-4 px-6 text-gray-600">Algorithmique</td>
                  <td className="py-4 px-4 text-center">
                    <Badge variant="outline" className="bg-blue-50">
                      12.00
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Badge variant="outline" className="bg-blue-50">
                      12.00
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-center font-medium text-gray-700">
                    12.00
                  </td>
                  <td className="py-4 px-4 text-center text-gray-500">3.00</td>
                  <td className="py-4 px-4 text-center font-medium text-blue-600">
                    36.00
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Badge className="bg-green-100 text-green-700">5</Badge>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-3 py-1 rounded-full text-green-700 bg-green-100 text-sm font-medium">
                      Assez bien
                    </span>
                  </td>
                </tr>
                <td
                  colSpan={8}
                  className="py-3 px-6 font-semibold text-blue-600"
                >
                  UE1.2.1 ALA 1102
                </td>
                <tr className="border-t border-blue-50">
                  <td className="py-4 px-6 text-gray-600">Algorithmique</td>
                  <td className="py-4 px-4 text-center">
                    <Badge variant="outline" className="bg-blue-50">
                      12.00
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Badge variant="outline" className="bg-blue-50">
                      12.00
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-center font-medium text-gray-700">
                    12.00
                  </td>
                  <td className="py-4 px-4 text-center text-gray-500">3.00</td>
                  <td className="py-4 px-4 text-center font-medium text-blue-600">
                    36.00
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Badge className="bg-green-100 text-green-700">5</Badge>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-3 py-1 rounded-full text-green-700 bg-green-100 text-sm font-medium">
                      Assez bien
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-blue-50">
                  <td className="py-4 px-6 text-gray-600">Algorithmique</td>
                  <td className="py-4 px-4 text-center">
                    <Badge variant="outline" className="bg-blue-50">
                      12.00
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Badge variant="outline" className="bg-blue-50">
                      12.00
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-center font-medium text-gray-700">
                    12.00
                  </td>
                  <td className="py-4 px-4 text-center text-gray-500">3.00</td>
                  <td className="py-4 px-4 text-center font-medium text-blue-600">
                    36.00
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Badge className="bg-green-100 text-green-700">5</Badge>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-3 py-1 rounded-full text-green-700 bg-green-100 text-sm font-medium">
                      Assez bien
                    </span>
                  </td>
                </tr>
                {/* Autres lignes similaires... */}
              </tbody>
            </table>
          </div>

          {/* Récapitulatif semestriel */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <Card className="p-6 border-blue-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-700">Semestre 1</h3>
                <Badge variant="outline" className="bg-blue-50">
                  30/30 Crédits
                </Badge>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Moyenne</span>
                  <span className="text-2xl font-bold text-blue-600">
                    12,26
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: '61.3%' }}
                  ></div>
                </div>
                <div className="grid grid-cols-5 gap-2 text-sm">
                  {[16.32, 10.68, 10.93, 11.46, 12.4].map((note, index) => (
                    <div key={index} className="text-center">
                      <div className="font-medium text-gray-700">
                        UE{index + 1}
                      </div>
                      <div className="text-gray-500">{note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6 border-blue-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-700">Semestre 2</h3>
                <Badge variant="outline" className="bg-blue-50">
                  22/30 Crédits
                </Badge>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Moyenne</span>
                  <span className="text-2xl font-bold text-blue-600">
                    11,85
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: '59.25%' }}
                  ></div>
                </div>
                <div className="grid grid-cols-5 gap-2 text-sm">
                  {[12.0, 9.46, 10.8, 12.3, 15.96].map((note, index) => (
                    <div key={index} className="text-center">
                      <div className="font-medium text-gray-700">
                        UE{index + 1}
                      </div>
                      <div className="text-gray-500">{note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Décision avec style amélioré */}
          <Card className="border-l-4 border-l-yellow-400 mb-8">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Décision du conseil de classe
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Admis(e) sous réserve - Travail Insuffisant UE à reprendre
                    voir récapitulatif
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Section signature stylisée */}
          <div className="flex justify-end mt-12">
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-2">
                Le Directeur des études
              </p>
              <div className="h-20 flex items-center justify-end">
                <div className="w-32 h-32 relative">
                  {/* Emplacement pour le cachet/signature */}
                  <div className="absolute inset-0 bg-blue-50/50 rounded-full opacity-25"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">Cachet et signature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeReport;
