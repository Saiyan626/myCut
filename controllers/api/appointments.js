const Appointment = require('../../models/appointment');

module.exports = {
    index,
    createAppointment,
    deleteAppointment,
    updateAppointment
};

async function index(req, res) {
    const appointments = await Appointment.find({ user: req.user._id })
    res.json(appointments)
}

async function createAppointment(req, res) {
    try {
        req.body.user = req.user._id;
        await Appointment.create(req.body);
        const appointments = await Appointment.find({});
        res.json(appointments)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function deleteAppointment(req, res) {
    await Appointment.findOneAndDelete({ _id: req.params.id });
    const appointments = await Appointment.find({ user: req.user._id });
    res.json(appointments);
}

async function updateAppointment(req, res) {
    await Appointment.findOneAndUpdate({ _id: req.params.id }, {...req.body});
    const appointments = await Appointment.find({ user: req.user._id });
    res.json(appointments);
}