const path = require('path');
const db = require('../../database/models');

const artistasAPIController = {
    list: async (req, res) => {

        try {

            const artistas = await db.Artista.findAll();

            res.status(200).json(artistas);

        } catch (error) {
            console.error(error)
        }

    },
    create: async (req, res) => {
        const artista = {
            nombre: req.body.nombre
        }

        try {

            const newArtista = await db.Artista.create(artista)

            res.status(201).json(newArtista)

        } catch (error) {
            console.error(error)
        }

    },
    update: async (req, res) => {

        const updatedArtista = {
            nombre: req.body.nombre

        }

        try {
            const updateArtista = await db.Artista.update(updatedArtista, {
                where: {
                    id: req.params.id
                },
                returning: true,
                plain: true

            });
            res.status(204).json(updateArtista)


        } catch (error) {
            console.error(error)
        }

    },
    destroy: async (req, res) => {

        try {
            const deleteArtista = await db.Artista.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(deleteArtista)


        } catch (error) {
            console.error(error)
        }


    }
}
module.exports = artistasAPIController;