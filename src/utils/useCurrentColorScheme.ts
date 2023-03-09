import { selectColorScheme } from "../redux/slices/colorSchemeSlice";
import { useAppSelector } from "../redux/store/hooks";

type ClassesType = {
  [key: string]: {
    [key: string]: string;
  };
};
const classes: ClassesType = {
  tokyonight: {
    fileExplorerBg: "bg-tn-file-explorer-bg",
    fileExplorerFolderNameColor: "text-tn-file-explorer-folder-name-color",
    fileExplorerFileNameColor: "text-tn-file-explorer-file-name-color",
    fileExplorerFolderAngleIconColor:
      "text-tn-file-explorer-folder-angle-icon-color",
    fileExplorerItemsHoverColor: "hover:bg-tn-file-explorer-items-hover-color",
    bufferBg: "bg-tn-buffer-background-color",
    bufferLineNumberColor: "text-tn-buffer-line-number-color",
    sectionHeadingColor: "text-tn-section-heading-color",
    orangeColor: "text-tn-orange-color",
    currentGroupHoverOrangeColor: "group-hover:text-tn-orange-color",
    currentHoverOrangeColor: "hover:text-tn-orange-color",
    greenColor: "text-tn-green-color",
    mainTextColor: "text-tn-main-text-color",
    functionNameColor: "text-tn-function-name-color",
    variableNameColor: "text-tn-variable-name-color",
    commentColor: "text-tn-commant-color",
    terminalBg: "bg-tn-terminal-bg",
    terminalTextColor: "text-tn-terminal-text-color",
    terminalBorderColor: "border-tn-terminal-border-color",
  },
  gruvbox: {
    fileExplorerBg: "bg-gv-file-explorer-bg",
    fileExplorerFolderNameColor: "text-gv-file-explorer-folder-name-color",
    fileExplorerFileNameColor: "text-gv-file-explorer-file-name-color",
    fileExplorerFolderAngleIconColor:
      "text-gv-file-explorer-folder-angle-icon-color",
    fileExplorerItemsHoverColor: "hover:bg-gv-file-explorer-items-hover-color",
    bufferBg: "bg-gv-buffer-background-color",
    bufferLineNumberColor: "text-gv-buffer-line-number-color",
    sectionHeadingColor: "text-gv-section-heading-color",
    orangeColor: "text-gv-orange-color",
    currentGroupHoverOrangeColor: "group-hover:text-gv-orange-color",
    currentHoverOrangeColor: "hover:text-gv-orange-color",
    greenColor: "text-gv-green-color",
    mainTextColor: "text-gv-main-text-color",
    functionNameColor: "text-gv-function-name-color",
    variableNameColor: "text-gv-variable-name-color",
    commentColor: "text-gv-commant-color",
    terminalBg: "bg-gv-terminal-bg",
    terminalTextColor: "text-gv-terminal-text-color",
    terminalBorderColor: "border-gv-terminal-border-color",
  },
};
type CurrentColorSchemeType = {
  currentFileExplorerBg: string;
  currentFileExplorerFolderNameColor: string;
  currentFileExplorerFileNameColor: string;
  currentFileExplorerFolderAngleIconColor: string;
  currentFileExplorerItemsHoverColor: string;
  currentBufferBg: string;
  currentBufferLineNumberColor: string;
  currentSectionHeadingColor: string;
  currentOrangeColor: string;
  currentGroupHoverOrangeColor: string;
  currentHoverOrangeColor: string;
  currentGreenColor: string;
  currentMainTextColor: string;
  currentFunctionNameColor: string;
  currentVariableNameColor: string;
  currentCommentColor: string;
  currentTerminalBg: string;
  currentTerminalTextColor: string;
  currentTerminalBorderColor: string;
};
function useCurrentColorScheme(): CurrentColorSchemeType {
  const color = useAppSelector(selectColorScheme);
  return {
    currentFileExplorerBg: classes[color].fileExplorerBg,
    currentFileExplorerFolderNameColor:
      classes[color].fileExplorerFolderNameColor,
    currentFileExplorerFileNameColor: classes[color].fileExplorerFileNameColor,
    currentFileExplorerFolderAngleIconColor:
      classes[color].fileExplorerFolderAngleIconColor,
    currentFileExplorerItemsHoverColor:
      classes[color].fileExplorerItemsHoverColor,
    currentBufferBg: classes[color].bufferBg,
    currentBufferLineNumberColor: classes[color].bufferLineNumberColor,
    currentSectionHeadingColor: classes[color].sectionHeadingColor,
    currentOrangeColor: classes[color].orangeColor,
    currentGroupHoverOrangeColor: classes[color].currentGroupHoverOrangeColor,
    currentHoverOrangeColor: classes[color].currentHoverOrangeColor,
    currentGreenColor: classes[color].greenColor,
    currentMainTextColor: classes[color].mainTextColor,
    currentFunctionNameColor: classes[color].functionNameColor,
    currentVariableNameColor: classes[color].variableNameColor,
    currentCommentColor: classes[color].commentColor,
    currentTerminalBg: classes[color].terminalBg,
    currentTerminalTextColor: classes[color].terminalTextColor,
    currentTerminalBorderColor: classes[color].terminalBorderColor,
  };
}
export default useCurrentColorScheme;
