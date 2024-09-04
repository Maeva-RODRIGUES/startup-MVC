//page login.tsx


import LoginLayout from "../login-layout";
import Login from "@/components/login"; // Votre composant Login

export default function LoginPage() {
  return (
    <LoginLayout>
      <Login locale={"fr"} />
    </LoginLayout>
  );
}
