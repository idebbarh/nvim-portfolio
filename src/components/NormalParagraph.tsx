import reactStringReplace from "react-string-replace";
import useCurrentColorScheme from "../utils/useCurrentColorScheme";

type NormalParagraphProps = {
  content: string | null | undefined;
  replaceString?: { context: string; str: string | string[] };
};

function NormalParagraph({ content, replaceString }: NormalParagraphProps) {
  const {
    currentMainTextColor,
    currentOrangeColor,
    currentGreenColor,
    currentFunctionNameColor,
    currentVariableNameColor,
    currentCommentColor,
  } = useCurrentColorScheme();
  if (!content) return null;
  const replacer = (
    match: string,
    content: string | ReturnType<typeof reactStringReplace>
  ) => {
    return reactStringReplace(content, match, (m) =>
      replaceWith(m, replaceString?.context)
    );
  };
  const replacerCaller = (match: string | string[]) => {
    if (Array.isArray(match)) {
      let result: string | ReturnType<typeof replacer> = content;
      match.forEach((m) => {
        result = replacer(m, result);
      });
      return result;
    }
    return replacer(match, content);
  };
  const replaceWith = (match: string, context: string | undefined) => {
    return context === "socials" ? (
      <a
        href={match}
        target="_blank"
        rel="noreferrer"
        className={`${currentOrangeColor} hover:underline`}
        key={match}
      >
        {match}
      </a>
    ) : context === "email" ? (
      <a href={match} className={`${currentOrangeColor}`} key={match}>
        {match}
      </a>
    ) : context === "lua code" ? (
      <span
        className={`${
          match === "cmd"
            ? currentGreenColor
            : match === "colorscheme"
            ? currentFunctionNameColor
            : currentVariableNameColor
        }`}
        key={match}
      >
        {match}
      </span>
    ) : context === "lua commant" ? (
      <span key={match} className={`${currentCommentColor}`}>
        {match}
      </span>
    ) : null;
  };
  return (
    <p className={`${currentMainTextColor} text-lg font-medium`}>
      {replaceString !== undefined
        ? replacerCaller(replaceString.str)
        : content}
    </p>
  );
}
export default NormalParagraph;
