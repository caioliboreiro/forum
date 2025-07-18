import { fetchRecentQuestions } from "@/services/questions.service";
import PostCard from "./PostCard";

export default async function RecentPosts() {
  const recentQuestions = await fetchRecentQuestions(1);
  return (
    <ul className="p-10">
      {recentQuestions.questions.map((question) => (
        <li key={question.id}>
          <PostCard
            title={question.title}
            slug={question.slug}
            createdAt={question.createdAt}
          />
        </li>
      ))}
    </ul>
  );
}
