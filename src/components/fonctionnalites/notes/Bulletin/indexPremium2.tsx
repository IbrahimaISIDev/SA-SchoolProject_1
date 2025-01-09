import React, { useRef } from 'react';
import { Card } from '../../../ui/card';
import { Badge } from '../../../ui/badge';
import { Button } from '../../../ui/button';
import { GraduationCap, Download, Printer } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const GradeReport = () => {
  const reportRef = useRef(null);

  const generatePDF = () => {
    const element = reportRef.current;
    const opt = {
      margin: [10, 10],
      filename: 'bulletin-notes.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Boutons d'action fixes */}
      <div className="fixed top-4 right-4 flex gap-2 print:hidden">
        <Button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Printer className="w-4 h-4 mr-2" />
          Imprimer
        </Button>
        <Button
          onClick={generatePDF}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          Exporter PDF
        </Button>
      </div>

      {/* Contenu du bulletin */}
      <div
        ref={reportRef}
        className="max-w-5xl mx-auto bg-white shadow-lg p-8 print:shadow-none"
      >
        {/* En-tête avec logo */}
        <div className="flex justify-between items-start border-b border-gray-200 pb-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 rounded-xl p-4 text-white print:bg-blue-600">
              <GraduationCap size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ISI SUPTECH</h1>
              <p className="text-sm text-gray-500">
                Institut Supérieur d'Informatique
              </p>
            </div>
          </div>
          <div className="text-right">
            <Badge className="mb-2 bg-blue-600">Bulletin de notes</Badge>
            <p className="text-sm text-gray-600">
              Année académique : 2022-2023
            </p>
            <p className="text-sm text-gray-600">Semestre 2</p>
          </div>
        </div>

        {/* Informations de l'étudiant */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Nom et prénom :</span>
              <span className="font-medium">Ibrahima Sory DIALLO</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Matricule :</span>
              <span>411-23-1085/ISI SUPTECH</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date de naissance :</span>
              <span>11/08/2001</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Formation :</span>
              <span className="font-medium">Licence</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Spécialité :</span>
              <span>Réseaux Informatiques</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Domaine :</span>
              <span>NTIC</span>
            </div>
          </div>
        </div>

        {/* Tableau des notes */}
        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-y border-gray-200">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                  UE / Éléments constitutifs
                </th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-700">
                  MCC 40%
                </th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-700">
                  Examen 60%
                </th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-700">
                  Moy EC
                </th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-700">
                  Coef EC
                </th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-700">
                  Moyenne Coef
                </th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-700">
                  Appréciation
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* UE1.2.1 */}
              <tr className="bg-gray-50">
                <td colSpan={7} className="py-2 px-4 font-medium text-blue-600">
                  UE1.2.1 ALA 1102
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-900">Algorithmique</td>
                <td className="py-3 px-4 text-center">12.00</td>
                <td className="py-3 px-4 text-center">12.00</td>
                <td className="py-3 px-4 text-center font-medium">12.00</td>
                <td className="py-3 px-4 text-center">3.00</td>
                <td className="py-3 px-4 text-center font-medium">36.00</td>
                <td className="py-3 px-4 text-center">
                  <Badge variant="outline" className="bg-green-50">
                    Assez bien
                  </Badge>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-900">Lang C</td>
                <td className="py-3 px-4 text-center">12.00</td>
                <td className="py-3 px-4 text-center">12.00</td>
                <td className="py-3 px-4 text-center font-medium">12.00</td>
                <td className="py-3 px-4 text-center">3.00</td>
                <td className="py-3 px-4 text-center font-medium">36.00</td>
                <td className="py-3 px-4 text-center">
                  <Badge variant="outline" className="bg-green-50">
                    Assez bien
                  </Badge>
                </td>
              </tr>
              <tr className="bg-blue-50">
                <td colSpan={5} className="py-2 px-4 text-right font-medium">
                  Total UE1.2.1
                </td>
                <td className="py-2 px-4 text-center font-medium">72.00</td>
                <td className="py-2 px-4 text-center">
                  <Badge className="bg-green-600">Validée</Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Récapitulatif des semestres */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card className="p-4 border">
            <h3 className="font-medium text-gray-900 mb-4">Semestre 1</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Crédits obtenus</span>
                <Badge variant="outline">30/30</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Moyenne</span>
                <span className="font-medium">12,26/20</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{ width: '61.3%' }}
                ></div>
              </div>
            </div>
          </Card>

          <Card className="p-4 border">
            <h3 className="font-medium text-gray-900 mb-4">Semestre 2</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Crédits obtenus</span>
                <Badge variant="outline">22/30</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Moyenne</span>
                <span className="font-medium">11,85/20</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{ width: '59.25%' }}
                ></div>
              </div>
            </div>
          </Card>

          <Card className="p-4 border">
            <h3 className="font-medium text-gray-900 mb-4">Total Général</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Crédits totaux</span>
                <Badge variant="outline">52/60</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Moyenne générale</span>
                <span className="font-medium">12,05/20</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{ width: '60.25%' }}
                ></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Décision et signature */}
        <div className="border-t border-gray-200 pt-6">
          <div className="mb-8">
            <h3 className="font-medium text-gray-900 mb-2">
              Décision du conseil de classe
            </h3>
            <p className="text-gray-600 bg-yellow-50 border border-yellow-200 rounded p-3">
              Admis(e) sous réserve - Travail Insuffisant UE à reprendre voir
              récapitulatif
            </p>
          </div>

          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">
                Fait à Dakar, le {new Date().toLocaleDateString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                Le Directeur des études
              </p>
              <div className="h-20"></div>
              <p className="text-sm text-gray-600">Cachet et signature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeReport;
