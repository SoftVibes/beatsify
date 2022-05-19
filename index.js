const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.listen(8080, () => {
    console.log('Online at http://localhost:8080');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/main/index.html');
});

app.get('/resource/:dir/:item', (req, res) => {
    const { dir, item } = req.params;
    if (dir == 'images') {
        try {
            res.sendFile(__dirname + '/src/assets/images/' + item);
        } catch (err) {
            res.send({
                message: 'Error',
                error: err
            });
        }
    } else if (dir == 'main') {
        try {
            res.sendFile(__dirname + '/src/main/' + item);
        } catch (err) {
            res.send({
                message: 'Error',
                error: err
            });
        }
    } else {
        res.status(400).send({
            message: 'Invalid dir parameter.'
        });
    }
});

app.get('/track', (req, res) => {
    track = fs.readFileSync(__dirname + '/src/assets/others/track.json');
    track = JSON.parse(track);

    res.send(track);
});