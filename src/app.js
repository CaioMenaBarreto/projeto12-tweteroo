import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const user = req.body;
    usuarios.push(user);
    res.status(200).send(usuarios);
});

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    const user = usuarios.find((user) => user.username === username);
  
    if (!user) {
        res.status(401).send("UNAUTHORIZED");
    }

    if (!tweet || tweet.trim() === "") {
        res.status(400).send("O tweet não pode estar vazio");
        return;
    }

    const newTweet = { 
        username: username,
        avatar: user.avatar,
        tweet: tweet
    };
      tweets.push(newTweet);
      res.status(200).send(tweets);});

app.get("/tweets", (req, res) => {
    if (tweets.length === 0) {
        res.send([]);
        return;
    }

    let novosTweets = [];

    if(tweets.length > 10){
        novosTweets = tweets.slice(tweets.length - 10);
    }else{
        novosTweets = tweets.slice();
    }
    console.log(novosTweets);
    res.send(novosTweets);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
