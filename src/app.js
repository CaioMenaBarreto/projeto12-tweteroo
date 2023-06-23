import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express();
app.use(cors());
app.use(express.json());

let usuarios = [];
let tweets = [];
let Avatar = "";

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    const newUser = {username, avatar};
    Avatar = avatar;
    usuarios.push(newUser);
    res.send("OK");
});

app.post("/tweets", (req, res) => {

    const user = usuarios.find(user => user.username === username);

    if(user){
        const {username, tweet} = req.body;
        const newTweet = {username, tweet};
        tweets.push(newTweet);
        res.send("OK");
    }else{
        res.send("UNAUTHORIZED");
    }
    
})

app.get("/tweets", (req, res) => {
    if(tweets.length===0){
        res.send([]);
        return;
    }
    app.get("/tweets", (req, res) => {
        const {username, tweet} = req.body;
        const novoTweet = [{
            username: username,
            avatar: Avatar,
            tweet: tweet
        }]
        });
    
        res.send(novoTweet);
});
    
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
