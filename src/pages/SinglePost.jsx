import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => {
        alert("Error fetching the post", err);
        console.log("error");
      });
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      {post && (
        <div className="card w-25 overflow-hidden">
          <img src={post.image} alt={post.title} style={{ height: "300px" }} />
          <div className="card-header">{post.category}</div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.description}</p>
            <hr />
            <p>
              {post.rating.count} rate | {post.rating.rate}⭐
            </p>
            <button className="btn btn-primary">Buy For {post.price}$</button>
          </div>
        </div>
      )}
    </div>
  );
}
