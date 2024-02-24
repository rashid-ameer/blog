import Link from "next/link";
import React from "react";

type PostListItemProps = {
  postMetaData: BlogPostMetaData;
};

function PostListItem({ postMetaData }: PostListItemProps) {
  return (
    <li>
      <Link href={`/posts/${postMetaData.id}`}>
        <h3 className="text-xl font-bold">{postMetaData.title}</h3>
      </Link>
      <p className="text-sm text-gray-600">{postMetaData.date}</p>
    </li>
  );
}

export default PostListItem;
