import { BadRequestException, Injectable,NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { UpdateTicketsDto } from './dto/update-tickets.dto.js';
@Injectable()
export class TicketsService {
  private readonly tickets: Ticket[]=[
    {
      id: 1,
      subject: 'First Ticket',
      description: 'This is the first ticket',
      priority: 'low',
      status: 'open',
      createdAt: '2021-01-01'
    },
    {
      id: 2,
      subject: 'Second Ticket',
      description: 'This is the second ticket',
      priority: 'medium',
      status: 'closed',
      createdAt: '2021-01-02'
    },
    {
      id: 3,
      subject: 'Third Ticket',
      description: 'This is the third ticket',
      priority: 'high',
      status: 'open',
      createdAt: '2021-01-03'
    }
  ]
  findAll(status?: Ticket['status'], priority?: Ticket['priority']) {
   
    let tickets= this.tickets;
    if(status){
      tickets= tickets.filter(ticket => ticket.status === status);
    }
    if(priority){
      tickets= tickets.filter(ticket => ticket.priority === priority);
    }
    return tickets;
  }
  findOne(id:number){
    const ticket= this.tickets.find(ticket => ticket.id === id);
    if(!ticket){  
      throw new NotFoundException(`Ticket ${id} not found`);
    }
    return ticket;
  }
 private nextTicketId=4
create(createTicketDto:CreateTicketDto){
  const ticket:Ticket={
    id: this.nextTicketId++,
    subject: createTicketDto.subject,
    description: createTicketDto.description,
    priority: createTicketDto.priority,
    status: 'open',
    createdAt: new Date().toISOString(),
  }
  this.tickets.push(ticket);
  return ticket;
}

update(id:number, updateTicketDto:UpdateTicketsDto){
  const ticket= this.findOne(id);
  if(ticket.status === 'closed'){
    throw new BadRequestException(`Ticket ${id} is closed and cannot be updated`);
  }
  Object.assign(ticket, updateTicketDto);
  return ticket;
}

ticketClosed(id:number){
  const ticket= this.findOne(id);
  if(ticket.status === 'closed'){
    throw new BadRequestException(`Ticket ${id} is already closed`);
  }
  ticket.status= 'closed';
  return ticket;
}
}
