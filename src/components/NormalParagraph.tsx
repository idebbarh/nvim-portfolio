import socialMediaLinks from "../data/socials";
import reactStringReplace from "react-string-replace";

type NormalParagraphProps = {
  index?: number;
  content: string | null | undefined;
};

function NormalParagraph({ content, index }: NormalParagraphProps) {
  if (!content) return null;
  return (
    <p className="text-tn-main-text-color text-lg font-medium">
      {index !== undefined
        ? reactStringReplace(
            content,
            Object.entries(socialMediaLinks)[index][1],
            (match) => (
              <a
                href={match}
                target="_blank"
                rel="noreferrer"
                className="text-tn-orange-color"
                key={match}
              >
                {match}
              </a>
            )
          )
        : content}
    </p>
  );
}
export default NormalParagraph;
