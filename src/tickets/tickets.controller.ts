import { Controller, Get, ParseIntPipe, Param, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service.js';
import { Ticket } from './ticket.interface.js';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketService: TicketsService) {}

  @Get()
  findAll(
    @Query('status') status?: Ticket['status'],
    @Query('priority') priority?: Ticket['priority'],
  ) {
    
      return this.ticketService.findAll(status, priority);
    }
  
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ticketService.findOne(id);
  }
}
