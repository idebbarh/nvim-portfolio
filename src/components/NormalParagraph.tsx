type NormalParagraphProps = {
  content: string | null | undefined;
};
function NormalParagraph({ content }: NormalParagraphProps) {
  if (!content) return null;
  return (
    <p className="text-tn-main-text-color text-lg font-medium">{content}</p>
  );
}

export default NormalParagraph;
