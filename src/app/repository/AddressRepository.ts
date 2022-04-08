import { getConnection, Repository } from "typeorm";
import { Address } from "../entities/Addrress";

export class AddressRepository extends Repository<Address> {
    public async saveAddress(addressDetails: Address) {
        const addressRepo = getConnection().getRepository(Address);
        return addressRepo.save(addressDetails);
    }
}