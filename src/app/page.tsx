import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./_lib/interface";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] {
  title,
  smallDescription,
  "currentSlug": slug.current,
  titleImage
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((post, idx) => (
      <Card key={idx} className="w-80 flex hover:scale-105 transition-all flex-col items-center justify-between">
  <Image
    src={urlFor(post.titleImage).url()}
    alt="image"
    width={300}
    height={200}
    className="w-full h-40 object-cover rounded-t-lg"
  />
  <CardContent className="flex-1 w-full p-4 flex flex-col items-start">
    <h3 className="text-lg font-bold">{post.title}</h3>
    <p className="text-sm mt-2 text-slate-400 dark:text-gray-300">
      {post.smallDescription}
    </p>
    <div className="mt-auto w-full">
      <Button asChild className="w-full mt-7">
        <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
      </Button>
    </div>
  </CardContent>
</Card>
      ))}
    </div>
  </div>
    
  );
}