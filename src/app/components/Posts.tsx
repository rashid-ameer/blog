import { getSortedPostsMetaData } from "@/lib/posts";
import React from "react";
import PostListItem from "./PostListItem";

function Posts() {
  const postsMetaData = getSortedPostsMetaData();

  return (
    <section className="mx-auto max-w-2xl py-4 ">
      <h2 className="text-2xl font-bold text-gray-900">Blogs</h2>
      <ul className="mt-4 space-y-2 text-gray-800">
        {postsMetaData.map((postMetaData) => (
          <PostListItem key={postMetaData.id} postMetaData={postMetaData} />
        ))}
      </ul>
    </section>
  );
}

export default Posts;
