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
  question: {
    questionId: string;
    authorId: string;
    author: string;
    title: string;
    content: string;
    slug: string;
    attachments: string[];
    createdAt: string;
    updatedAt: string;
  };
}
