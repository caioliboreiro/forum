import { fetchQuestionCommentsResponse } from "./types/comments.service.types";
import api from "./api";

async function fetchQuestionComments(
  questionId: string
): Promise<fetchQuestionCommentsResponse> {
  try {
    const response = await api.get(
      `/questions/${questionId}/comments`
    );
    return (await response.json());
  } catch (error: any) {
    console.error("Error ao pegar comentários da pergunta " + error);
    throw error;
  }
}

export { fetchQuestionComments };
