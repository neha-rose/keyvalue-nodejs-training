import { plainToClass } from "class-transformer";
import { Address } from "../entities/Addrress";
import HttpException from "../exception/HttpException";
import { AddressRepository } from "../repository/AddressRepository";

export class AddressService {
    constructor(
        private addressRepository: AddressRepository
    ) {}

    public async addAddress(addressDetails: any) {
        try {
            const newAddress = plainToClass(Address, {
                street: addressDetails.street,
                city: addressDetails.city,
                state: addressDetails.state
            });
            const save = await this.addressRepository.saveAddress(newAddress);
            return save;
        } catch (err) {
            throw new HttpException(400, "Failed to add address");
        }
    }
}