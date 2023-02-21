import FolderItem from "./FolderItem";
import FolderIcon from "@mui/icons-material/Folder";
import FileItem from "./FileItem";
const luaIcon: string = require("../assets/images/lua-icon.png");

function FilesExplorer() {
  return (
    <div className="h-screen w-[20%] p-4 bg-tn-file-explorer-bg flex flex-col gap-2">
      <FolderItem name="about me" Icon={FolderIcon}></FolderItem>
      <FolderItem name="my projects" Icon={FolderIcon}></FolderItem>
      <FolderItem name="my skills" Icon={FolderIcon}></FolderItem>
      <FolderItem name="socials" Icon={FolderIcon}></FolderItem>
      <FolderItem name="contact" Icon={FolderIcon}></FolderItem>
      <FileItem name="color.lua" icon={luaIcon} />
    </div>
  );
}

export default FilesExplorer;
