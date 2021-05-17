import { useState } from "react"
import { useParams } from "react-router";
import * as apptAPI from '../../utilities/appointments-api';

export default function UpdateApptForm({ appointments,setAppointments,user }) {

    const { id } = useParams();

    const [formData, setFormData] = useState({
        barber: "",
        startTime: ""
    })
console.log(appointments)

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const allAppts = await apptAPI.updateAppointment(formData, id)
        setAppointments(allAppts)
    }

    return (
        <div>
            <h1>Update Appointment</h1>
            <form onSubmit={handleSubmit}>
                <label>Barber</label>
                <input type="text" name="barber" onChange={handleChange} />
                <label>Date & Time</label>
                <input type="datetime-local" name="startTime" onChange={handleChange} />
                <button type="submit">Update Appointment</button>
            </form>
        </div>
    )
}