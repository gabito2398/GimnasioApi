const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gimnasio"
});

connection.connect((err) => {
    if (err) {
        console.error("Error al conectar:", err);
        return;
    }

    console.log("Base de datos conectada");
});

module.exports = connection;