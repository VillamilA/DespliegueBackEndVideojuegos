const GameModel ={

     async getAllGameModel() { //creamos un modelo que se conecta a la base de datos y nos da una respuesta a la petición
        const peticion= await fetch("http://localhost:4000/videojuegos")
        const games = await peticion.json()
        return games
    },
    async createGameModel(newGame) { //creamos un modelo que se conecta a la base de datos y nos da una respuesta a la petición
        const url = "http://localhost:4000/videojuegos"
        //const peticion= await fetch("http://localhost:4000/videojuegos")
        const peticion = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newGame),
            headers: {"Content-Type": "application/json",}
        })
        const games = await peticion.json()
        console.log(games)
        return games
    },

    async updateGameModel(gameID, updateGameModel){
        //Conexión con la base de datos
        const url = `http://localhost:4000/videojuegos/${gameID}`
        //Envio de la petición a bdd
        const peticion = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(updateGameModel),
            headers: {"Content-Type": "application/json",}
        })
        //Obtener la respuesta
        const data = await peticion.json()
        //Mandar la respuesta al controlador
        return data
    },
    async deleteGameModel(gameID){
        const url = `http://localhost:4000/videojuegos/${gameID}`
        const peticion = await fetch(url, {
            method: "DELETE",
        })
        const data = await peticion.json()
        return data
    },

    //Ahora necesito hacer el read pero solo de un tour con el id ta
    async readGameModel(gameID){
        const peticion = await fetch(`http://localhost:4000/videojuegos/${gameID}`)
        const data = await peticion.json()
        return data
    }

}


export default GameModel;