"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../Button";
import FormInput from "./FormInput";
import login from "@/app/auth/login";

export default function LoginForm() {
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await login(formData);
    } catch (error: any) {
      setError("Login Falhou");
    }
  }

  return (
    <form
      action={login}
      className="flex gap-52 bg-black p-12 rounded-2xl"
    >
      <h1 className="text-3xl">Login</h1>

      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <FormInput id="email" name="email" type="email" />
        <label htmlFor="password">Senha</label>
        <FormInput id="password" name="password" type="password" />
        {error && <small style={{ color: "red" }}>{error}</small>}

        <Button type="submit" className="self-end text-lg mb-5">
          Log In
        </Button>

        <small>
          Não tem uma conta?{" "}
          <Link className="text-primary hover:text-secondary" href="/sign-up">
            Cadastrar
          </Link>
        </small>
      </div>
    </form>
  );
}

