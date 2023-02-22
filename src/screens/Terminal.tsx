import { useRef, useState, useMemo } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const [prevInputValues, setPrevInputValues] = useState<string[]>([]);
  const [typingLine, setTypingLine] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;
    setTypingLine((prev) => prev + 1);
    setPrevInputValues((prev) => [...prev, inputValue]);
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const generateLines = (): JSX.Element[] => {
    return new Array(typingLine).fill(0).map((_, i) => {
      return i + 1 === typingLine ? (
        <div className="flex gap-2">
          <div className="text-terminal-border-color">
            <KeyboardArrowRightIcon color="inherit" />
          </div>
          <input
            autoFocus
            key={i}
            type="text"
            value={inputValue}
            className="border-none outline-none caret-transparent bg-transparent block w-full"
            ref={inputRef}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
      ) : (
        <div className="flex gap-2">
          <div className="text-terminal-border-color">
            <KeyboardArrowRightIcon color="inherit" />
          </div>
          <div key={i}>{prevInputValues[i]}</div>
        </div>
      );
    });
  };
  const lines = useMemo(() => generateLines(), [typingLine, inputValue]);

  return (
    <div
      className="bg-terminal-bg h-screen w-screen text-terminal-text-color p-12 text-lg font-normal"
      onClick={() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      <div className="border-2 h-full border-solid border-terminal-border-color rounded-lg p-8 shadow-2xl">
        <form onSubmit={submitHandler}>{lines}</form>
      </div>
    </div>
  );
}

export default Terminal;
