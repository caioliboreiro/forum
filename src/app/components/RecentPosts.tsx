import { fetchRecentQuestions } from "@/services/questions.service";
import Post from "./Post";

export default async function RecentPosts(){
    const recentQuestions = await fetchRecentQuestions(1);
    return (
        <ul className="p-10">
            {recentQuestions.questions.map((question) => (
          <Post
            key={question.id}
            title={question.title}
            slug={question.slug}
            createdAt={question.createdAt}
          />
        ))}
        </ul>
    )
}