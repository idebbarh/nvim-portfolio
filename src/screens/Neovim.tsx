import FilesExplorer from "../components/FilesExplorer";
import BufferContainer from "../components/BufferContainer";

function Neovim() {
  return (
    <div className="flex">
      <FilesExplorer />
      <BufferContainer />
    </div>
  );
}

export default Neovim;
