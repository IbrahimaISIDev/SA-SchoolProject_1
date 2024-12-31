// src/components/parametres/forms/AnneScolaireForm.tsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../ui/card';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../../../ui/table';

const AnneScolaireForm = () => {
  const [anneesScolaires, setAnneesScolaires] = useState([]);
  const [newAnnee, setNewAnnee] = useState({
    annee: '',
    dateDebut: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newAnnee.annee || !newAnnee.dateDebut) return;

    setAnneesScolaires([...anneesScolaires, { ...newAnnee, id: Date.now() }]);
    setNewAnnee({ annee: '', dateDebut: '' });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ajouter une nouvelle année scolaire</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="annee">Année</Label>
                <Input
                  id="annee"
                  value={newAnnee.annee}
                  onChange={(e) =>
                    setNewAnnee({ ...newAnnee, annee: e.target.value })
                  }
                  placeholder="2024-2025"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateDebut">Date de début</Label>
                <Input
                  id="dateDebut"
                  type="date"
                  value={newAnnee.dateDebut}
                  onChange={(e) =>
                    setNewAnnee({ ...newAnnee, dateDebut: e.target.value })
                  }
                  className="w-full"
                />
              </div>
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Ajouter l'année scolaire
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Liste des années scolaires</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Année</TableHead>
                  <TableHead>Date de début</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {anneesScolaires.map((annee) => (
                  <TableRow key={annee.id}>
                    <TableCell>{annee.annee}</TableCell>
                    <TableCell>{annee.dateDebut}</TableCell>
                    <TableCell>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() =>
                          setAnneesScolaires(
                            anneesScolaires.filter((a) => a.id !== annee.id),
                          )
                        }
                      >
                        Supprimer
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnneScolaireForm;
