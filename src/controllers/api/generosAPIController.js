const path = require('path');
const db = require('../../database/models');

const genresAPIController = {
    list: async (req, res) => {

try {

const generos = await db.Genero.findAll({
    include: "generos"
})
res.status(200).json(generos)
    
} catch (error) {
    console.error(error)
}

    }
}
module.exports = genresAPIController;