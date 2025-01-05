import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About"
import HackTracker from './components/HackTracker'
import ExcuseGenerator from './components/ExcuseGenerator'
import SubmissionReadyChecklist from './components/SubmissionReadyChecklist'
import WhatsNext from './components/WhatsNext'
import Footer from './components/Footer'
 
function App() {
  return (
    <>
    <div className="App">
    <Header />
    <Routes>
      {/* Default route to redirect to Hackathon Tracker */}
        <Route path="/" element={<Navigate to="/hacktracker" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/hacktracker" element={<HackTracker />} />
        <Route path="/excusegenerator" element={<ExcuseGenerator />} />
        <Route path="/submissionreadychecklist" element={<SubmissionReadyChecklist />} />
        <Route path="/whatsnext" element={<WhatsNext />} />
      </Routes>
    <Footer />
    </div> 
    </>
  );
}

export default App;

// i
// hi