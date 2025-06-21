import {
  fetchRecentQuestionsResponse,
  fetchQuestionInfoBySlugResponse,
} from "./types/questions.services.types";
import api from "./api";

async function fetchRecentQuestions(
  page: number
): Promise<fetchRecentQuestionsResponse> {
  try {
    const { data } = await api.get<fetchRecentQuestionsResponse>("/questions", {
      params: {
        page,
      },
    });
    return data;
  } catch (error: any) {
    console.error("Erro ao pegar as perguntas recentes ", error);
    throw error;
  }
}

async function fetchQuestionInfoBySlug(slug: string) {
  try {
    const { data } = await api.get<fetchQuestionInfoBySlugResponse>(
      `/questions/${slug}`
    );
    return data;
  } catch (error: any) {
    console.error("Erro ao pegar informações da pergunta ", error);
    throw error;
  }
}



export { fetchRecentQuestions, fetchQuestionInfoBySlug };

