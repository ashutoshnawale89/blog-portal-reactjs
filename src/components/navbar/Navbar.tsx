import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {

  const [query, setQuery] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log("Searching for:", query);
    setQuery("");
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2 style={{
          fontSize: "2rem",
          fontWeight: "800",
          background: "linear-gradient(90deg, #4facfe, #00f2fe)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          ByteBlog
        </h2>

      </div>

      <form className="navbar-search big-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for jobs, companies, locations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul className="navbar-menu">
        <li>
          <Link to="/home">HOME</Link>
        </li>

        <li>
          <Link to="/login">LOGIN</Link>
        </li>

        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
