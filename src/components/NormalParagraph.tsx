type NormalParagraphProps = {
  content: string;
};
function NormalParagraph({ content }: NormalParagraphProps) {
  return (
    <p className="text-tn-main-text-color text-lg font-medium">{content}</p>
  );
}

export default NormalParagraph;
