import { IsIn, IsOptional } from "class-validator";

export class FilterQueryTicketsDto {
    @IsOptional()
    @IsIn(['open', 'closed'])
    status?: 'open' | 'closed';
    @IsOptional()
    @IsIn(['low', 'medium', 'high'])
    priority?: 'low' | 'medium' | 'high';
}
