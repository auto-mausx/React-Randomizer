const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/randoNum', (req, res) => {
    res.send("get route works!");
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})