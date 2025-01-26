import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith('/blog/');

  return (
    <div className="min-h-screen bg-black text-gray-100 w-full overflow-x-hidden">
      {!isBlogPost && <Navbar />}
      <main className="w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;