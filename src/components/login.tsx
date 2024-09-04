// login.tsx component

"use client"; // Indique que ce fichier est un composant client

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getClientIntl } from '@/lib/intl.client'; // Importer la fonction getClientIntl
import type { Locale } from '@/lib/definitions';

const Login = ({ locale = 'fr' }: { locale: Locale }) => { // Ajouter 'locale' comme prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const intl = await getClientIntl(locale); // Utilisation de getClientIntl côté client
    
    // Simuler une vérification d'authentification
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('authenticated', 'true');
      router.push(`/${locale}/home`); // Rediriger vers /fr/home après l'authentification
    } else {
      alert(intl.formatMessage({ id: 'invalid.credentials' })); // Exemple d'utilisation de intl
    }
  };

  return (
    <div className="flex justify-start min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg my-auto" style={{ width: '400px', marginLeft: '-170px' }}>
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <button type="submit" className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}


export default Login;

