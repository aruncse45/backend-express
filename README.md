# Todo Backend API

A practice backend app built with Express.js and TypeScript, ES Module.
This project is for learning and practicing best practice of backend development.

## 🚀 Features

- RESTful API endpoints
- TypeScript for type safety and better developer experience
- Comprehensive API documentation with Swagger/OpenAPI (Pending)
- Request validation using express-validator
- Security middlewares (helmet, cors, XSS protection)
- Structured logging with Winston
- API testing with Jest and Supertest
- Code quality tools (ESLint, Prettier)
- Git hooks with Husky and lint-staged

## 📋 Prerequisites

- Node.js (v18 or higher)
- yarn package manager
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone git@github.com:aruncse45/backend-express.git
cd backend-express
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
NODE_ENV=development
```

## 🚦 Development

Start the development server with hot reload:
```bash
yarn dev
```

Build the project:
```bash
yarn build
```

Start the production server:
```bash
yarn start
```

## 🧪 Testing

Run tests:
```bash
yarn test
```

Run linting:
```bash
yarn lint
```

Fix linting issues:
```bash
yarn lint:fix
```

Format code:
```bash
yarn format
```

## 📚 API Documentation (Pending)

Once the server is running, you can access the Swagger documentation at:
```
http://localhost:3000/api-docs
```

## 🔒 Security Features

- **Helmet**: Secure HTTP headers
- **CORS**: Cross-Origin Resource Sharing protection
- **Rate Limiting**: Protect against DDoS and brute force attacks (Pending)
- **XSS Clean**: Protection against Cross-Site Scripting attacks
- **Input Validation**: Request payload validation

## 📝 Logging

The application uses Winston for logging with different log levels:
- Error: For error logging
- Info: For general information
- Debug: For debugging information

Logs are written to:
- Console (development)
- Log files (production)

## 🏗️ Project Structure

```
src/
├── config/          # Configuration files
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/         # Data models
├── routes/         # API routes
├── services/       # Business logic
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── server.ts       # Application entry point
```

## 👥 Author

- Arun Kundu