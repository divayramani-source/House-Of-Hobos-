import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";

// ✅ CREATE THESE FILES (or placeholders)
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import Franchise from "./pages/Franchise";
import Community from "./pages/Community";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Default */}
          <Route index element={<Navigate to="/home" />} />

          {/* Main Pages */}
          <Route path="home" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="story" element={<Story />} />
          <Route path="contact" element={<Contact />} />
          <Route path="franchise" element={<Franchise />} />
          <Route path="community" element={<Community />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;