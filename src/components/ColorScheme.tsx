import { useState } from "react";
import { selectColorScheme } from "../redux/slices/colorSchemeSlice";
import { useAppSelector } from "../redux/store/hooks";
import ColorSchemeOption from "./ColorSchemeOption";
import NormalParagraph from "./NormalParagraph";

function ColorScheme() {
  const color = useAppSelector(selectColorScheme);
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
        <ColorSchemeOption title="tokyonight" color={color} />
        <ColorSchemeOption title="gruvbox" color={color} />
      </div>
    </div>
  );
}
export default ColorScheme;
