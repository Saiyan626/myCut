import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import BarbersPage from '../BarbersPage/BarbersPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  const [appointments, setAppointments] = useState([]);


  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/barbers">
              <BarbersPage />
             </Route> 
            <Route exact path="/appointments/new">
              <AppointmentForm setAppointments={setAppointments}  />
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
