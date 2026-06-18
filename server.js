require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
    "/api/miembros",
    require("./routes/miembroRoutes")
);

app.use("/api/miembros", require("./routes/miembroRoutes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor activo en puerto ${PORT}`);
});