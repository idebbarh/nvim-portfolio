import { useNavigate } from "react-router-dom";
import projects from "../data/myProjectsData";

function ListOfProjects() {
  const navigate = useNavigate();
  return (
    <ul>
      {Object.entries(projects).map(
        ([_, { name, description, technologies, link }]) => (
          <li>
            <div className="flex flex-col justify-between border border-solid border-terminal-border-color rounded-md p-4 min-h-[150px] cursor-pointer">
              <h3 className="text-tn-main-text-color capitalize font-normal text-lg">
                {name}
              </h3>
              <button className="w-fit ml-auto bg-terminal-border-color text-tn-main-text-color capitalize text-lg font-bold px-12 rounded-md">
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
