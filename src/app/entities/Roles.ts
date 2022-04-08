import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Employee } from "./Employee";

@Entity("roles")
export class Roles extends AbstractEntity{
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ nullable: false })
    public role: string;

    @OneToMany((type) => Employee, (employee) => employee.role)
    @JoinColumn()
    public employee: Employee[];
}