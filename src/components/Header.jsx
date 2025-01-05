import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return(
    <div>
        <header>
          <nav className="navbar">
          <Link to='/about' className="title">Hack Buddy</Link>
          <div className='menu'>
            <span></span>
            <span></span>
            <span></span>
          </div>
            <ul>
                <button><li>
                <Link to="/hacktracker">Hackathon Tracker</Link> 
                </li></button>
                <button><li>
                <Link to="/excusegenerator">Excuse Generator</Link>
                </li></button>
                <button><li>
                <Link to="/submissionreadychecklist">Submission Ready Checklist</Link>
                </li></button>
                <button><li>
                <Link to="/whatsnext">Whats Next</Link>
                </li></button>
           </ul>
          </nav>
       </header>
    </div>
  )
}

export default Header