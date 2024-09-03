// login-layout.tsx

import { ReactNode } from 'react';

interface LoginLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
