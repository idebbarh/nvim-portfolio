import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useState } from "react";
import useCurrentColorScheme from "../utils/useCurrentColorScheme";

interface FolderItemPropsType {
  name: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  children?: React.ReactNode | React.ReactNode[] | undefined;
}

function FolderItem({ name, Icon, children }: FolderItemPropsType) {
  const {
    currentFileExplorerFolderNameColor,
    currentFileExplorerFolderAngleIconColor,
    currentFileExplorerItemsHoverColor,
  } = useCurrentColorScheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <div
        className={`flex items-center gap-2 ${currentFileExplorerFolderNameColor} ${currentFileExplorerItemsHoverColor}`}
        onClick={toggleFolder}
      >
        <div
          className={`${currentFileExplorerFolderAngleIconColor} flex items-center text-2xl`}
        >
          {isOpen ? (
            <KeyboardArrowDownIcon color="inherit" fontSize="inherit" />
          ) : (
            <KeyboardArrowRightIcon color="inherit" fontSize="inherit" />
          )}
        </div>
        <div className="flex items-center">
          <Icon fontSize="inherit" />
        </div>
        <span className="font-semibold">{name}</span>
      </div>
      {children && isOpen && (
        <div className="ml-8 flex flex-col gap-2">{children}</div>
      )}
    </div>
  );
}

export default FolderItem;
