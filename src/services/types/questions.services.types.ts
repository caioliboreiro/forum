export interface Question {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface fetchRecentQuestionsResponse {
  questions: Question[];
}

export interface fetchQuestionInfoBySlugResponse {
  questions: Question[];
}