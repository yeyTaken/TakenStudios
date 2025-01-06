import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "TakenStudios - Login",
  description: "Faça Login.",
};

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <Link href='/auth0/register' target='_blank'/* abrir em uma página separada */>
        Regitre-se
      </Link>
    </>
  );
}
