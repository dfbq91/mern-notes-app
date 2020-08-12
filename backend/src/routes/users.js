const { Router } = require('express'); // Función llamada Router
const router = Router(); // Router() devuelve un objeto, al que llamo router


const { getUsers, createUser, deleteUser } = require('../controllers/users.controller.js');

// Para api/routes/ Nótese que cada ruta tiene una función que se define en controllers/users.controller
router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .delete(deleteUser)

module.exports = router;
