import { Link } from "react-router-dom";
import useCurrentColorScheme from "../utils/useCurrentColorScheme";

interface FileItemProps {
  name: string;
  icon: string;
}

function FileItem({ name, icon }: FileItemProps) {
  const {
    currentFileExplorerFileNameColor,
    currentFileExplorerItemsHoverColor,
  } = useCurrentColorScheme();

  return (
    <Link to={`${name}`}>
      <div
        className={`px-1 flex items-center gap-2 ${currentFileExplorerFileNameColor} cursor-pointer ${currentFileExplorerItemsHoverColor}`}
      >
        <div>
          <img src={icon} alt={`${name} icon`} className="w-[20px]" />
        </div>
        <span className="font-semibold">{name}</span>
      </div>
    </Link>
  );
}

export default FileItem;
