import { IsIn, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateTicketsDto {
    @IsOptional()
    @IsNotEmpty()
    subject?: string;
    @IsOptional()
    @IsNotEmpty()
    description?: string;
    @IsOptional()
    @IsIn(['low', 'medium', 'high'])
    priority?: 'low' | 'medium' | 'high';
}
