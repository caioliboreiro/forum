import {
  fetchRecentQuestionsResponse,
  fetchQuestionInfoBySlugResponse,
} from "./types/questions.services.types";
import api from "./api";

async function fetchRecentQuestions(
  page: number
): Promise<fetchRecentQuestionsResponse> {
  try {
    const response = await api.get<fetchRecentQuestionsResponse>("/questions", {
      params: {
        page,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Erro ao pegar as perguntas recentes ", error);
    throw error;
  }
}

async function fetchQuestionInfoBySlug(slug: string) {
  try {
    const response = await api.get<fetchQuestionInfoBySlugResponse>(
      `/questions/${slug}`
    );
    return response.data;
  } catch (error: any) {
    console.error("Erro ao pegar informações da pergunta");
  }
}

export { fetchRecentQuestions, fetchQuestionInfoBySlug };

