# Roam: Plan. Explore. Experience.

A trip-planning and booking UI built with Next.js 15, React 19, and TypeScript. Roam lets a traveller browse destinations, build an itinerary, estimate costs, and walk through a booking flow from review to confirmation.

**This is a frontend prototype.** The pages and components are fully built and interactive, but flight search, payments, and account data are not wired up to a live backend yet: there are no API routes in this project. Environment variables for a flight-data provider and a payments provider are scaffolded (see `.env.example`) for whoever picks this up to wire in.

## Features

- Destination browsing with filters
- Trip planner: itinerary builder, cost calculator, and an "expert review" panel
- Booking flow: review, payment, and confirmation screens
- User dashboard: bookings and profile pages
- Auth screens: login, signup, password reset
- Marketing and content pages: pricing, how-it-works, company (about, careers, investors, press, team), resources (travel guides, packing lists, news), legal (privacy, terms, cookies, cancellation), help and support

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS, tailwindcss-animate |
| UI components | Radix UI primitives, shadcn/ui |
| Forms & validation | React Hook Form, Zod |
| Charts | Recharts |

## Setup

### Prerequisites

- Node.js 18+ and npm (or pnpm)

### Steps

1. Clone this repository: `git clone https://github.com/smadhu6364-beep/roam-travel.git`
2. Go to the project directory
3. Install dependencies: `npm install`
4. Copy `.env.example` to `.env.local` and fill in real values for anything you want to actually wire up (see below)
5. Run the dev server: `npm run dev`
6. Open `http://localhost:3000`

### Environment Variables

`.env.example` lists the variables the project is scaffolded for. None of these are required to run the UI as-is; they matter only once real integrations are wired in.

| Variable | Description |
|---|---|
| `AMADEUS_CLIENT_ID` / `AMADEUS_CLIENT_SECRET` | Credentials for the Amadeus flight-data API, for live flight search |
| `DATABASE_URL` | Database connection string (defaults to a local SQLite file for development) |
| `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` | Stripe credentials, for real payment processing |
| `YOUTUBE_API_KEY` | Optional, for video previews |
| `NEXT_PUBLIC_APP_URL` | Base URL of the app |

### A note on this repository

The local copy of this project had a live Amadeus API client ID and secret sitting in a `roma.env.local` file that the original `.gitignore` did not actually exclude (it only matched filenames starting with a dot). That file, and those credentials, were not pushed here. `.gitignore` has been tightened to exclude any file matching `*.env*` or `*.local`, not just dotfiles. If those Amadeus credentials are still active, they should be rotated.
