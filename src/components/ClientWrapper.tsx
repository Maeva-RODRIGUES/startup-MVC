// ClientWrapper.tsx

"use client"; // Indique que ce composant est un Client Component

import { useRouter } from 'next/navigation'; // Importation correcte pour le client
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);

  useEffect(() => {
    toast("Welcome to the dashboard!");
  }, []);

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default ClientWrapper;
