import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <header>
        <nav className="navbar">
          <Link to="/about" className="title">Hack Buddy</Link>
          
          <button 
            className="menu-toggle" 
            onClick={() => setIsMobile(!isMobile)}
          >
            ☰
          </button>

          {/* Navigation Buttons */}
          <ul className={`nav-buttons ${isMobile ? "active" : ""}`}>
            <li>
              <Link to="/hacktracker">Hackathon Tracker</Link>
            </li>
            <li>
              <Link to="/excusegenerator">Excuse Generator</Link>
            </li>
            <li>
              <Link to="/submissionreadychecklist">Submission Ready Checklist</Link>
            </li>
            <li>
              <Link to="/whatsnext">Whats Next</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
