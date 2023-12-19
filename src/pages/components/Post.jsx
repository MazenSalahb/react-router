import { Link } from "react-router-dom";

export default function Post({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  return (
    <div className="card" style={{ width: "100%" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p
          className="card-text"
          style={{ maxHeight: "100px", overflow: "hidden" }}
        >
          {description}
        </p>
        <hr />
        <p>
          {rating.count} rate | {rating.rate}⭐
        </p>

        <Link to={`/react-router/posts/${id}`} className="btn btn-primary">
          Buy
        </Link>
      </div>
    </div>
  );
}
