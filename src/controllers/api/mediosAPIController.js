const path = require('path');
const db = require('../../database/models');

const mediosAPIController = {
    list: async (req, res) => {

        try {
            const tiposDeMedios = await db.Medio.findAll({
                include: "medios"
            })
            res.status(200).json(tiposDeMedios)

        } catch (error) {
            console.error(error)
        }
    }
}
module.exports = mediosAPIController;