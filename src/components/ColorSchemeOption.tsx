import { SetStateAction } from "react";

type ColorSchemeOptionPropsType = {
  color: string;
  title: string;
  setColor: React.Dispatch<SetStateAction<string>>;
};

function ColorSchemeOption({
  title,
  color,
  setColor,
}: ColorSchemeOptionPropsType) {
  return (
    <div
      className="group text-tn-commant-color flex items-center gap-2 text-lg w-fit cursor-pointer"
      onClick={() => setColor(title)}
    >
      <span>-- </span>
      <span className="w-7 flex justify-between items-center transition duration-300 ease-in-out group-hover:text-tn-orange-color">
        [
        <span className="font-normal px-1 !text-tn-commant-color">
          {color === title ? "x" : ""}
        </span>
        ]
      </span>
      <p className="font-medium">{title}</p>
    </div>
  );
}

export default ColorSchemeOption;
