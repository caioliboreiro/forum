const BASE_URL = "http://localhost:3333";
import { cookies } from "next/headers";

const getHeaders = async () => ({
  Cookie: (await cookies()).toString(),
});

const api = () => {
  async function get(url: string) {
    const response = await fetch(BASE_URL + url, {
      headers: { ...(await getHeaders()) },
    });

    return response;
  }

  async function post(url: string, body?: { [key: string]: any }) {
    const response = await fetch(BASE_URL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(await getHeaders()),
      },
      body: JSON.stringify(body),
    });

    return response;
  }

  return { get, post };
};

export default api();

