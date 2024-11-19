import express from 'express';
import { getAllGameControllers, createGameControllers, updateGameControllers, deleteGameControllers, readGameControllers } from '../controllers/game_controller.js'; // Corrige el nombre del archivo de importación si es necesario

const router = express.Router();

router.get('/videojuegos', getAllGameControllers); // Define la ruta GET para obtener todos los tours
router.post('/videojuegos', createGameControllers); // Define la ruta POST para crear un nuevo tour
router.put('/videojuegos/:id', updateGameControllers);
router.delete('/videojuegos/:id', deleteGameControllers);
router.get('/videojuegos/:id', readGameControllers);


export default router;

