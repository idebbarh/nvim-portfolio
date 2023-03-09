import { setColorScheme } from "../redux/slices/colorSchemeSlice";
import { useAppDispatch } from "../redux/store/hooks";
import useCurrentColorScheme from "../utils/useCurrentColorScheme";

type ColorSchemeOptionPropsType = {
  color: string;
  title: string;
};

function ColorSchemeOption({ title, color }: ColorSchemeOptionPropsType) {
  const {
    currentCommentColor,
    currentOrangeColor,
    currentGroupHoverOrangeColor,
  } = useCurrentColorScheme();
  const dispatch = useAppDispatch();
  return (
    <div
      className={`group ${currentCommentColor} flex items-center gap-2 text-lg w-fit cursor-pointer`}
      onClick={() => dispatch(setColorScheme(title))}
    >
      <span>-- </span>
      <span
        className={`w-7 flex justify-between items-center transition duration-300 ease-in-out ${currentGroupHoverOrangeColor}`}
      >
        [
        <span className={`font-normal px-1 ${currentCommentColor}`}>
          {color === title ? "x" : ""}
        </span>
        ]
      </span>
      <p className="font-medium">{title}</p>
    </div>
  );
}

export default ColorSchemeOption;
