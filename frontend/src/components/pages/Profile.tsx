// src/pages/Profile.tsx
import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/Avatar';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface ProfileData {
  name: string;
  email: string;
  bio: string;
  avatar: string;
}

const ProfilePage = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [profileData, setProfileData] = React.useState<ProfileData>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Développeur passionné',
    avatar: '/api/placeholder/100/100',
  });

  const handleSave = () => {
    // Ici vous ajouterez la logique pour sauvegarder les modifications
    setIsEditing(false);
  };

  return (
    <div className="p6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={profileData.avatar} alt={profileData.name} />
              <AvatarFallback>{profileData.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{profileData.name}</h1>
              <p className="text-muted-foreground">{profileData.email}</p>
            </div>
          </div>
          <Button
            variant={isEditing ? 'default' : 'outline'}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Annuler' : 'Modifier'}
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {isEditing ? (
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input
                  id="name"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  className="w-full min-h-[100px] p-2 border rounded-md"
                  value={profileData.bio}
                  onChange={(e) =>
                    setProfileData({ ...profileData, bio: e.target.value })
                  }
                />
              </div>

              <Button onClick={handleSave}>Enregistrer</Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Bio</h3>
                <p className="mt-1 text-muted-foreground">{profileData.bio}</p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">Informations de contact</h3>
                <p className="text-sm text-muted-foreground">
                  Email: {profileData.email}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
