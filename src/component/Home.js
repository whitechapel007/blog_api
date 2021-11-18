import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await result.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);

  const style = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="blog-body">
          <Link to={`/post/${post.id}`} style={style}>
            <h1 className="blog-heading">{post.title}</h1>

            <p className="blog-text">{post.body}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Home;
