
import Home from './Components/Home';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  

  return (
    <Router>
       <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
