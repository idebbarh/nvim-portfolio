import FolderItem from "./FolderItem";
import FolderIcon from "@mui/icons-material/Folder";
import FileItem from "./FileItem";
import useCurrentColorScheme from "../utils/useCurrentColorScheme";
import useFileExplorer from "../utils/useFileExplorer";
import useBuffer from "../utils/useBuffer";

const luaIcon: string = require("../assets/images/lua-icon.png");
const markdownIcon: string =
  "https://d33wubrfki0l68.cloudfront.net/f1f475a6fda1c2c4be4cac04033db5c3293032b4/513a4/assets/images/markdown-mark-white.svg";

function FilesExplorer() {
  const { currentFileExplorerBg } = useCurrentColorScheme();
  const isFileExplorerOpen = useFileExplorer();
  const isBufferOpen = useBuffer();
  return (
    <div
      className={`z-50 h-full p-4 left-0 top-0 ${currentFileExplorerBg} flex-col gap-2 ${
        isFileExplorerOpen
          ? `${isBufferOpen ? "w-[350px]" : "w-full"} flex`
          : "hidden"
      }`}
    >
      <FolderItem name="about me" Icon={FolderIcon}>
        <FileItem name="about-me.md" icon={markdownIcon} />
      </FolderItem>
      <FolderItem name="my projects" Icon={FolderIcon}>
        <FileItem name="my-projects.md" icon={markdownIcon} />
      </FolderItem>
      <FolderItem name="my skills" Icon={FolderIcon}>
        <FileItem name="my-skills.md" icon={markdownIcon} />
      </FolderItem>
      <FolderItem name="contact" Icon={FolderIcon}>
        <FileItem name="contact.md" icon={markdownIcon} />
      </FolderItem>
      <FileItem name="colorscheme.lua" icon={luaIcon} />
    </div>
  );
}

export default FilesExplorer;
