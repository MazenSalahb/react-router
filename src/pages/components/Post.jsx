export default function Post({
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  return (
    <div
      className="w-100 rounded shadow d-flex flex-column align-items-center p-2 my-2"
      style={{ height: "25rem", width: "23%" }}
      id="post"
    >
      <img className="mb-2" src={image} alt="shirt" height={"40%"} />
      <h2 className="fs-5 text-truncate w-100">{title}</h2>
      <p
        style={{
          maxHeight: "70px",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {description}
      </p>
      <span>{price}$</span>
      <span>Category: {category}</span>
      <span>
        rating: {rating.rate}⭐ | total {rating.count} rates
      </span>
    </div>
  );
}
