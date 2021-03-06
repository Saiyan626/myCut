import { sendRequest } from "./send-request";

const BASE_URL = '/api/appointments';

export function addAppointment(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
}

export function getAll() {
    return sendRequest(BASE_URL);
}

export function deleteAppt(apptId) {  
    return sendRequest(`${BASE_URL}/${apptId}`, 'DELETE');
}

export function updateAppointment(formData, apptId) {
    return sendRequest(`${BASE_URL}/${apptId}`, 'PUT', formData);
}