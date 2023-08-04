const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.end('Hello World');
})



app.listen(port, () => {
    console.log(`Serveur lançé sur le port ${port}`);
});




