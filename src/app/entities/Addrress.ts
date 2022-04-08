import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity("address")
export class Address extends AbstractEntity{
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ nullable: false })
    public street: string;

    @Column({ nullable: false })
    public city: string;

    @Column({ nullable: false })
    public state: string;
}