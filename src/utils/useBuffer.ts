import { useLocation } from "react-router-dom";

function useBuffer() {
  const { pathname } = useLocation();
  return pathname !== "/neovim";
}

export default useBuffer;
