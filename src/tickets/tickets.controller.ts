import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service.js';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketService: TicketsService) {}

  @Get()
  findAll() {
    return this.ticketService.findAll();
  }
  @Get(':id')
 findOne(@Param('id', ParseIntPipe) id: number){
    return this.ticketService.findOne(id);
  }
}
