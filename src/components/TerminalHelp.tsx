function TerminalHelp() {
  return (
    <div className="absolute flex justify-center gap-4 w-full left-1/2 bottom-3 translate-x-[-50%]">
      {["clear : clear the terminal", "/", "nvim . : open neovim"].map(
        (item, index) => {
          return <span key={index}>{item}</span>;
        }
      )}
    </div>
  );
}

export default TerminalHelp;
