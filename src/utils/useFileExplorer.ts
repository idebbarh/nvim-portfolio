import { useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";
import { selectIsFileExplorerOpen } from "../redux/slices/fileExplorerSlice";
import { useAppSelector } from "../redux/store/hooks";

function useFileExplorer() {
  const match = useMediaQuery("(min-width:1024px)");
  const isFileExplorerOpen = useAppSelector(selectIsFileExplorerOpen);
  const { pathname } = useLocation();
  if (match) {
    return isFileExplorerOpen;
  } else {
    return pathname === "/neovim";
  }
}

export default useFileExplorer;
