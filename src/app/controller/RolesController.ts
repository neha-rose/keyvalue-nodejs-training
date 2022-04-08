import { NextFunction, Response } from "express";
import { request } from "https";
import APP_CONSTANTS from "../constants";
import { RolesService } from "../services/RolesService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";

export class RolesController extends AbstractController{
    constructor(
        private rolesService: RolesService
      ) {
        super(`${APP_CONSTANTS.apiPrefix}/roles`);
        this.initializeRoutes();
      }
    
    protected initializeRoutes = (): void => {
    this.router.post(
        `${this.path}`,
        this.asyncRouteHandler(this.createRole)
    );
    this.router.put(
        `${this.path}/:roleId`,
        this.asyncRouteHandler(this.updateRole)
      );
    this.router.get(
    `${this.path}`,
    this.asyncRouteHandler(this.getAllRoles)
    );
    this.router.delete(
        `${this.path}/:roleId`,
        this.asyncRouteHandler(this.deleteRole)
        );
    }

    private createRole = async(
        request: RequestWithUser,
        response: Response,
        next: NextFunction
    ) => {
        console.log(request.body);
        const data = await this.rolesService.createRole(request.body);
        response.send(
            this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
        );
    }

    private updateRole = async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
      ) => {
          const data = await this.rolesService.updateRoles(request.params.roleId, request.body);
          response.status(201).send(
            this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
          );
      }

    private getAllRoles = async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
        ) => {
        const data = await this.rolesService.getAllRoles();
        response.send(
            this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
        );
    }
    private deleteRole = async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
      ) => {
          const data = await this.rolesService.deleteRole(request.params.roleId);
          response.status(201).send(
            this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
          );
      }

}