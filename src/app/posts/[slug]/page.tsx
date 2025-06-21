import { fetchQuestionInfoBySlug } from "@/services/questions.service";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params
  const info = await fetchQuestionInfoBySlug(slug);

  console.log(info);

  return <h1>This post slug is: {slug}</h1>;
}
