import NormalParagraph from "./NormalParagraph";

function ColorScheme() {
  const colorScheme = "tokyonight";
  return (
    <div className="flex flex-col gap-4">
      <NormalParagraph
        content={`vim.cmd.colorscheme("${colorScheme}")`}
        replaceString={{
          str: ["cmd", "colorscheme", `"${colorScheme}"`],
          context: "lua code",
        }}
      />
    </div>
  );
}
export default ColorScheme;
