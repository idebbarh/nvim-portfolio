import projects from "../data/myProjectsData";

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
            <div className="relative flex flex-col justify-between border border-solid border-terminal-border-color rounded-md p-4 min-h-[150px] cursor-pointer transition-shadow duration-300 ease hover:shadow-2xl">
              <h3 className="text-tn-main-text-color capitalize font-normal text-lg">
                {name}
              </h3>
              <button className="w-fit ml-auto bg-terminal-border-color text-tn-main-text-color capitalize text-lg font-bold px-12 rounded-md transition-colors duration-300 ease hover:bg-tn-orange-color">
                <a href={link} target="_blank" rel="noreferrer">
                  view
                </a>
              </button>
              <div
                className={`w-5 h-5 rounded-full border-2 border-solid border-terminal-border-color absolute top-2 right-2 ${
                  index === selectedProject?.id ? "bg-tn-green-color " : ""
                }hover:bg-tn-green-color`}
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
