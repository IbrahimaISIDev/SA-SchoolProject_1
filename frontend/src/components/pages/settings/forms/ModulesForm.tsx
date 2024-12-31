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

const ModulesForm = () => {
  const [modules, setModules] = useState([]);
  const [newModule, setNewModule] = useState({
    nom: '',
    niveau: '',
    coefficient: '',
    heures: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newModule.nom ||
      !newModule.niveau ||
      !newModule.coefficient ||
      !newModule.heures
    )
      return;

    setModules([...modules, { ...newModule, id: Date.now() }]);
    setNewModule({ nom: '', niveau: '', coefficient: '', heures: '' });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ajouter un nouveau module</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nom">Nom du module</Label>
                <Input
                  id="nom"
                  value={newModule.nom}
                  onChange={(e) =>
                    setNewModule({ ...newModule, nom: e.target.value })
                  }
                  placeholder="Ex: Algorithmique"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="niveau">Niveau</Label>
                <Select
                  value={newModule.niveau}
                  onValueChange={(value) =>
                    setNewModule({ ...newModule, niveau: value })
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
                <Label htmlFor="coefficient">Coefficient</Label>
                <Input
                  id="coefficient"
                  type="number"
                  value={newModule.coefficient}
                  onChange={(e) =>
                    setNewModule({ ...newModule, coefficient: e.target.value })
                  }
                  placeholder="Ex: 2"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="heures">Volume horaire</Label>
                <Input
                  id="heures"
                  type="number"
                  value={newModule.heures}
                  onChange={(e) =>
                    setNewModule({ ...newModule, heures: e.target.value })
                  }
                  placeholder="Nombre d'heures"
                  className="w-full"
                />
              </div>
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Ajouter le module
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Liste des modules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Niveau</TableHead>
                  <TableHead>Coefficient</TableHead>
                  <TableHead>Volume horaire</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {modules.map((module) => (
                  <TableRow key={module.id}>
                    <TableCell>{module.nom}</TableCell>
                    <TableCell>{module.niveau}</TableCell>
                    <TableCell>{module.coefficient}</TableCell>
                    <TableCell>{module.heures}h</TableCell>
                    <TableCell>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() =>
                          setModules(modules.filter((m) => m.id !== module.id))
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

export default ModulesForm;
