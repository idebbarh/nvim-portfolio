import { useMemo } from "react";
import ListOfThings from "./ListOfThings";
import SectionHeading from "./SectionHeading";
import mySkillsData from "../data/skillsData";

function MySkillsSection() {
  const listOfSkills = useMemo<string[]>(() => {
    let allSkills: string[] = [];
    Object.entries(mySkillsData).forEach(([, skills]) => {
      allSkills = [...allSkills, ...skills];
    });
    return allSkills;
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title="Experience" tags={1} />
      <ListOfThings things={listOfSkills} />
    </div>
  );
}

export default MySkillsSection;
