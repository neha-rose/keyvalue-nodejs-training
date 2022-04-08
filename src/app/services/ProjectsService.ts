import { plainToClass } from "class-transformer";
import { Projects } from "../entities/Projects";
import {ProjectsRepository} from "../repository/ProjectsRepository";

export class ProjectsService {
    constructor(
        private projectsRepository: ProjectsRepository
    ) {}

    public async CreateProject(projectInput: any){
        const projectData = plainToClass(Projects, {
            projectName: projectInput.projectName,
            description: "Keyvalue 123",
            status: "true"
        });
        const savedDetails = await this.projectsRepository.createProject(projectData);
        return savedDetails;
    }
}