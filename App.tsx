
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { CaseStudies } from './pages/CaseStudies';
import { About } from './pages/About';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';
import { Directory } from './pages/Directory';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/directory" element={<Directory />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
