import { useMemo, useState } from "react";
import BufferContent from "./BufferContent";
function BufferContainer() {
  const [selectedLine, setSelectedLine] = useState<number | null>(null);

  const selectLine = (line: number) => {
    setSelectedLine(line);
  };

  const lines = 40;
  const createLinesNumbers = (): JSX.Element[] => {
    return new Array(lines).fill(0).map((_, index) => {
      return (
        <span
          key={index}
          className="text-tn-buffer-line-number-color font-semibold cursor-pointer"
          onClick={() => selectLine(index + 1)}
        >
          {selectedLine === null
            ? index + 1
            : selectedLine === index + 1
            ? index + 1
            : Math.abs(index + 1 - selectedLine)}
        </span>
      );
    });
  };

  const numberLinesItems = useMemo<JSX.Element[]>(
    () => createLinesNumbers(),
    [lines, selectedLine]
  );

  return (
    <div className="flex-[0.8] flex bg-tn-buffer-background-color p-4">
      <div className="flex flex-col items-end w-12">{numberLinesItems}</div>
      <BufferContent />
    </div>
  );
}
export default BufferContainer;