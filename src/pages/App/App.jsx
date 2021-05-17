import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import MyAppointmentsPage from '../MyAppointmentsPage/MyAppointmentsPage';
import UpdateApptForm from '../../components/UpdateApptForm/UpdateApptForm';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  const [appointments, setAppointments] = useState([]);

console.log(appointments)
  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/appointments/new">
              <AppointmentForm setAppointments={setAppointments} user={user} />
            </Route>
            <Route exact path="/appointments/:id">
              <UpdateApptForm appointments={appointments} setAppointments={setAppointments} user={user} />
            </Route>
            <Route path="/appointments">
              <MyAppointmentsPage appointments={appointments} setAppointments={setAppointments} />
            </Route> 
            <Redirect to="/barbers" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
