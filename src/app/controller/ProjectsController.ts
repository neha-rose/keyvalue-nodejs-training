import { NextFunction, Response } from "express";
import { request } from "http";
import APP_CONSTANTS from "../constants";
import { CreateEmployeeDto } from "../dto/CreateEmployee";
import { CreateProjectDto } from "../dto/CreateProject";
import validationMiddleware from "../middleware/validationMiddleware";
import { ProjectsService } from "../services/ProjectsService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";

class ProjectsController extends AbstractController {

    constructor(
      private projectService: ProjectsService
    ) {
      super(`${APP_CONSTANTS.apiPrefix}/projects`);
      this.initializeRoutes();
    }

    protected initializeRoutes = (): void => {
      this.router.post(
        `${this.path}`,
        validationMiddleware(CreateProjectDto, APP_CONSTANTS.body),
        this.createProject
      );
    }

    private createProject = async (
      request: RequestWithUser,
      response: Response,
      next: NextFunction
    ) => {
      try{
        const data = await this.projectService.CreateProject(request.body);
        response.send(
          this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
        );
      }
      catch(err){
        next(err);
      }
        
      }

  }

export default ProjectsController;