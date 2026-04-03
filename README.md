# Hospital Appointment Management System

A full-stack hospital appointment management system built with React, TypeScript, Vite, Node.js, Express, and MongoDB.

## Project Structure

- `backend/` - API server, routes, controllers, models, middleware, and seed scripts.
- `frontend/` - React app in TypeScript with Vite and custom components.
- `README.md` - Project documentation.

## Features

- User roles: patient, doctor, and admin.
- Authentication with JWT.
- Booking, viewing, updating, and cancelling appointments.
- Doctor profile management and availability.
- Admin dashboard: user/doctor/appointment management.
- Responsive UI.

## Prerequisites

- Node.js 16+
- npm
- MongoDB local or Atlas

## Setup

1. Clone repository:
```bash
git clone https://github.com/surivenky727-web/amsdProject.git
cd amsdProject
```
2. Install dependencies for all packages:
```bash
npm run install-all
```

### Backend config

1. Set environment variables in `backend/.env`:
```
MONGO_URI=mongodb://localhost:27017/hospital_appointment
JWT_SECRET=your_secret_key
PORT=4001
```
2. Seed sample data:
```bash
cd backend
npm run seed
```
3. Start backend:
```bash
cd backend
npm run dev
```

### Frontend config

1. Start frontend:
```bash
cd frontend
npm run dev
```
2. Open app: `http://localhost:5173`

## Root scripts

- `npm run dev` - concurrently start backend and frontend
- `npm run build` - build frontend
- `npm start` - start backend
- `npm run install-all` - install all dependencies

## API Endpoints

- auth: `POST /api/auth/register`, `POST /api/auth/login`
- doctors: `GET /api/doctors`, `POST /api/doctors` (admin)
- appointments: `GET /api/appointments`, `POST /api/appointments`, `PUT /api/appointments/:id`, `DELETE /api/appointments/:id`
- admin: `GET /api/admin/users`, `GET /api/admin/appointments`

## Commit and push

```bash
git add .
git commit -m "docs: update README for project"
git push origin HEAD
```

## Notes

- Ensure MongoDB is running, or set `MONGO_URI` to Atlas.
- Backend default: `localhost:4001`, frontend default: `localhost:5173`.
