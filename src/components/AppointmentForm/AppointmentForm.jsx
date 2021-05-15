import {useLocation} from "react-router-dom"
import {useState} from "react"
import * as apptAPI from '../../utilities/appointments-api';

export default function AppointmentForm() {
  const barber = useLocation().state.barber;

  const [formData, setFormData] = useState({
    barber: barber._id,
    startTime: ""
  })

  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const allAppts = await apptAPI.addAppointment(formData)
    console.log(allAppts)
  }

  return (
    <div>
      <h1>Book Appt for: {barber && barber.name}</h1>
      <form onSubmit={handleSubmit}>
        <label>Date & Time</label>
        <input type="datetime-local" name="startTime" onChange={handleChange} />
        <button type="submit">Create Appointment</button>
      </form>
    </div>
  )
}