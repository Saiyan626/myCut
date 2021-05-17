export default function Appointment({ appointment,handleDelete}) {
    return (
        <>
            <h2>{appointment.barber} {appointment.startTime}</h2> 
            <button onClick={() => handleDelete(appointment._id)} >X</button>
            {/* <button onClick={() => handleUpdate(appointment._id)} >X</button> */}
        </>
      );
}