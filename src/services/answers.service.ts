import { fetchQuestionAnswersResponse } from "./types/answers.service.types";
import api from "./api";

async function fetchQuestionAnswers(
  page: number,
  questionId: string
): Promise<fetchQuestionAnswersResponse> {
  try {
    const response = await api.get(
      `/questions/${questionId}/answers?page=${page}`
    );
    return (await response.json());
  } catch (error: any) {
    console.error("Error ao pegar comentários da pergunta " + error);
    throw error;
  }
}

export { fetchQuestionAnswers };
