import { Link } from 'react-router-dom';

export default function Appointment({ appointment,handleDelete,idx }) {
    return (
        <>
            <h2>{appointment.barber} {appointment.startTime}</h2> 
            <button onClick={() => handleDelete(appointment._id)} >X</button>
            <Link to={`/appointments/${appointment._id}`} >Update My Appointment</Link>
            {/* <button onClick={() => handleUpdate(appointment._id)} >X</button> */}
        </>
      );
}