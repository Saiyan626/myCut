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

// async function handleUpdate(apptId) {
//   const appointments = await apptAPI.updateAppt(apptId);
//   setAppointments(appointments);  
// }
console.log(appointments)
  return (
    <>
      {appointments.map((a,idx) => 
      <Appointment idx={idx} appointment={a} handleDelete={handleDelete} />
      )}
    </>
  );
} 