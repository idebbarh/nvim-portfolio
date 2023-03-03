import { useMemo, useState, useRef, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AboutMeSection from "./AboutMeSection";
import BufferContent from "./BufferContent";
import MyProjectsSection from "./MyProjectsSection";
import MySkillsSection from "./MySkillsSection";
import ContactSection from "./ContactSection";
import ColorScheme from "./ColorScheme";

function BufferContainer({ openBuffer }: { openBuffer: boolean }) {
  const [selectedLine, setSelectedLine] = useState<number | null>(null);
  const { pathname } = useLocation();
  const bufferContentRef = useRef<HTMLDivElement>(null);
  const [bufferContentHeight, setBufferContentHeight] = useState<number>(0);

  const selectLine = (line: number) => {
    setSelectedLine(line);
  };

  useEffect(() => {
    setBufferContentHeight(bufferContentRef.current?.clientHeight || 0);
    setSelectedLine(null);
  }, [pathname]);

  const lines = useMemo(() => {
    return bufferContentRef.current
      ? Math.ceil(bufferContentRef.current.clientHeight / 24)
      : 1;
  }, [bufferContentHeight]);

  const createLinesNumbers = (): JSX.Element[] => {
    return new Array(lines).fill(0).map((_, index) => {
      return (
        <span
          key={index}
          className={`text-tn-buffer-line-number-color font-semibold cursor-pointer${
            selectedLine === index + 1 ? " pr-4" : ""
          }`}
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

  if (!openBuffer) {
    return null;
  }

  return (
    <div
      id="bufferContainer"
      className="relative h-full flex-[0.8] bg-tn-buffer-background-color px-4 pt-4 pb-16"
    >
      <div className="h-full flex overflow-scroll">
        <div className="flex flex-col items-end w-12">{numberLinesItems}</div>
        <BufferContent ref={bufferContentRef}>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="about-me.md" replace={true} />}
            />
            <Route path="about-me.md" element={<AboutMeSection />} />
            <Route
              path="my-projects.md"
              element={
                <MyProjectsSection
                  setBufferContentHeight={() =>
                    setBufferContentHeight(
                      bufferContentRef.current?.clientHeight || 0
                    )
                  }
                />
              }
            />
            <Route path="my-skills.md" element={<MySkillsSection />} />
            <Route path="contact.md" element={<ContactSection />} />
            <Route path="colorscheme.lua" element={<ColorScheme />} />
          </Routes>
        </BufferContent>
      </div>

      <div className="h-16 w-full absolute left-1/2 bottom-0 translate-x-[-50%] px-2">
        <div className="bg-tn-file-explorer-bg p-2 flex justify-center">
          <p className="text-tn-buffer-line-number-color font-bold">
            portfolio/
            {pathname === "/neovim"
              ? "about me/about-me.md"
              : pathname === "/neovim/colorscheme.lua"
              ? pathname.split("/").slice(2).join("")
              : pathname
                  .split("/")
                  .slice(2)
                  .join("")
                  .split(".")[0]
                  .split("-")
                  .join(" ")
                  .concat(`/${pathname.split("/").slice(2).join("")}`)}
          </p>
        </div>
      </div>
    </div>
  );
}
export default BufferContainer;
