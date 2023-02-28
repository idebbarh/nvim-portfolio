import NormalParagraph from "./NormalParagraph";

type ListOfThingsProps = {
  things: string[] | null | undefined;
};

function ListOfThings({ things }: ListOfThingsProps) {
  if (!things) return null;
  return (
    <ul className="flex flex-col gap-2">
      {things?.map((item) => (
        <li className="flex items-center gap-2">
          <span className="text-tn-orange-color">-</span>
          <NormalParagraph content={item} />
        </li>
      ))}
    </ul>
  );
}

export default ListOfThings;
