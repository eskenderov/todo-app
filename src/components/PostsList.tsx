import { useAppSelector } from "hooks";
import React from "react";
import { selectPosts } from "store/features/posts/postsSlice";
import PostItem from "./PostItem";

const PostsList: React.FC = () => {
  const { data } = useAppSelector(selectPosts);

  return (
    <div className="posts__list">
      {data.map((post) => (
        <PostItem
          id={post.id}
          key={post.id}
          text={post.text}
          completed={post.completed}
        />
      ))}
    </div>
  );
};

export default PostsList;
