type SectionHeadingProps = {
  title: string | null | undefined;
  tags: number;
};

function SectionHeading({ title, tags }: SectionHeadingProps) {
  if (!title) return null;
  return (
    <h1 className="flex items-center gap-4 text-tn-section-heading-color text-3xl font-semibold">
      <span className="text-tn-orange-color">{"#".repeat(tags)}</span>
      {title}
    </h1>
  );
}

export default SectionHeading;
