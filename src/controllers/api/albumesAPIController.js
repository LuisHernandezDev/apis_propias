const path = require('path');
const db = require('../../database/models');

const albumesAPIController = {
    list: async (req, res) => {
        try {
            
            const albumes = await db.Album.findAll({
                raw: true,
                include: "artista",
                nest: true
            });

            res.status(200).json(albumes);

        } catch (error) {
            console.error(error)
        }

    },

    detail: async (req, res) => {
        
        try {
            
            const album = await db.Album.findByPk(req.params.id, {
                include: "artista"
            });
            res.status(200).json(album)

        } catch (error) {
            console.error(error)
        }

    }
}

module.exports = albumesAPIController;