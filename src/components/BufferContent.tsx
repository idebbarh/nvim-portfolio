import { Route, Routes } from "react-router-dom";

function BufferContent() {
  return (
    <div className="pl-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="about-me.md" element={<h1>About Me</h1>} />
        <Route path="my-projects.md" element={<h1>my projects</h1>} />
        <Route path="my-skills.md" element={<h1>my skills</h1>} />
        <Route path="socials.md" element={<h1>socials</h1>} />
        <Route path="contact.md" element={<h1>contact</h1>} />
        <Route path="colorscheme.lua" element={<h1>colorscheme</h1>} />
      </Routes>
    </div>
  );
}

export default BufferContent;
