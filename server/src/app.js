import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(morgan("combined")); 
app.use(bodyParser.json()); //allows json files to be parsed into sentence
app.use(cors()); //allows clients to access server using http/https

app.get('/status', (req, res) => {
    res.send({
        message: "Hello world"
    });
})

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! You have been registered! Have fun!`
    });
})
app.listen(process.env.PORT || 8081);