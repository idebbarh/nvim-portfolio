import { useState } from "react";
import ColorSchemeOption from "./ColorSchemeOption";
import NormalParagraph from "./NormalParagraph";

function ColorScheme() {
  const [color, setColor] = useState("tokyonight");
  return (
    <div className="flex flex-col gap-4">
      <NormalParagraph
        content={`vim.cmd.colorscheme("${color}")`}
        replaceString={{
          str: ["cmd", "colorscheme", `"${color}"`],
          context: "lua code",
        }}
      />
      <div>
        <NormalParagraph
          content="-- Select the colorscheme"
          replaceString={{
            str: "-- Select the colorscheme",
            context: "lua commant",
          }}
        />
        <ColorSchemeOption
          title="tokyonight"
          color={color}
          setColor={setColor}
        />
        <ColorSchemeOption title="gruvbox" color={color} setColor={setColor} />
      </div>
    </div>
  );
}
export default ColorScheme;
