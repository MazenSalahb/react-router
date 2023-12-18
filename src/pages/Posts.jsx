import { useEffect, useState } from "react";
import Post from "./components/Post";
import axios from "axios";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setIsLoading(false);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container d-flex flex-column gap-3">
      <h1>Welcome To Posts Page</h1>
      {/* Post */}
      <div className="row gx-3 gy-4 justify-content-between w-100">
        {posts.length === 0 && !isLoading && "No Posts"}
        {isLoading && (
          <div className="w-100 text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {posts.map((post) => (
          <div className="col-md-3 " key={post.id}>
            <Post {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}
