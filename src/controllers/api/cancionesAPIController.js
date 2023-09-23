const path = require('path');
const db = require('../../database/models');

const cancionesAPIController = {
    list: async (req, res) => {

        try {
            const canciones = await db.Cancion.findAll({
                include: ["genero", "medio"]

            });
            res.status(200).json(canciones)

        } catch (error) {
            console.error(error)
        }


    }
}
module.exports = cancionesAPIController;