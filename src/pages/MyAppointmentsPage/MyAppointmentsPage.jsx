import { useEffect } from "react";
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
        <>
          <h2>{a.barber} {a.startTime}</h2> 
          <button onClick={() => handleDelete(a._id)} >X</button>
        </>
      )}
    </>
  );
} 