import {  fetchQuestionCommentsResponse } from "./types/comments.service.types"
import api from "./api";

async function fetchQuestionComments(questionId: string) {
  try {
    const { data } = await api.get<fetchQuestionCommentsResponse>(
      `/questions/${questionId}/comments`
    );
    return data;
  } catch (error: any) {
    console.error("Error ao pegar comentários da pergunta " + error);
    throw error;
  }
}

export {fetchQuestionComments};