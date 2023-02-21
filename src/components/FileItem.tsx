interface FileItemProps {
  name: string;
  icon: string;
}

function FileItem({ name, icon }: FileItemProps) {
  return (
    <div className="px-1 flex items-center gap-2 text-tn-file-explorer-file-name-color cursor-pointer transition-colors duration-300 ease-in-out hover:bg-tn-file-explorer-items-hover-color">
      <div>
        <img src={icon} alt={`${name} icon`} className="w-[20px]" />
      </div>
      <span className="font-semibold">{name}</span>
    </div>
  );
}

export default FileItem;
