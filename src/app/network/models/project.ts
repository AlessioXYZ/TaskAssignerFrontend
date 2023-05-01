import {Company} from "./company";
import {ProjectManager} from "./project_manager";
import {Employee} from "./employee";

export interface Project {
  id?: number;
  name: string;
  description: string;
  company?: Company;
  project_manager: ProjectManager | number;
  employees?: Employee[] | number[];
}
