import { Helmet, HelmetProvider } from "react-helmet-async";
import { Outlet, Link } from "react-router-dom";

export default function Layout({ theme, setTheme }) {
  const changeTheme = () => {
    localStorage.setItem("theme", theme == "light" ? "dark" : "light");
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <HelmetProvider>
      <Helmet>
        <html data-bs-theme={theme} />
      </Helmet>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        // data-bs-theme={theme}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/react-router">
            Mazengo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/react-router"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/react-router/posts">
                  Posts
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/react-router/contact"}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={changeTheme}>
                      {theme == "light" ? "dark 🌒" : "light ☀"} mode
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </HelmetProvider>
  );
}
