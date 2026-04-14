# AIO - All In One

AIO is a Next.js web application for company and user management. It includes role-based authentication, a company dashboard, user administration, and a responsive UI built with Tailwind CSS.

## Features

- Role-based login for companies and users
- Company dashboard with user visualizations and management
- Signup flow for company accounts
- Auth session handling with Supabase
- Dynamic routes for `company` and `user` roles
- Global styling using Tailwind CSS and `next/font` with Geist

## Project Structure

- `src/app` - Next.js App Router pages and routes
- `src/components` - UI components and reusable form logic
- `src/hooks` - custom React hooks for session and user data
- `src/utils/supabase` - Supabase client and middleware helpers
- `src/utils/auth` - session creation and user management helpers

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

- `npm run dev` - start Next.js development server
- `npm run build` - build the app for production
- `npm start` - start the production server
- `npm run lint` - run ESLint checks

## Technology Stack

- Next.js 16.2.2
- React 19.2.4
- Tailwind CSS 4
- Supabase JS 2.x
- Sonner notifications
- React Icons

## Notes

The app uses the Next.js App Router with `src/app` and dynamic `auth/[role]` routes. The home page redirects authenticated users to `/dashboard`.

For deployment, use any platform that supports Next.js apps, such as Vercel or Netlify.

