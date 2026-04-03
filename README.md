
# Hospital Appointment Management System

A full-stack web application for managing hospital appointments, built with React, Node.js, Express, and MongoDB.

## Features

- **User Authentication**: Secure login and registration for patients, doctors, and admins
- **Appointment Booking**: Patients can book appointments with available doctors
- **Doctor Management**: Admin can manage doctor profiles and availability
- **Dashboard**: Separate dashboards for patients, doctors, and administrators
- **Appointment Management**: View, update, and cancel appointments
- **Responsive Design**: Modern UI built with React and Tailwind CSS

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI Components
- React Router

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/surivenky727-web/amsdProject.git
cd amsdProject
```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `backend/` directory:
```env
MONGO_URI=mongodb://localhost:27017/hospital_appointment
JWT_SECRET=your_super_secret_jwt_key_here
PORT=4001
```

4. Start MongoDB service (if using local MongoDB)

5. Seed the database with sample doctors:
```bash
npm run seed
```

6. Start the backend server:
```bash
npm run dev  # For development with nodemon
# or
npm start    # For production
```

The backend will run on `http://localhost:4001`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Usage

1. Open your browser and go to `http://localhost:5173`
2. Register as a new user or login with existing credentials
3. Book appointments with available doctors
4. Manage your appointments from the dashboard

### Default Admin Account
After seeding the database, you can login as admin with:
- Email: admin@example.com
- Password: admin123

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Appointments
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Create new appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment

### Doctors
- `GET /api/doctors` - Get all doctors
- `POST /api/doctors` - Add new doctor (Admin only)

### Admin
- `GET /api/admin/users` - Get all users
- `GET /api/admin/appointments` - Get all appointments

## Project Structure

```
├── backend/
│   ├── controllers/     # Route controllers
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── seed/          # Database seeding scripts
│   └── server.js      # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/     # Page components
│   │   ├── services/  # API service functions
│   │   ├── types/     # TypeScript type definitions
│   │   └── utils/     # Utility functions
│   └── public/        # Static assets
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments


  
  The API will listen on port `4001` by default.
  
  ### Admin Setup
  
  To create an admin user, run:
  
  ```bash
  npm run create-admin
  ```
  

  
  Admin can:
  - View and manage all users
  - View and manage all doctors (create, edit, delete)
  - View and manage all appointments
  - Update appointment statuses
  - Promote users to admin
  
  ## Notes
  
  - The frontend now communicates with the backend for authentication, doctor data and appointments.
  - Make sure MongoDB is running locally or provide a hosted URI in `MONGO_URI`.
  - Admin dashboard is accessible at `/admin` for users with admin role.
  
