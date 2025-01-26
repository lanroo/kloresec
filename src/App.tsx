import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext";
import { TagProvider } from "./contexts/TagContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import TagPosts from "./pages/TagPosts";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith("/blog/");
  const isTagPage = location.pathname.startsWith("/tag/");

  return (
    <div
      className={`min-h-screen bg-black text-gray-100 w-full overflow-x-hidden ${
        isTagPage ? "pb-24" : ""
      }`}
    >
      {!isBlogPost && <Navbar />}
      <main className="w-full overflow-x-hidden">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <LoadingProvider>
        <TagProvider>
          <SearchProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/about" element={<About />} />
                <Route path="/tag/:tag" element={<TagPosts />} />
              </Routes>
            </Layout>
          </SearchProvider>
        </TagProvider>
      </LoadingProvider>
    </Router>
  );
};

export default App;
