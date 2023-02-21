import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useState } from "react";

interface FolderItemPropsType {
  name: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  children?: React.ReactNode | React.ReactNode[] | undefined;
}

function FolderItem({ name, Icon, children }: FolderItemPropsType) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };
  console.log(children);
  return (
    <div
      className="flex flex-col gap-2 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-tn-file-explorer-items-hover-color"
      onClick={toggleFolder}
    >
      <div className="flex items-center gap-2 text-tn-file-explorer-folder-name-color">
        <div className="text-tn-file-explorer-folder-angle-icon-color flex items-center text-2xl">
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
