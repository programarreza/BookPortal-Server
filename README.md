# Book Portal

## Project Description
The **Book Portal** is a backend service designed to manage a library's operations, including:

- Managing the inventory of books (adding, updating, deleting books).
- Managing library members (registering, updating, deleting members).
- Borrowing and returning books.
- Viewing overdue books and associated penalties.

This API simplifies handling a library’s core operations and provides a secure and efficient way to track books and members.

## Live Demo / URL
The API is deployed and available at:

[Live URL](https://bookportalserver.vercel.app)

## Technology Stack
The key technologies and tools used in this project are:

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for building REST APIs.
- **Prisma ORM**: Object-relational mapper for interacting with the PostgreSQL database.
- **PostgreSQL**: Database for storing library information.
- **TypeScript**: Strongly typed language that compiles to JavaScript.

## Setup Instructions
To set up and run this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/programarreza/BookPortal-Server.git
   cd BookPortal-Server

2. **yarn install**
3. **npx prisma migrate dev**
4. **yarn start:dev**
