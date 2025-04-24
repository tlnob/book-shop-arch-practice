# Applying Hexagonal architecture in a Node (Express) Project

This project demonstrates the implementation of a **Book Shop** application using **Hexagonal Architecture** (Ports and Adapters).

## Project Structure

The project is organized into three main layers:

### 1. **Core Layer**
- **Purpose**: Contains the domain logic and is independent of any external frameworks or libraries.
- **Components**:
  - `Book`: Represents the core business entity.
  - `BookRepository`: Defines the interface (port) for interacting with book data.

### 2. **Application Layer**
- **Purpose**: Contains the use cases and orchestrates the interaction between the core and infrastructure layers.
- **Components**:
  - `BookService`: Implements the business logic for managing books and interacts with the `BookRepository`.

### 3. **Infrastructure Layer**
- **Purpose**: Contains the implementation details, such as database access, web frameworks, or external APIs.
- **Components**:
  - `DBRepository`: A simple in-memory implementation of the `BookRepository` interface.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tlnob/book-shop-arch-practice.git
   cd book-shop-arch-practice

2. Install:
   ```bash
   npm install

3. Run:
   ```bash
   npm run dev

Endpoints:

- GET /book/:id:
- GET /books
