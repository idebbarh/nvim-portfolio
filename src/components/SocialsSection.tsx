import { useMemo } from "react";
import socialMediaLinks from "../data/socials";
import ListOfThings from "./ListOfThings";
import SectionHeading from "./SectionHeading";

function SocialsSection() {
  /* - [Twitter](https://twitter.com/itsmehemant_02) */
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
    </div>
  );
}

export default SocialsSection;
