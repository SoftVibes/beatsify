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

app.get('/:resource/:name', (req, res) => {
    const { resource, name } = req.params;

    if (resource != 'css' && resource != 'js' && resource != 'img') {
        res.send({
            message: 'Invalid resource type'
        });
    } else if (resource == 'css' && name == 'main') {
        res.sendFile(__dirname + '/src/main/style.css');
    } else if (resource == 'js' && name == 'main') {
        res.sendFile(__dirname + '/src/main/script.js');
    } else if (resource == 'img' && name == 'icon') {
        res.sendFile(__dirname + '/src/assets/images/icon.svg');
    } else if (resource == 'img' && name == 'home-unselected') {
        res.sendFile(__dirname + '/src/assets/images/home_unselected.svg');
    } else if (resource == 'img' && name == 'home-selected') {
        res.sendFile(__dirname + '/src/assets/images/home_selected.svg');
    } else if (resource == 'img' && name == 'search-unselected') {
        res.sendFile(__dirname + '/src/assets/images/search_unselected.svg');
    } else if (resource == 'img' && name == 'search-selected') {
        res.sendFile(__dirname + '/src/assets/images/search_selected.svg');
    } else if (resource == 'img' && name == 'playlist-unselected') {
        res.sendFile(__dirname + '/src/assets/images/playlist_unselected.svg');
    } else if (resource == 'img' && name == 'playlist-selected') {
        res.sendFile(__dirname + '/src/assets/images/playlist  _selected.svg');
    } else {
        res.send({
            message: 'Invalid resource name'
        });
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/main/index.html');
});