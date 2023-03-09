import FolderItem from "./FolderItem";
import FolderIcon from "@mui/icons-material/Folder";
import FileItem from "./FileItem";
import useCurrentColorScheme from "../utils/useCurrentColorScheme";
import { useAppSelector } from "../redux/store/hooks";
import { selectIsFileExplorerOpen } from "../redux/slices/fileExplorerSlice";

const luaIcon: string = require("../assets/images/lua-icon.png");
const markdownIcon: string =
  "https://d33wubrfki0l68.cloudfront.net/f1f475a6fda1c2c4be4cac04033db5c3293032b4/513a4/assets/images/markdown-mark-white.svg";

function FilesExplorer({ openBuffer }: { openBuffer: boolean }) {
  const { currentFileExplorerBg } = useCurrentColorScheme();
  const isFileExplorerOpen = useAppSelector(selectIsFileExplorerOpen);
  return (
    <div
      className={`h-full p-4 ${currentFileExplorerBg} flex flex-col gap-2 ${
        openBuffer ? "w-[350px]" : "w-full"
      } ${
        isFileExplorerOpen
          ? "relative translate-x-0"
          : "absolute -translate-x-full"
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
