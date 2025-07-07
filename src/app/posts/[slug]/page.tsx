import * as React from "react";
import { fetchQuestionInfoBySlug } from "@/services/questions.service";
import { fetchQuestionComments } from "@/services/comments.service";
import { formatISODate } from "@/utils/formatDate";
import MakeCommentInput from "@/app/components/MakeCommentInput";
import Comment from "@/app/components/Comment";
import UserIcon from "@/app/components/UserIcon";
import Link from "next/link";
import { fetchQuestionAnswers } from "@/services/answers.service";

interface PostSectionProps {
  children: React.ReactNode;
}

interface PostHeaderProps {
  author: string;
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
  // LATER: Usar Promise.all Aqui
  const { comments } = await fetchQuestionComments(question.questionId);
  const { answers } = await fetchQuestionAnswers(1, question.questionId)

  console.log(answers);

  const { title, author, content, createdAt, updatedAt } = question;

  return (
    <>
      <main className="p-10 w-[60%] mx-auto">
        <PostSection>
          <PostHeader
            author={author}
            title={title}
            createdAt={formatISODate(createdAt)}
          />
          <p className="text-base mb-5">{content}</p>
          <MakeCommentInput />
        </PostSection>
        <CommentSection>
          <ul>
            {comments.map((comment) => (
              <Comment
                key={comment.commentId}
                authorId={comment.authorId}
                authorName={comment.authorName}
                createdAt={formatISODate(comment.createdAt)}
                content={comment.content}
              />
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

const PostHeader = ({ author, title, createdAt }: PostHeaderProps) => {
  return (
    <div className="items-center mb-5">
      <Link href={`/user/${author}`}>
        <div className="flex items-center gap-3">
          <UserIcon />
          <p className="font-bold">{author}</p>
        </div>
      </Link>

      <div className="flex justify-between mt-3">
        <h1 className="text-2xl">{title}</h1>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

const CommentSection = ({ children }: CommentSectionProps) => {
  return <section className="mt-8">{children}</section>;
};

export { PostPage, PostSection, PostHeader, CommentSection };

