import { forwardRef } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutMeSection from "./AboutMeSection";
import MyProjectsSection from "./MyProjectsSection";
import MySkillsSection from "./MySkillsSection";
import SocialsSection from "./SocialsSection";
const BufferContent = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="pl-4 w-full" ref={ref}>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="about-me.md" replace={true} />}
        />
        <Route path="about-me.md" element={<AboutMeSection />} />
        <Route path="my-projects.md" element={<MyProjectsSection />} />
        <Route path="my-skills.md" element={<MySkillsSection />} />
        <Route path="socials.md" element={<SocialsSection />} />
        <Route path="contact.md" element={<h1>contact</h1>} />
        <Route path="colorscheme.lua" element={<h1>colorscheme</h1>} />
      </Routes>
    </div>
  );
});
export default BufferContent;
