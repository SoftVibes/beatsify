const fs = require('fs');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use(cookieParser());

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

app.get('/content/:type', (req, res) => {  //This is gonna be a big one
    const { data } = req.cookies;
    const { type } = req.params;
    const { playlists, searches, searchMatches, recentlyPlayed, played } = req.cookies;

    if (type == 'home') {
        reply = {
            playlists: [

            ],
            mixes: [

            ],
            recentlyPlayed: [

            ],
            artists: [

            ],
            recommended: [

            ],
            recommendedMixes: [

            ],
            recommendedArtists: [

            ]
        }
    } else if (type == 'search') {
        reply = {
            recentSearches: [
            
            ],
            searchedArtists: [

            ],
            searchedSongs: [

            ],
            searchedPlaylists: [

            ],
            matches: [

            ]
        }
    } else if (type == 'playlists') {
        reply = {
            playlists: [
                
            ]
        }
    }

    res.send(reply);
});