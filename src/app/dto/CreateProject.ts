import { IsString } from "class-validator";

export class CreateProjectDto{
    @IsString()
    public projectName: string;
}