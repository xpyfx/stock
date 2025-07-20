# Portfolio Application

## Overview

This is a full-stack web application built for portfolio management, specifically designed to track stock and ETF investments with dividend tracking capabilities. The application uses a modern tech stack with React/TypeScript frontend, Express.js backend, and PostgreSQL database with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL session store
- **Build**: ESBuild for production bundling

### Database Architecture
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with migrations support
- **Schema**: Type-safe schema definitions in shared folder
- **Connection**: Neon serverless driver for cloud deployment

## Key Components

### Frontend Components
- **Portfolio Management**: Stock and ETF tracking with dividend information
- **Data Tables**: Reusable table components for displaying portfolio data
- **UI Library**: Complete set of accessible components (buttons, forms, dialogs, etc.)
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Route Registration**: Modular route organization with API prefix
- **Request Logging**: Comprehensive logging for API requests with response details
- **Error Handling**: Centralized error handling middleware

### Shared Components
- **Schema Definitions**: Shared TypeScript types and Zod validation schemas
- **Database Models**: User model with extensible structure for portfolio data

## Data Flow

1. **Client Requests**: Frontend makes HTTP requests to `/api/*` endpoints
2. **API Processing**: Express server processes requests through registered routes
3. **Data Access**: Storage interface abstracts database operations
4. **Response**: JSON responses with comprehensive error handling
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **@radix-ui/***: Accessible UI component primitives
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **wouter**: Lightweight React router

### Development Tools
- **Vite**: Fast build tool with HMR
- **TypeScript**: Type safety across the entire stack
- **Tailwind CSS**: Utility-first CSS framework
- **Drizzle Kit**: Database migration and introspection tools

### UI/UX Libraries
- **class-variance-authority**: Type-safe CSS class variants
- **clsx**: Conditional className utility
- **date-fns**: Date manipulation library
- **lucide-react**: Icon library

## Deployment Strategy

### Development
- **Hot Reload**: Vite dev server with instant updates
- **Development Server**: Express server with TypeScript execution via tsx
- **Database**: Direct connection to Neon PostgreSQL instance

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command
- **Serving**: Express serves both API and static frontend files

### Configuration
- **Environment Variables**: Database URL required for connection
- **Build Scripts**: Separate build processes for frontend and backend
- **Type Checking**: TypeScript compilation verification before deployment

### Key Architectural Decisions

1. **Monorepo Structure**: Single repository with client, server, and shared code for easier development and type sharing
2. **Type Safety**: End-to-end TypeScript with shared types between frontend and backend
3. **Component Library**: Shadcn/ui for consistent, accessible UI components
4. **Database Strategy**: Drizzle ORM chosen for type safety and PostgreSQL compatibility
5. **State Management**: TanStack Query for server state with optimistic updates and caching
6. **Session Storage**: PostgreSQL-backed sessions for scalability
7. **Development Experience**: Vite for fast frontend development, tsx for backend hot reload

The application is designed for a portfolio management use case with Chinese language support and focuses on stock/ETF tracking with dividend management capabilities.