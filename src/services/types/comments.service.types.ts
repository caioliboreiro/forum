export interface fetchQuestionCommentsResponse {
  comments: {
    commentId: string;
    authorId: string;
    authorName: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  }[];
}