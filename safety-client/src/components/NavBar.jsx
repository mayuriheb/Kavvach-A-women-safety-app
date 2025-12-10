import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-title">Kavvach</div>

      <div className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/helplines" className="nav-btn">Helplines</Link>
        <Link to="/locations" className="nav-btn">Safe Locations</Link>
        <Link to="/chat" className="nav-btn">Chat Support</Link>
      </div>
    </nav>
  );
}
