# Helpdesk-lite

A lightweight NestJS backend application for managing support tickets with request logging, response standardization, and staff authentication.

## Features

### 1. **Tickets Management**
   - Create new support tickets
   - Retrieve tickets (list all or filter)
   - Update ticket status and details
   - Close tickets
   - Data validation using DTOs

### 2. **Request Logger Middleware**
   - Global HTTP request logging
   - Improves debugging and monitoring of incoming API calls
   - Attached globally in the application bootstrap

### 3. **Response Interceptor**
   - Standardized HTTP response format across all endpoints
   - Improves API consistency and client-side handling
   - Global response transformation

### 4. **Staff Authorization Guard**
   - Header-based authentication (`x-staffkey`)
   - Protects staff-only endpoints
   - Validates staff access before processing requests
   - Throws `ForbiddenException` on unauthorized access

## Project Structure

```
src/
├── app.module.ts              # Root application module
├── main.ts                    # Application entry point
├── common/
│   ├── request-logger.middleware.ts   # Global request logging
│   └── response.interceptor.ts        # Response standardization
└── tickets/
    ├── tickets.module.ts      # Tickets feature module
    ├── tickets.service.ts     # Business logic for tickets
    ├── tickets.controller.ts  # API endpoints
    ├── ticket.interface.ts    # Ticket data model
    ├── guards/
    │   └── staff.guard.ts     # Staff authorization guard
    └── dto/
        ├── create-ticket.dto.ts       # Create ticket validation
        ├── update-tickets.dto.ts      # Update ticket validation
        └── filter-query-tickets.dto.ts # Filter tickets validation
```

## Tech Stack

- **Framework**: NestJS 12.x
- **Language**: TypeScript 6.x
- **Validation**: class-validator, class-transformer
- **Runtime**: Node.js
- **Testing**: Vitest, Supertest
- **Linting**: oxlint
- **Code Formatting**: Prettier

## Installation

```bash
# Install dependencies
npm install
```

## Running the Application

```bash
# Development mode (with watch)
npm run start:dev

# Production build
npm run build

# Production mode
npm run start:prod

# Debug mode
npm run start:debug
```

## API Endpoints

### Tickets Module

All ticket endpoints require `x-staffkey: secret` header for authorization.

- **GET** `/tickets` - List all tickets 
- **GET?** `/tickets?status=open&priority=low` - List all tickets via filtering 
- **POST** `/tickets` - Create a new ticket
- **GET** `/tickets/:id` - Get ticket by ID
- **PATCH** `/tickets/:id` - Update a ticket
- **PATCH** `/tickets/:id/close` - Close a ticket

## Middleware & Interceptors

### Request Logger
- Automatically logs all incoming HTTP requests
- Logs: method, URL, and request metadata
- Helps with debugging and monitoring API usage

### Response Interceptor
- Standardizes all API responses
- Wraps successful and  responses in consistent format

## Guards

### StaffGuard
- Protects endpoints that require staff authorization
- Validates `x-staffkey` header
- Applied to staff-only tickets endpoints

## License

UNLICENSED

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
