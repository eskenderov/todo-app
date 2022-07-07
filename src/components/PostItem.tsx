import { useAppDispatch } from "hooks";
import React from "react";
import { deletePost, toogleCompleted } from "store/features/posts/postsSlice";

export type PropPostItem = {
  id: number;
  text: string;
  completed: boolean;
};

const PostItem: React.FC<PropPostItem> = ({ id, text, completed }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="post__item">
      <input
        className="post__item-checkbox"
        type="checkbox"
        checked={completed}
        onChange={(e) => dispatch(toogleCompleted(Number(id)))}
      />
      <p className="post__item-text">{text}</p>
      <button
        className="post__item-btn"
        onClick={(e) => dispatch(deletePost(Number(id)))}
      >
        X
      </button>
    </div>
  );
};

export default PostItem;
