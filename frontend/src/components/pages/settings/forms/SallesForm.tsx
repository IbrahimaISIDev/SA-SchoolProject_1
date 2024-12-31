// src/components/parametres/forms/SallesForm.tsx
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

const SallesForm = () => {
  const [salles, setSalles] = useState([]);
  const [newSalle, setNewSalle] = useState({
    numero: '',
    capacite: '',
    type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newSalle.numero || !newSalle.capacite) return;

    setSalles([...salles, { ...newSalle, id: Date.now() }]);
    setNewSalle({ numero: '', capacite: '', type: '' });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ajouter une nouvelle salle</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="numero">Numéro de salle</Label>
                <Input
                  id="numero"
                  value={newSalle.numero}
                  onChange={(e) =>
                    setNewSalle({ ...newSalle, numero: e.target.value })
                  }
                  placeholder="Ex: A101"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Type de salle</Label>
                <Input
                  id="type"
                  value={newSalle.type}
                  onChange={(e) =>
                    setNewSalle({ ...newSalle, type: e.target.value })
                  }
                  placeholder="Ex: Cours, TP, Amphi"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="capacite">Capacité</Label>
                <Input
                  id="capacite"
                  type="number"
                  value={newSalle.capacite}
                  onChange={(e) =>
                    setNewSalle({ ...newSalle, capacite: e.target.value })
                  }
                  placeholder="Nombre de places"
                  className="w-full"
                />
              </div>
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Ajouter la salle
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Liste des salles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Numéro</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Capacité</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salles.map((salle) => (
                  <TableRow key={salle.id}>
                    <TableCell>{salle.numero}</TableCell>
                    <TableCell>{salle.type}</TableCell>
                    <TableCell>{salle.capacite}</TableCell>
                    <TableCell>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() =>
                          setSalles(salles.filter((s) => s.id !== salle.id))
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

export default SallesForm;
