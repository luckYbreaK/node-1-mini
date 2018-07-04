const express = require("express");
const bodyParser = require("body-parser");
const booksCtrl = require("./controllers/books_controller");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../build"));

app.get("/api/books", booksCtrl.read);
app.post("/api/books", booksCtrl.create);
app.put("/api/books/:id", booksCtrl.update);
app.delete("/api/books/:id", booksCtrl.delete);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});