import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Posts from "./pages/Posts";
import { useState } from "react";
import SinglePost from "./pages/SinglePost";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme")
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/react-router"
          element={<Layout theme={theme} setTheme={setTheme} />}
        >
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<SinglePost />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
