import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-fluid px-4 py-5 my-5 text-center">
      <div className="lc-block d-block mx-auto mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          width="5em"
          height="5em"
          lc-helper="svg-icon"
          fill="currentColor"
        >
          <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
        </svg>
      </div>
      <div className="lc-block">
        <div editable="rich">
          <h2 className="display-5 fw-bold">Welcome To Product API test</h2>
        </div>
      </div>
      <div className="lc-block col-lg-6 mx-auto mb-4">
        <div editable="rich">
          <p className="lead ">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
        </div>
      </div>
      <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
        {" "}
        <Link
          className="btn btn-primary btn-lg px-4 gap-3"
          to="/posts"
          role="button"
        >
          Posts
        </Link>
        <a className="btn btn-outline-secondary btn-lg px-4" role="button">
          Don't Click me, I'm a button
        </a>
      </div>
    </div>
  );
}
