import './App.css';
import Sidebar from './componets/Sidebar';
import VerticalNav from './componets/VerticalNav';
import ContentPanel from './componets/ContentPanel';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState("skills");

  return (
    <div className="app-wrapper">
      <Sidebar />
      <VerticalNav 
             className="vertical-nav"
             setActiveSection={setActiveSection} 
             activeSection={activeSection} />
      <ContentPanel activeSection={activeSection} />
    </div>
  );
}
export default App;