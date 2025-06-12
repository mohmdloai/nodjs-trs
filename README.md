# Node.js Training Server

A comprehensive Node.js server implementation showcasing fundamental web server concepts and REST API development.

## Project Overview

This project demonstrates building HTTP servers from scratch using Node.js core modules, implementing both static file serving and RESTful API endpoints. It serves as a practical training ground for understanding server-side JavaScript development.

## Features

### Static File Server

- Serves HTML pages from the public directory
- Handles routing for home, about, and contact pages
- Custom 404 error handling
- Async file reading with proper error handling

### REST API Server

- CRUD operations for user management
- JSON middleware implementation
- Custom logging middleware
- Error handling and validation
- RESTful endpoint design

## Project Structure

```
nodjs-trs/
├── server.js          # Static file server implementation
├── newserv.js         # REST API server with middleware
├── package.json       # Project configuration and dependencies
├── public/            # Static HTML files
│   ├── index.html     # Home page
│   ├── about.html     # About page
│   ├── contact.html   # Contact page
│   └── notfound.html  # 404 error page
└── README.md          # Project documentation
```

## Installation

1. Clone or download the project
2. Navigate to the project directory
3. Install dependencies

```bash
cd nodjs-trs
npm install
```

## Environment Setup

Create a .env file in the root directory:

```
PORT=5000
```

## Usage

### Running the Static File Server

```bash
node server.js
```

Access the application at:

- Home: http://localhost:5000/
- About: http://localhost:5000/about
- Contact: http://localhost:5000/contact

### Running the API Server

```bash
npm start
```

This runs the REST API server with nodemon for auto-restart during development.

## API Endpoints

### Get All Users

- Method: GET
- URL: /api/users
- Response: Array of user objects

### Get User by ID

- Method: GET
- URL: /api/users/:id
- Response: Single user object or 404 error

### Create New User

- Method: POST
- URL: /api/users
- Body: JSON object with user data
- Response: Created user object with 201 status

## Technical Implementation

### Core Technologies

- Node.js HTTP module for server creation
- File system promises for async file operations
- URL and Path modules for routing
- JSON parsing and stringification

### Middleware Pattern

- Custom logger middleware for request tracking
- JSON content-type middleware
- Modular handler functions for clean code organization

### Error Handling

- Try-catch blocks for robust error management
- Custom error responses with appropriate HTTP status codes
- Graceful handling of file not found scenarios

## Development Features

- ES6 modules with import/export syntax
- Async/await pattern for asynchronous operations
- Nodemon integration for development workflow
- Environment variable configuration
- Clean separation of concerns

## Code Highlights

### Static File Serving

The server dynamically serves HTML files based on URL routing, with fallback to a 404 page for undefined routes.

### RESTful API Design

Implements proper REST conventions with appropriate HTTP methods and status codes for different operations.

### Middleware Architecture

Demonstrates the middleware pattern commonly used in Express.js but implemented from scratch using Node.js core modules.

## Learning Objectives

This project covers essential Node.js concepts:

- HTTP server creation and configuration
- File system operations and async programming
- URL parsing and routing logic
- Request and response handling
- Middleware pattern implementation
- REST API design principles
- Error handling strategies
- Environment configuration

## Author

MHMD LOAI

## License

UNLICENSED - For educational purposes only
