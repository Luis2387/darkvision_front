# DarkVision Dashboard Frontend (MVP)

This is a basic React + Vite frontend adapted from the [Light Able Admin Template](https://themeforest.net/item/light-able-admin-dashboard-template/51628885?s_rank=4).

## Routes

- `/pages/login-v1`: login page (JWT)
- `/dashboard`: report summary for the logged-in user (not protected in this MVP)

## Behavior

- User logs in via `/auth/login`, receives a JWT token stored in `localStorage`.
- After login, the app redirects to `/dashboard`.
- The dashboard triggers two backend API calls:
  - `/reports`: to fetch all reports for the current user's company
  - `/reports/{filename}`: to fetch the latest report and extract key metrics
- The dashboard displays three main widgets:
  - Last inspection date
  - Number of issues
  - Recommendation summary
- Additional content on the page is static/dummy (template default).

## Tech Stack

- React 18
- Vite
- Axios
- Bootstrap / React-Bootstrap
- TypeScript
- JWT (via `localStorage`)
- CORS enabled for `http://localhost:8000`

## Setup

```bash
git clone https://github.com/Luis2387/darkvision_front.git
cd darkvision-front
npm install
npm run dev
