import {
  fetchRecentQuestionsResponse,
  fetchQuestionInfoBySlugResponse,
} from "./types/questions.services.types";
import api from "./api";

async function fetchRecentQuestions(
  page: number
): Promise<fetchRecentQuestionsResponse> {
  try {
    const response = await api.get("/questions");
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Erro ao pegar as perguntas recentes ", error);
    throw error;
  }
}

async function fetchQuestionInfoBySlug(
  slug: string
): Promise<fetchQuestionInfoBySlugResponse> {
  try {
    const response = await api.get(
      `/questions/${slug}`
    );
    const data = await response.json()
    return data;
  } catch (error: any) {
    console.error("Erro ao pegar informações da pergunta ", error);
    throw error;
  }
}

export { fetchRecentQuestions, fetchQuestionInfoBySlug };
