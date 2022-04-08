import { plainToClass } from "class-transformer";
import { Roles } from "../entities/Roles";
import HttpException from "../exception/HttpException";
import { RolesRepository } from "../repository/RolesRepository";

export class RolesService{
    constructor(
        private rolesRepository: RolesRepository
    ) {}

    public async createRole(roleInput: any) {
        try {
            const newRole = plainToClass(Roles, {
                role: roleInput.role
            });
            const save = await this.rolesRepository.createRole(newRole);
            return save;
        } catch (err) {
            throw new HttpException(400, "Failed to create role");
        }
    }

    public async updateRoles(roleId: string, roleDetails: any) {
        const updatedRole = await this.rolesRepository.updateRoleDetails(roleId, roleDetails);
        return updatedRole;
    }

    public async getAllRoles() {
        return this.rolesRepository.getAllRoles();
    }

    public async deleteRole(employeeId: string) {
        return this.rolesRepository.softDeleteRoleById(employeeId);
    }
}