import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../../../ui/table';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../ui/select';

const ClassesForm = () => {
  const [classes, setClasses] = useState([]);
  const [newClasse, setNewClasse] = useState({
    niveau: '',
    filiere: '',
    capacite: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newClasse.niveau || !newClasse.filiere || !newClasse.capacite) return;

    setClasses([...classes, { ...newClasse, id: Date.now() }]);
    setNewClasse({ niveau: '', filiere: '', capacite: '' });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ajouter une nouvelle classe</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="niveau">Niveau</Label>
                <Select
                  value={newClasse.niveau}
                  onValueChange={(value) =>
                    setNewClasse({ ...newClasse, niveau: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionner le niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    {['1ère année', '2ème année', '3ème année'].map(
                      (niveau) => (
                        <SelectItem key={niveau} value={niveau}>
                          {niveau}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="filiere">Filière</Label>
                <Input
                  id="filiere"
                  value={newClasse.filiere}
                  onChange={(e) =>
                    setNewClasse({ ...newClasse, filiere: e.target.value })
                  }
                  placeholder="Ex: Informatique"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="capacite">Capacité</Label>
                <Input
                  id="capacite"
                  type="number"
                  value={newClasse.capacite}
                  onChange={(e) =>
                    setNewClasse({ ...newClasse, capacite: e.target.value })
                  }
                  placeholder="Nombre d'étudiants"
                  className="w-full"
                />
              </div>
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Ajouter la classe
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Liste des classes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Niveau</TableHead>
                  <TableHead>Filière</TableHead>
                  <TableHead>Capacité</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classes.map((classe) => (
                  <TableRow key={classe.id}>
                    <TableCell>{classe.niveau}</TableCell>
                    <TableCell>{classe.filiere}</TableCell>
                    <TableCell>{classe.capacite}</TableCell>
                    <TableCell>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() =>
                          setClasses(classes.filter((c) => c.id !== classe.id))
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

export default ClassesForm;
