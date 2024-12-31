// src/components/parametres/forms/ProfesseursForm.tsx
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

const ProfesseursForm = () => {
  const [professeurs, setProfesseurs] = useState([]);
  const [newProfesseur, setNewProfesseur] = useState({
    nom: '',
    prenom: '',
    email: '',
    specialite: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProfesseur.nom || !newProfesseur.prenom || !newProfesseur.email)
      return;

    setProfesseurs([...professeurs, { ...newProfesseur, id: Date.now() }]);
    setNewProfesseur({ nom: '', prenom: '', email: '', specialite: '' });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ajouter un nouveau professeur</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nom">Nom</Label>
                <Input
                  id="nom"
                  value={newProfesseur.nom}
                  onChange={(e) =>
                    setNewProfesseur({ ...newProfesseur, nom: e.target.value })
                  }
                  placeholder="Nom"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prenom">Prénom</Label>
                <Input
                  id="prenom"
                  value={newProfesseur.prenom}
                  onChange={(e) =>
                    setNewProfesseur({
                      ...newProfesseur,
                      prenom: e.target.value,
                    })
                  }
                  placeholder="Prénom"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newProfesseur.email}
                  onChange={(e) =>
                    setNewProfesseur({
                      ...newProfesseur,
                      email: e.target.value,
                    })
                  }
                  placeholder="email@exemple.com"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialite">Spécialité</Label>
                <Input
                  id="specialite"
                  value={newProfesseur.specialite}
                  onChange={(e) =>
                    setNewProfesseur({
                      ...newProfesseur,
                      specialite: e.target.value,
                    })
                  }
                  placeholder="Ex: Mathématiques"
                  className="w-full"
                />
              </div>
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Ajouter le professeur
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Liste des professeurs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Prénom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Spécialité</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {professeurs.map((professeur) => (
                  <TableRow key={professeur.id}>
                    <TableCell>{professeur.nom}</TableCell>
                    <TableCell>{professeur.prenom}</TableCell>
                    <TableCell>{professeur.email}</TableCell>
                    <TableCell>{professeur.specialite}</TableCell>
                    <TableCell>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() =>
                          setProfesseurs(
                            professeurs.filter((p) => p.id !== professeur.id),
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

export default ProfesseursForm;
