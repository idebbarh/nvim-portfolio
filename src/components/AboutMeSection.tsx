import NormalParagraph from "./NormalParagraph";
import SectionHeading from "./SectionHeading";
import aboutMe from "../data/aboutMe";
function AboutMeSection() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title="About Me" tags={1} />
      <NormalParagraph content={aboutMe.description} />
    </div>
  );
}

export default AboutMeSection;
