import { Injectable,NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';
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
  findAll() {
    return this.tickets;
  }
  findOne(id:number){
    const ticket= this.tickets.find(ticket => ticket.id === id);
    if(!ticket){  
      throw new NotFoundException(`Ticket ${id} not found`);
    }
    return ticket;
  }
}
