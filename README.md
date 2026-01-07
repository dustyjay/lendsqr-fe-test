# Lendsqr Frontend Test

A modern React TypeScript application for managing users and displaying detailed user information. Built with Vite, featuring responsive design, authentication routing, and comprehensive data management.

## What This Project Does

Lendsqr Frontend is a dashboard application that allows administrators to:

- **View user lists** with sorting and pagination capabilities
- **Search and filter users** by organization, username, email, and status
- **View detailed user profiles** including personal, employment, socials, and bank information
- **Manage user status** (Active, Pending, Blacklisted, Inactive)
- **Track user tier ratings** and loan/savings information
- **Responsive mobile UI** with adaptive layouts for all screen sizes

## Key Features

- 🔐 **Authentication-based routing** with protected dashboard access
- 📊 **Advanced table sorting** with multiple data type support
- 📱 **Fully responsive design** for desktop, tablet, and mobile devices
- 🎨 **Clean component architecture** with reusable UI components
- ✅ **Comprehensive test coverage** with Vitest
- 🚀 **Fast development** with Vite's HMR and optimized builds
- 📝 **Type-safe** with full TypeScript support
- 🎯 **ESLint integration** for code quality

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd lendsqr-fe-test
```

2. **Install dependencies**

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

Build output is generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Running Tests

Execute the test suite with:

```bash
npm test
```

For watch mode during development:

```bash
npm test:watch
```

Tests are written using Vitest and React Testing Library, located in `__tests__` directories throughout the codebase.

## Code Quality

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── table/          # Table with sorting functionality
│   ├── button/         # Button variants
│   ├── input/          # Form inputs
│   ├── modal/          # Modal dialogs
│   ├── header/         # Application header
│   └── ...             # Other UI components
├── pages/              # Page components and routes
│   ├── auth/           # Authentication pages
│   ├── users-list/     # Users listing page
│   └── user-details/   # User detail pages
├── layouts/            # Layout components
├── router/             # Route definitions and guards
├── models/             # TypeScript type definitions
├── assets/             # Images and static assets
└── util.ts             # Utility functions
```

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router v7** - Client-side routing
- **React Paginate** - Pagination component
- **SCSS** - Styling
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing
- **ESLint** - Code quality

## Key Components

### Table Component

Located in `src/components/table/`, features:

- Customizable headers and rows
- Built-in sorting with `useTableSort` hook
- Responsive design

### User Management

- **Users List Page** - Displays all users with filters, sorting, and pagination
- **User Details Page** - Shows comprehensive user information
- **General Details** - User profile section with personal and financial information

### Authentication

- Protected routes with `AuthRoute` and `UnauthRoute` guards
- Login page for authentication
- Token-based session management via localStorage

## API Integration

The application fetches user data from an external API:

```typescript
fetch('https://mocki.io/v1/ba8c839d-a24c-4f4a-a82c-e950a7a1bdf5');
```

## Responsive Design

The application includes:

- Desktop optimized layouts
- Tablet-friendly navigation
- Mobile-specific components (`UserListMobile`, `MobileHeader`)
- SCSS media queries for adaptive styling

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests to help improve this project.

## License

This project is part of the Lendsqr assessment program. Check the LICENSE file for details.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
