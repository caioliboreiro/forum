import UserIcon from "./UserIcon";
import Link from "next/link";

interface CommentProps {
  authorId: string;
  authorName: string;
  createdAt: string;
  content: string;
}

interface CommentHeaderProps {
  authorId: string;
  authorName: string;
  createdAt: string;
}

export interface UserIconProps {
  size?: string;
}

export default function Comment({
  authorId,
  authorName,
  createdAt,
  content,
}: CommentProps) {
  return (
    <div>
      <CommentHeader
        authorId={authorId}
        authorName={authorName}
        createdAt={createdAt}
      />
      <p>{content}</p>
    </div>
  );
}

const CommentHeader = ({
  authorId,
  authorName,
  createdAt,
}: CommentHeaderProps) => {
  return (
    <div className="flex justify-between mb-3">
      <Link href={`/user/${authorId}`}>
        <div className="flex items-center gap-3">
          <UserIcon />
          <p className="font-bold">{authorName}</p>
        </div>
      </Link>
      <p>{createdAt}</p>
    </div>
  );
};

export { CommentHeader};

