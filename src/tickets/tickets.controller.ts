import {
  Controller,
  Get,
  ParseIntPipe,
  Param,
  Query,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { TicketsService } from './tickets.service.js';
import { Ticket } from './ticket.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { FilterQueryTicketsDto } from './dto/filter-query-tickets.dto.js';
import { UpdateTicketsDto } from './dto/update-tickets.dto.js';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketService: TicketsService) {}

  @Get()
  findAll(@Query() filters: FilterQueryTicketsDto) {
    return this.ticketService.findAll(filters.status, filters.priority);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ticketService.findOne(id);
  }

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTicketDto: UpdateTicketsDto
  ) {
    return this.ticketService.update(id, updateTicketDto);
  }
}
