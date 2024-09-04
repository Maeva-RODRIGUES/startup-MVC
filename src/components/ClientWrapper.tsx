// ClientWrapper.tsx

"use client"; // Indique que ce composant est un Client Component

import { useRouter, usePathname } from 'next/navigation'; // Importation correcte pour le client
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router, pathname]);

  useEffect(() => {
    toast("Welcome to the dashboard!");
  }, [pathname]);

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default ClientWrapper;
