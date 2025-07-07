export interface fetchQuestionAnswersResponse {
  answers: {
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  }[];
}
