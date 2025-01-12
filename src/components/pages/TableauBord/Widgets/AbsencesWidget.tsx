import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ChevronUp, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../ui/card';
import { motion } from 'framer-motion';

interface AbsenceStats {
  total: number;
  nonJustifiees: number;
  tauxAbsenteisme: number;
  evolution: number;
}

const AbsencesWidget = () => {
  const stats: AbsenceStats = {
    total: 45,
    nonJustifiees: 15,
    tauxAbsenteisme: 8.5,
    evolution: -2.3,
  };

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Absences</CardTitle>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Ce mois</span>
            <Link
              to="/stat-absences"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Détails
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded-lg p-4 bg-red-50"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="text-red-500" size={20} />
              <span className="text-2xl font-bold text-gray-800">
                {stats.nonJustifiees}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Absences non justifiées
            </p>
            <div className="h-1 bg-gradient-to-r from-red-500 to-red-600 mt-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="border rounded-lg p-4 bg-blue-50"
          >
            <div className="flex items-center gap-2">
              <Users className="text-blue-500" size={20} />
              <span className="text-2xl font-bold text-gray-800">
                {stats.total}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Total absences</p>
            <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 mt-4" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 border rounded-lg p-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Taux d'absentéisme</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold text-gray-800">
                  {stats.tauxAbsenteisme}%
                </p>
                <div className="flex items-center text-green-500">
                  <ChevronUp size={16} />
                  <span className="text-sm font-medium">
                    {Math.abs(stats.evolution)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 mt-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full h-2 transition-all duration-500"
              style={{ width: `${stats.tauxAbsenteisme}%` }}
            />
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default AbsencesWidget;
