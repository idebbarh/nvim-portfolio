import FilesExplorer from "../components/FilesExplorer";
import BufferContainer from "../components/BufferContainer";

function Neovim() {
  return (
    <div className="flex h-screen">
      <FilesExplorer />
      <BufferContainer />
    </div>
  );
}

export default Neovim;
