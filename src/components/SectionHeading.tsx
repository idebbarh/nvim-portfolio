import useCurrentColorScheme from "../utils/useCurrentColorScheme";

type SectionHeadingProps = {
  title: string | null | undefined;
  tags: number;
};

function SectionHeading({ title, tags }: SectionHeadingProps) {
  const { currentSectionHeadingColor, currentOrangeColor } =
    useCurrentColorScheme();

  if (!title) return null;
  return (
    <h1
      className={`flex items-center gap-4 ${currentSectionHeadingColor} text-3xl font-semibold`}
    >
      <span className={`${currentOrangeColor}`}>{"#".repeat(tags)}</span>
      {title}
    </h1>
  );
}

export default SectionHeading;
