import { formatISODate } from "@/utils/formatDate";
import Link from "next/link";

interface PostProps {
  title: string;
  slug: string;
  createdAt: string;
}

export default function PostCard({ title, slug, createdAt }: PostProps) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="flex justify-between p-4 bg-gray-900 rounded-lg hover:bg-gray-800">
        <h1>{title}</h1>
        <p>{formatISODate(createdAt)}</p>
      </div>
    </Link>
  );
}

