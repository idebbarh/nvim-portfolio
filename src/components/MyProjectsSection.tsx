import { useState, useEffect } from "react";
import ListOfProjects from "./ListOfProjects";
import NormalParagraph from "./NormalParagraph";
import SectionHeading from "./SectionHeading";
import ListOfThings from "./ListOfThings";

type ProjectInfoType = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
};
type MyProjectsSectionProps = {
  setBufferContentHeight: () => void;
};
function MyProjectsSection({ setBufferContentHeight }: MyProjectsSectionProps) {
  const [selectedProject, setSelectedProject] =
    useState<null | ProjectInfoType>(null);

  useEffect(() => {
    setBufferContentHeight();
  }, [selectedProject, setBufferContentHeight]);

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title="My Projects" tags={1} />
      <NormalParagraph content="Some projects I am the most proud of." />
      <ListOfProjects
        setSelectedProject={setSelectedProject}
        selectedProject={selectedProject}
      />
      <SectionHeading title={selectedProject?.title} tags={2} />
      <NormalParagraph content={selectedProject?.description} />
      <ListOfThings things={selectedProject?.techStack} />
    </div>
  );
}

export default MyProjectsSection;
