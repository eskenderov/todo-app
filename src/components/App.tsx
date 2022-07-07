import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import PostsList from "./PostsList";

const App = () => {
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

    console.log(post);
  };
  return (
    <main>
      <Header />
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter new post"
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
          className="btn"
          type="submit"
        >
          Add Post
        </button>
      </form>
      <PostsList />
    </main>
  );
};

export { App };
