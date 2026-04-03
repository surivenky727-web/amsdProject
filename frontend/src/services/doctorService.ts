import type { Doctor } from "../data/doctors";
import { get } from './api';

export const getDoctors = async (): Promise<Doctor[]> => {
  try {
    return await get('/doctors');
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return [];
  }
};

export const getDoctorById = async (
  id: string
): Promise<Doctor | undefined> => {
  try {
    return await get(`/doctors/${id}`);
  } catch (error) {
    console.error('Error fetching doctor:', error);
    return undefined;
  }
};