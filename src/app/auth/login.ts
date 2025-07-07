"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtDecode } from "jwt-decode";

export default async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch("http://localhost:3333/sessions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  const { token } = await response.json();
  const decoded = jwtDecode(token);
  const expires = new Date(decoded.exp! * 1000);

  const cookieStore = await cookies();
  cookieStore.set("Authentication", token, {
    httpOnly: true,
    secure: true,
    expires,
    path: "/",
  });

  redirect("/");
}
