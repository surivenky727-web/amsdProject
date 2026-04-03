
  # HospitalAppointment

  This is a code bundle for HospitalAppointment. The original project is available at https://www.figma.com/design/khIckLQF2gir1Mb1CW58EH/HospitalAppointment.

  ## Running the code

  The workspace contains two parts:
  
  1. **Frontend** (root folder)
  2. **Backend** (backend/ folder)
  
  ### Frontend
  
  ```bash
  # install dependencies
  npm install
  
  # start vite development server
  npm run dev
  ```
  
  The frontend will run on `http://localhost:5173` by default and proxies API calls to the backend.
  
  ### Backend
  
  ```bash
  cd backend
  npm install
  ```
  
  Create a `.env` file in `backend/` with the following values:
  
  ```
  MONGO_URI=mongodb://localhost:27017/amsd_app
  JWT_SECRET=your_jwt_secret
  ```
  
  You can seed the doctors collection using:
  
  ```bash
  node seed/seed.js
  ```
  
  Then start the server:
  
  ```bash
  npm start
  ```
  
  The API will listen on port `4001` by default.
  
  ### Admin Setup
  
  To create an admin user, run:
  
  ```bash
  npm run create-admin
  ```
  
  Admin credentials:
  - **Email**: admin@medicare.com
  - **Password**: admin123
  
  ⚠️ **Important**: Change the password after first login!
  
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
  