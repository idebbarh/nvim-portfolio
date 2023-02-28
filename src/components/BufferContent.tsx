import { Route, Routes } from "react-router-dom";
import AboutMeSection from "./AboutMeSection";
import MyProjectsSection from "./MyProjectsSection";
function BufferContent() {
  return (
    <div className="pl-4 w-full">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="about-me.md" element={<AboutMeSection />} />
        <Route path="my-projects.md" element={<MyProjectsSection />} />
        <Route path="my-skills.md" element={<h1>my skills</h1>} />
        <Route path="socials.md" element={<h1>socials</h1>} />
        <Route path="contact.md" element={<h1>contact</h1>} />
        <Route path="colorscheme.lua" element={<h1>colorscheme</h1>} />
      </Routes>
    </div>
  );
}

export default BufferContent;
