import projects from "../data/myProjectsData";
import { selectColorScheme } from "../redux/slices/colorSchemeSlice";
import { useAppSelector } from "../redux/store/hooks";
import useCurrentColorScheme from "../utils/useCurrentColorScheme";

type ProjectInfoType = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
};

type ListOfProjectsPropsType = {
  selectedProject: ProjectInfoType | null;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<ProjectInfoType | null>
  >;
};
function ListOfProjects({
  setSelectedProject,
  selectedProject,
}: ListOfProjectsPropsType) {
  const { currentTerminalBorderColor, currentMainTextColor } =
    useCurrentColorScheme();
  const color = useAppSelector(selectColorScheme);
  const selecteProjectHandler = (
    index: number,
    name: ProjectInfoType["title"],
    description: ProjectInfoType["description"],
    technologies: ProjectInfoType["techStack"]
  ) => {
    setSelectedProject((prev) =>
      prev?.id === index
        ? null
        : {
            id: index,
            title: name,
            description,
            techStack: technologies,
          }
    );
  };
  return (
    <ul className="grid grid-cols-auto-fill gap-3">
      {Object.entries(projects).map(
        ([_, { name, description, technologies, link }], index) => (
          <li key={index}>
            <div
              className={`relative flex flex-col justify-between border border-solid ${currentTerminalBorderColor} rounded-md p-4 min-h-[150px] cursor-pointer transition-shadow duration-300 ease hover:shadow-2xl`}
            >
              <h3
                className={`${currentMainTextColor} capitalize font-normal text-lg`}
              >
                {name}
              </h3>

              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="w-fit ml-auto"
              >
                <button
                  className={`${
                    color === "tokyonight"
                      ? "bg-tn-terminal-border-color"
                      : "bg-gv-terminal-border-color"
                  } ${currentMainTextColor} capitalize text-lg font-bold px-12 rounded-md transition-colors duration-300 ease ${
                    color === "tokyonight"
                      ? "hover:bg-tn-orange-color"
                      : "hover:bg-gv-orange-color"
                  }`}
                >
                  view
                </button>
              </a>
              <div
                className={`w-5 h-5 rounded-full border-2 border-solid ${currentTerminalBorderColor} absolute top-2 right-2 ${
                  index === selectedProject?.id
                    ? color === "tokyonight"
                      ? "bg-tn-green-color "
                      : "bg-gv-green-color "
                    : ""
                }${
                  color === "tokyonight"
                    ? "hover:bg-tn-green-color"
                    : "hover:bg-gv-green-color"
                }`}
                onClick={() =>
                  selecteProjectHandler(index, name, description, technologies)
                }
              />
            </div>
          </li>
        )
      )}
    </ul>
  );
}

export default ListOfProjects;
