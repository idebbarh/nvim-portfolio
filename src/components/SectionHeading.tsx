type SectionHeadingProps = {
  title: string;
};

function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h1 className="flex items-center gap-4 text-tn-section-heading-color text-3xl font-semibold">
      <span className="text-tn-orange-color">#</span>
      {title}
    </h1>
  );
}

export default SectionHeading;
