import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";


@Entity("projects")
export class Projects extends AbstractEntity{
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ nullable: false })
    public projectName: string;

    @Column({ nullable: true, default: true })
    public description: string;

    @Column({ nullable: false, default: true })
    public status: string;
}