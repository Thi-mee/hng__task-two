const router = require('express').Router();
const personController = require('../controllers/personController');

router.post('/', personController.createPerson);

router.get('/', personController.getAllPeople);

router.get('/:user_id', personController.getPersonById);

router.put("/:user_id", personController.updatePersonById);

router.delete("/:user_id", personController.deletePersonById);


module.exports = router;