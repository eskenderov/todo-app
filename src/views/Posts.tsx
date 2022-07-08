import PostsList from "components/PostsList";
import React from "react";
import { useAppDispatch } from "hooks";
import { useState, useEffect, useRef } from "react";
import { setPost } from "store/features/posts/postsSlice";
const Posts = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const post = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    dispatch(setPost(post));

    setText("");
  };
  return (
    <div className='posts'>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          value={text}
          onChange={handleChange}
          placeholder='Enter new post'
          style={{ fontSize: 22, padding: 10, width: 500 }}
          ref={inputRef}
        />
        <button
          style={{
            fontSize: 22,
            padding: 12,
            cursor: "pointer",
            background: "blue",
            border: 0,
            color: "white",
            fontWeight: 600,
          }}
          className='btn'
          type='submit'
        >
          Add Post
        </button>
      </form>
      <PostsList />
    </div>
  );
};

export default Posts;
