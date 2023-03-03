import reactStringReplace from "react-string-replace";

type NormalParagraphProps = {
  content: string | null | undefined;
  replaceString?: { context: string; str: string | string[] };
};

function NormalParagraph({ content, replaceString }: NormalParagraphProps) {
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
        className="text-tn-orange-color"
        key={match}
      >
        {match}
      </a>
    ) : context === "email" ? (
      <a href={match} className="text-tn-orange-color" key={match}>
        {match}
      </a>
    ) : context === "lua code" ? (
      <span
        className={`${
          match === "cmd"
            ? "text-tn-green-color"
            : match === "colorscheme"
            ? "text-tn-function-name-color"
            : "text-tn-variable-name-color"
        }`}
        key={match}
      >
        {match}
      </span>
    ) : null;
  };
  return (
    <p className="text-tn-main-text-color text-lg font-medium">
      {replaceString !== undefined
        ? replacerCaller(replaceString.str)
        : content}
    </p>
  );
}
export default NormalParagraph;
