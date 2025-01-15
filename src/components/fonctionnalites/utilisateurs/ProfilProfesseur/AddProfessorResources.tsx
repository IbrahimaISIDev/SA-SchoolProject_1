import React, { useState } from 'react';
import { Upload, File, AlertCircle, ArrowLeft } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../ui/card';
import { Alert, AlertDescription } from '../../../ui/alert';
import { useLayout } from '../../../layouts/Layout';
import { useNavigate } from 'react-router-dom';

const AddProfessorResource = () => {
  const navigate = useNavigate();
  const { sidebarOpen } = useLayout();
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    course: '',
    type: '',
    description: '',
    visibility: 'all',
    groups: [],
  });

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const validateFile = (file) => {
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/zip',
    ];
    const maxSize = 50 * 1024 * 1024; // 50MB

    if (!allowedTypes.includes(file.type)) {
      setError('Format de fichier non supporté');
      return false;
    }

    if (file.size > maxSize) {
      setError('Le fichier dépasse la taille maximale de 50MB');
      return false;
    }

    setError('');
    return true;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Veuillez sélectionner un fichier');
      return;
    }

    setLoading(true);
    try {
      // Création d'un FormData pour envoyer le fichier
      const formDataToSend = new FormData();
      formDataToSend.append('file', selectedFile);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('course', formData.course);
      formDataToSend.append('type', formData.type);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('visibility', formData.visibility);

      // Simulation d'un appel API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirection vers la liste des ressources
      navigate('/professeur/resources');
    } catch (error) {
      setError("Une erreur est survenue lors de l'envoi du fichier");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/professor/resources');
  };

  return (
    <main
      className={`fixed top-[73px] right-0 bottom-0 overflow-y-auto bg-gray-50 transition-all duration-300 ${
        sidebarOpen ? 'left-64' : 'left-20'
      }`}
    >
      <div className="p-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-white/20 hover:bg-white/30 transition p-2 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold mb-2">Ajouter une Ressource</h1>
              <p className="text-blue-100">
                Partagez vos supports pédagogiques avec vos étudiants
              </p>
            </div>
          </div>
        </div>

        {error && (
          <Alert className="mb-8 bg-red-50 text-red-600 border-red-200">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Informations de la ressource</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Titre de la ressource *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                      placeholder="Ex: Introduction au HTML/CSS"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cours associé *
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                      >
                        <option value="">Sélectionnez un cours</option>
                        <option value="web">Développement Web - L2 GL</option>
                        <option value="db">Base de données - L1 GL</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type de ressource *
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="course">Support de cours</option>
                        <option value="exercise">Exercice</option>
                        <option value="research">Recherche</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-3 border rounded-lg"
                      placeholder="Décrivez brièvement le contenu de cette ressource..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Visibilité
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="visibility"
                          value="all"
                          checked={formData.visibility === 'all'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Tous les étudiants
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="visibility"
                          value="specific"
                          checked={formData.visibility === 'specific'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Groupes spécifiques
                      </label>
                    </div>
                  </div>

                  {formData.visibility === 'specific' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Sélectionner les groupes
                      </label>
                      <select
                        name="groups"
                        multiple
                        value={formData.groups}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            groups: Array.from(
                              e.target.selectedOptions,
                              (option) => option.value,
                            ),
                          }))
                        }
                        className="w-full p-3 border rounded-lg"
                      >
                        <option value="gl2-g1">L2 GL - Groupe 1</option>
                        <option value="gl2-g2">L2 GL - Groupe 2</option>
                        <option value="gl1-g1">L1 GL - Groupe 1</option>
                        <option value="gl1-g2">L1 GL - Groupe 2</option>
                      </select>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {loading
                        ? 'Publication en cours...'
                        : 'Publier la ressource'}
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Annuler
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Fichier</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                      dragActive
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedFile ? (
                      <div className="space-y-2">
                        <File className="w-12 h-12 mx-auto text-blue-600" />
                        <p className="text-sm font-medium">
                          {selectedFile.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedFile(null);
                          }}
                          className="text-red-600 text-sm hover:underline"
                        >
                          Supprimer
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className="w-12 h-12 mx-auto text-gray-400" />
                        <div>
                          <p className="text-sm font-medium">
                            Glissez-déposez votre fichier ici
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            ou cliquez pour sélectionner
                          </p>
                        </div>
                      </div>
                    )}
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept=".pdf,.docx,.pptx,.zip"
                      aria-label="Sélectionner un fichier"
                    />
                  </div>
                </div>

                <Alert className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Formats acceptés: PDF, DOCX, PPTX, ZIP
                    <br />
                    Taille maximale: 50 MB
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddProfessorResource;
