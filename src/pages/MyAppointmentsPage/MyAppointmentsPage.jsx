import { useEffect } from "react";
import Appointment from "../../components/Appointment/Appointment";
import * as apptAPI from '../../utilities/appointments-api';

export default function MyAppointmentsPage({ appointments,setAppointments }) {
  useEffect(function() {
    async function getAppointments() {
      const appointments = await apptAPI.getAll();
      setAppointments(appointments);
    }
    getAppointments();
  }, []);
  
async function handleDelete(apptId) {
  const appointments = await apptAPI.deleteAppt(apptId);
  setAppointments(appointments);
}

  return (
    <>
      {appointments.map(a => 
      <Appointment appointment={a} handleDelete={handleDelete} />
      )}
    </>
  );
} 