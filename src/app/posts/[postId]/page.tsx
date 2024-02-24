import { getBlogPost, getSortedPostsMetaData } from "@/lib/posts";
import React from "react";
import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
  params: {
    postId: string;
  };
};

export async function generateMetadata({ params: { postId } }: Props) {
  const postsMetaData = getSortedPostsMetaData();

  const postMetaData = postsMetaData.find(
    (postMetaData) => postMetaData.id === postId,
  );

  if (!postMetaData) {
    return { title: "Post not found" };
  }
  const post: BlogPost = await getBlogPost(postId);

  return {
    title: post.title,
  };
}

async function page({ params: { postId } }: Props) {
  const postsMetaData = getSortedPostsMetaData();

  const postMetaData = postsMetaData.find(
    (postMetaData) => postMetaData.id === postId,
  );

  if (!postMetaData) {
    notFound();
  }

  const post: BlogPost = await getBlogPost(postId);
  const pubDate = getFormattedDate(post.date);

  return (
    <>
      <h2>{post.title}</h2>
      <p>{pubDate}</p>
      <article>
        <div
          className="prose xl:prose-lg mx-auto"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        ></div>

        <Link href={"/"} className="mt-5 block no-underline hover:underline">
          ← Back to Home
        </Link>
      </article>
    </>
  );
}

export default page;
