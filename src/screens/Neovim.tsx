import FilesExplorer from "../components/FilesExplorer";
import BufferContainer from "../components/BufferContainer";
import { useLocation } from "react-router-dom";

function Neovim() {
  const { pathname } = useLocation();
  const openBuffer = pathname !== "/neovim";
  return (
    <div className="flex h-screen">
      <FilesExplorer openBuffer={openBuffer} />
      <BufferContainer openBuffer={openBuffer} />
    </div>
  );
}

export default Neovim;
