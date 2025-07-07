"use client";
import Link from "next/link";
import api from "@/services/api";
import { useState } from "react";
import { Button } from "../Button";
import FormInput from "./FormInput"

export default function LoginForm() {
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    try {
      const response = await api.post("/sessions", {
        username: formData.get("username"),
        password: formData.get("password"),
      });

      localStorage.setItem("forumAccessToken", (await response.json()).token);
      localStorage.setItem("forumUser", JSON.stringify((await response.json()).user));
    } catch (error: any) {
      setError(error.response?.data?.message || "Login falhou");
    }
  }

  return (
    <form
      action={handleSubmit}
      className="flex gap-50 bg-black p-12 rounded-2xl"
    >
      <h1 className="text-3xl">Login</h1>

      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <FormInput
          id="email"
          name="email"
          type="email"
        />
        <label htmlFor="password">Senha</label>
        <FormInput
          id="password"
          name="password"
          type="password"
        />
        {error && <small style={{ color: "red" }}>{error}</small>}

        <Button className="self-end text-lg mb-5">Log In</Button>

        <small>
          Não tem uma conta? <Link className="text-primary hover:text-secondary" href="/sign-up">Cadastrar</Link>
        </small>
      </div>
    </form>
  );
}

