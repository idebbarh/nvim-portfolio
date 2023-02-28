import { useNavigate } from "react-router-dom";
import projects from "../data/myProjectsData";

type ProjectInfoType = {
  title: string;
  description: string;
  techStack: string[];
};

type ListOfProjectsPropsType = {
  setSelectedProject: React.Dispatch<
    React.SetStateAction<ProjectInfoType | null>
  >;
};
function ListOfProjects({ setSelectedProject }: ListOfProjectsPropsType) {
  const handleHoverOnProject = (projectInfo: ProjectInfoType) => {
    console.log(projectInfo);
    setSelectedProject(projectInfo);
  };
  return (
    <ul className="grid grid-cols-auto-fill gap-3">
      {Object.entries(projects).map(
        ([_, { name, description, technologies, link }], index) => (
          <li key={index}>
            <div
              className="flex flex-col justify-between border border-solid border-terminal-border-color rounded-md p-4 min-h-[150px] cursor-pointer transition-shadow duration-300 ease hover:shadow-2xl"
              onMouseEnter={() =>
                handleHoverOnProject({
                  title: name,
                  description,
                  techStack: technologies,
                })
              }
            >
              <h3 className="text-tn-main-text-color capitalize font-normal text-lg">
                {name}
              </h3>
              <button className="w-fit ml-auto bg-terminal-border-color text-tn-main-text-color capitalize text-lg font-bold px-12 rounded-md transition-colors duration-300 ease hover:bg-tn-orange-color">
                view
              </button>
            </div>
          </li>
        )
      )}
    </ul>
  );
}

export default ListOfProjects;
