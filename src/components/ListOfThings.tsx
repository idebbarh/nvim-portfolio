import socialMediaLinks from "../data/socials";
import NormalParagraph from "./NormalParagraph";

type ListOfThingsProps = {
  isSocial?: boolean;
  things: string[] | null | undefined;
};

function ListOfThings({ things, isSocial }: ListOfThingsProps) {
  if (!things) return null;
  return (
    <ul className="flex flex-col gap-2">
      {things?.map((item, index) => (
        <li className="flex items-center gap-2" key={index}>
          <span className="text-tn-orange-color">-</span>
          <NormalParagraph
            content={item}
            replaceString={
              isSocial === true
                ? {
                    str: Object.entries(socialMediaLinks)[index][1],
                    context: "socials",
                  }
                : undefined
            }
          />
        </li>
      ))}
    </ul>
  );
}

export default ListOfThings;
