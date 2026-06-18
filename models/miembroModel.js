const db = require("../config/db");

const Miembro = {

    getAll(callback) {
        db.query("SELECT * FROM miembros", callback);
    },

    getById(id, callback) {
        db.query(
            "SELECT * FROM miembros WHERE id = ?",
            [id],
            callback
        );
    },

    create(data, callback) {
        db.query(
            "INSERT INTO miembros SET ?",
            data,
            callback
        );
    },

    update(id, data, callback) {
        db.query(
            "UPDATE miembros SET ? WHERE id = ?",
            [data, id],
            callback
        );
    },

    delete(id, callback) {
        db.query(
            "DELETE FROM miembros WHERE id = ?",
            [id],
            callback
        );
    }
};

module.exports = Miembro;