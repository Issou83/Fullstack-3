const express = require("express");
const port = 5000;
const app = express();

//Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Lancement du serveur
app.listen(port, () => console.log("Le server a démarré au port " + port));
