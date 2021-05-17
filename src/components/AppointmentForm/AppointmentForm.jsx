import {useLocation} from "react-router-dom"
import {useState} from "react"
import { useParams } from "react-router";
import * as apptAPI from '../../utilities/appointments-api';

export default function AppointmentForm( {setAppointments,user} ) {

  const [formData, setFormData] = useState({
    barber: "",
    startTime: ""
  })

  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const allAppts = await apptAPI.addAppointment(formData)
    setAppointments(allAppts)
  }

  return (
    <div>
      <h1>Book Appt for {user.name}: </h1>
      <form onSubmit={handleSubmit}>
        <label>Barber</label>
        <input type="text" name="barber" onChange={handleChange} />  
        <label>Date & Time</label>
        <input type="datetime-local" name="startTime" onChange={handleChange} />
        <button type="submit">Create Appointment</button>
      </form>   
    </div>
  )
}