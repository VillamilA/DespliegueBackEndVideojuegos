import GameModel from "../models/game.js";
import { v4 as uuidv4 } from 'uuid';

const getAllGameControllers = async (req, res) => {
    const games = await GameModel.getAllGameModel ()//cada ves que retorne una promesa ponemos un await y un async
    res.status(200).json(games)
}

const createGameControllers = async (req, res) => { 
    const newGameData ={ //aqui se genera el tour que vamos a registrar
        id: uuidv4(), //aqui se genera el id
        ...req.body //aqui se recibe el body
    } //aqui se envia el tour
    try {
        const game = await GameModel.createGameModel(newGameData) //aqui se crea el tour
        res.status(201).json(game) //aqui se envia el tour
    } catch (error) { //aqui se maneja el error
        res.status(500).json(error) //aqui se envia el error
    }
}

const updateGameControllers = async (req, res) => {
    const {id} = req.params
    try {
        const game = await GameModel.updateGameModel(id, req.body) //aqui se actualiza el tour
        res.status(200).json(game) //aqui se envia el tour
    } catch (error) { //aqui se maneja el error
        res.status(500).json(error ) //aqui se envia el error
    }
}

const deleteGameControllers = async (req, res) => {
    const {id} = req.params
    try {
        const game = await GameModel.deleteGameModel(id) //aqui se elimina el tour
        res.status(200).json({msg: "Lo conseguiste, lo eliminaste, lo borraste... Estas feliz?", game}) //aqui se envia el tour
    } catch (error) { //aqui se maneja el error
        res.status(500).json({msg: "Para bien o para mal, fallaste al tratar de eliminar las cosas", error

        }) //aqui se envia el error
    }
}

const readGameControllers = async (req, res) => {
    const {id} = req.params
    try {
        const game = await GameModel.readGameModel(id) //aqui se lee el tour
        res.status(200).json(game) //aqui se envia el tour
    } catch (error) { //aqui se maneja el error
        res.status(500).json(error) //aqui se envia el error
    }
}

export {getAllGameControllers, createGameControllers, updateGameControllers, deleteGameControllers, readGameControllers
}
