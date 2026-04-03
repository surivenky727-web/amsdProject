import { post, get } from './api';

export interface AppointmentInput {
  doctorId: string;
  date: string;
  time: string;
}

export const bookAppointment = async (data: AppointmentInput) => {
  try {
    return await post('/appointments', data);
  } catch (error) {
    throw new Error('Unable to book appointment');
  }
};

export const getMyAppointments = async () => {
  try {
    return await get('/appointments');
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return [];
  }
};

export interface Appointment {
  _id: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
};
export interface User {
  name: string;
  email: string;
}