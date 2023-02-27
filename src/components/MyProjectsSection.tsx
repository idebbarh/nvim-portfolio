import ListOfProjects from "./ListOfProjects";
import NormalParagraph from "./NormalParagraph";
import SectionHeading from "./SectionHeading";

function MyProjectsSection() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title="My Projects" />
      <NormalParagraph content="some projects I am the most proud of." />
      <ListOfProjects />
    </div>
  );
}

export default MyProjectsSection;
