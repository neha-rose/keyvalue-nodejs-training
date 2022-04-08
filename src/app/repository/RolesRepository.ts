import { Repository, getConnection } from "typeorm";
import { Roles } from "../entities/Roles";

export class RolesRepository extends Repository<Roles> {
    public async createRole(roleInput: Roles){
        const rolesConnection = getConnection().getRepository(Roles);
        return rolesConnection.save(roleInput);
    }

    public async updateRoleDetails(roleId: string, roleDetails: any) {
        const roleRepo = getConnection().getRepository(Roles);
        const updateRoleDetails = await roleRepo.update({ id: roleId, deletedAt: null }, {
            role: roleDetails.role ? roleDetails.role : undefined
        });
        return updateRoleDetails;
    }

    public async getAllRoles() {
        const roleRepo = getConnection().getRepository(Roles);
        return roleRepo.findAndCount();
    }

    public async softDeleteRoleById(id: string) {
        const roleRepo = getConnection().getRepository(Roles);
        return roleRepo.softDelete({
            id
        });
    }
}