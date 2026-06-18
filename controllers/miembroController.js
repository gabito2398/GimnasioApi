const Miembro = require("../models/miembroModel");

exports.getAll = (req, res) => {
    Miembro.getAll((err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);
    });
};

exports.getById = (req, res) => {
    Miembro.getById(req.params.id, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);
    });
};

exports.create = (req, res) => {

    Miembro.create(req.body, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(201).json({
            mensaje: "Miembro creado correctamente"
        });
    });
};

exports.update = (req, res) => {

    Miembro.update(
        req.params.id,
        req.body,
        (err, results) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                mensaje: "Miembro actualizado"
            });
        }
    );
};

exports.delete = (req, res) => {

    Miembro.delete(req.params.id,
        (err, results) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                mensaje: "Miembro eliminado"
            });
        }
    );
};