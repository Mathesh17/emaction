"use client";

import { useState } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/admin/dashboard");
    setUsername('');
    setPassword('');
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold flex gap-2">Organization -  <p className={cn("bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent")}>EmAction</p></CardTitle>
        <CardDescription>Enter your username and password to login as an admin</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Organization</Label>
              <Input
                id="username"
                placeholder="Org"
                required
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="******"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
