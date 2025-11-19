# Next.js Web Application - Project Overview

## Project Type

This is a Next.js 16.0.0 web application built with React 19.2.0 and TypeScript. The project uses the App Router architecture and follows modern React/Next.js conventions.

## Architecture & Structure

- **Framework**: Next.js 16.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations and RTL (right-to-left) support for Persian/Farsi
- **State Management**: React Context API (AuthContext, PositionContext)
- **UI Components**: Custom components with Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Rich Text Editor**: Tiptap editor extensions
- **Icons**: Lucide React icons

## Key Features & Technologies

- **Authentication**: Context-based auth system with user session management
- **RTL Support**: Full right-to-left layout support for Persian language
- **Responsive Design**: Mobile-first responsive layout using Tailwind CSS
- **Modern React**: React Compiler enabled for performance optimization
- **Type Safety**: Full TypeScript coverage with custom types
- **Date Handling**: Support for Jalali calendar dates (Persian calendar)
- **Cookies**: Client and server-side cookie management

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── (auth)/          # Authentication routes (login, register)
│   ├── (main)/          # Main application routes
│   ├── actions/         # Server actions (user, position management)
│   ├── dashboard/       # Dashboard pages
│   ├── globals.css      # Global styles and custom animations
│   └── layout.tsx       # Root layout
├── components/          # Reusable React components
├── constans/            # Constants and configuration (including fonts)
├── context/             # React Context providers
├── hooks/               # Custom React hooks
├── services/            # API service layer
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## Dependencies

### Key Runtime Dependencies:

- `@tiptap/*` extensions for rich text editing
- `lucide-react` for icons
- `react-hook-form` and `zod` for form management and validation
- `date-fns-jalali` for Persian calendar date handling
- `react-select` for select components
- `react-hot-toast` for notifications
- `react-otp-input` for OTP input fields
- `react-draggable` for draggable components

### Key Development Dependencies:

- `@tailwindcss/postcss` for styling
- `typescript` for type safety
- `eslint` for code linting
- `babel-plugin-react-compiler` for React Compiler

## Building and Running

### Development:

```bash
# Start development server
pnpm dev
# or
npm run dev
```

The application will be available at http://localhost:3000

### Production:

```bash
# Build the application
pnpm build
# or
npm run build

# Start production server
pnpm start
# or
npm run start
```

### Linting:

```bash
# Run ESLint
pnpm lint
# or
npm run lint
```

## Development Conventions

- **File Naming**: Uses `.tsx` and `.ts` extensions with PascalCase for components
- **Import Paths**: Uses absolute imports with `@/*` alias (e.g., `@/components/...`)
- **Styling**: Tailwind CSS utility classes with custom CSS animations
- **Internationalization**: RTL support with Persian language focus
- **Type Safety**: Strong TypeScript typing throughout the application
- **Code Organization**: Feature-based grouping in the `src` directory
- **Server Actions**: Next.js server actions in the `actions` directory

## Special Features

- **Custom Persian Font**: Uses IranYekan font with variable font support
- **Animation Classes**: Custom CSS animations for floating, sliding, typewriter effects
- **Glass Morphism**: Custom glass effect CSS classes
- **Position Management**: Built-in position/context management system
- **Cookie-based Authentication**: Server-side cookie handling for user sessions

## Note on Directory Organization

- The `constans` directory (misspelled from "constants") contains font configurations and other constants
- The application has both authenticated and main routes using Next.js route groups
- Server actions are used for data fetching and mutations
- Context providers wrap the application to manage authentication and position state

## Project Guidelines

The following are general project guidelines that you must follow and are repeated in all prompts:

You are a front-end persona highly proficient in Next.js, with deep expertise in UI/UX design. Always prioritize creating the most beautiful, intuitive, and visually stunning website possible, ensuring seamless user experiences, responsive layouts, and elegant aesthetics throughout your suggestions and implementations.

Use `pnpm` instead of `npm` or `yarn` when executing any Node.js-related commands.

For all backend interactions, the actual response or error data is nested within a `body` object. Example success shape (e.g., for login):

```
{
  "success": true,
  "body": {
    "token": "23423423rrsdfsagssfas2342",
    "user": {
      "_id": "sdfsdf3423422344",
      "name": "Amir",
      // ... additional user fields
    }
  }
}
```

Example error shape (e.g., for login):

```
{
  "success": false,
  "body": {
    "message": "Failed"
  }
}
```

If you want to know backend API declaration and type-safety you can read `src/types/declarations/selectInp.ts` file which include all schemas and backend API calls.

If you encounter any problems with the structure of the Lesan library used for the backend, you can use its documentation (here)[https://miaadteam.github.io/lesan/].

Please use the atomic development process to develop this project. You can find its structure in this path: `src/components`

Please strictly follow and use clean code and clean architecture and programming best practices and principles, try to avoid complex code.

Clean up any unnecessary code, such as console.log or unused variables or any other not used statements, and ensure state management is efficient and leak-free.

If you want to use any package please review `package.json` to see what kind of package are available.
