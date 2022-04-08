import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Address } from "./Addrress";
import { Department } from "./Department";
import { Roles } from "./Roles";

@Entity("employee")
export class Employee extends AbstractEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ nullable: false })
    public name: string;

    @Column({ nullable: false, unique: true })
    public username: string;

    @Column({ nullable: true })
    public password: string;

    @Column({ nullable: false })
    public age: number;

    @Column({ nullable: false, default: true })
    public isActive: boolean;

    @ManyToOne((type) => Department, { cascade: true })
    @JoinColumn()
    public department: Department;

    @Column()
    public departmentId: string;

    @ManyToOne((type) => Roles)
    @JoinColumn()
    public role: Roles;

    @Column()
    public roleId: string;

    @OneToOne((type) => Address, (address) => address)
    @JoinColumn()
    public address: Address;

    @Column({nullable: true})
    public addressId: string;
}
