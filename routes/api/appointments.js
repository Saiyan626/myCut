const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/api/appointments');

const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, appointmentsCtrl.index)

router.post('/', ensureLoggedIn, appointmentsCtrl.createAppointment)

router.delete('/:id', ensureLoggedIn, appointmentsCtrl.deleteAppointment)

router.put('/:id', ensureLoggedIn, appointmentsCtrl.updateAppointment)

module.exports = router;