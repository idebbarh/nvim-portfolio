import { useMemo } from "react";
import contactData from "../data/Contact";
import socialMediaLinks from "../data/socials";
import ListOfThings from "./ListOfThings";
import NormalParagraph from "./NormalParagraph";
import SectionHeading from "./SectionHeading";

function ContactSection() {
  const socials = useMemo<string[]>(() => {
    let allSocials: string[] = [];
    Object.entries(socialMediaLinks).forEach(([website, link]) => {
      allSocials = [...allSocials, `[${website}](${link})`];
    });
    return allSocials;
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title="Socials" tags={1} />
      <ListOfThings things={socials} isSocial={true} />
      <NormalParagraph
        content={"Dont be shy drop me a mail i'd love to hear from you"}
      />
      <NormalParagraph
        content={`[Email](mailto:
${contactData.email})`}
        replaceString={{
          str: `mailto:
${contactData.email}`,
          context: "email",
        }}
      />
    </div>
  );
}

export default ContactSection;
