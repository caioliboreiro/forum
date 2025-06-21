import * as React from "react";
import { fetchQuestionInfoBySlug } from "@/services/questions.service";
import { fetchQuestionComments } from "@/services/comments.service";
import { formatISODate } from "@/utils/formatDate";
import MakeCommentInput from "@/app/components/MakeCommentInput";

interface PostSectionProps {
  children: React.ReactNode;
}

interface PostHeaderProps {
  title: string;
  createdAt: string;
}

interface CommentSectionProps {
  children: React.ReactNode;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { question } = await fetchQuestionInfoBySlug(slug);
  const { comments } = await fetchQuestionComments(question.questionId);

  const { title, author, content, createdAt, updatedAt } = question;

  return (
    <>
      <main className="p-10 w-[60%] mx-auto">
        <PostSection>
          <PostHeader title={title} createdAt={formatISODate(createdAt)} />
          <p className="text-base mb-5">{content}</p>
          <MakeCommentInput />
        </PostSection>
        <CommentSection>
          <ul>
            {comments.map((comment) => (
              <li key={comment.commentId}>{comment.content}</li>
            ))}
          </ul>
        </CommentSection>
      </main>
    </>
  );
}

const PostSection = ({ children }: PostSectionProps) => {
  return <section>{children}</section>;
};

const PostHeader = ({ title, createdAt }: PostHeaderProps) => {
  return (
    <div className="flex justify-between mb-5">
      <h1 className="text-2xl">{title}</h1>
      <p>{createdAt}</p>
    </div>
  );
};

const CommentSection = ({ children }: CommentSectionProps) => {
  return <section>{children}</section>;
};

export { PostPage, PostSection, PostHeader, CommentSection };

