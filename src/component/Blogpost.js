import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

const Blogpost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const push = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const result = await data.json();
        setPost(result);
      } catch (error) {
        console.error(error);
      }
    };

    getPosts();
  });

  return (
    <article>
      <h1 className="single-blog-heading">{post.title}</h1>
      <p className="single-blog-body">{post.body}</p>
      <br />
      <button onClick={() => push("/")} className="home-btn">
        Go back
      </button>
    </article>
  );
};

export default Blogpost;
