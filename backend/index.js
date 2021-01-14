const express = require('express');
const app = express();
port = process.env.PORT || 5000;

cors = require("cors");

let motion = false;
let sound = 0;
let alarm = false;
let toggle = false;


app.use(cors());
app.get('/', (req, res) => {
    console.log(req.query);
    if (req.query.motion) motion = req.query.motion;
    if (req.query.sound) sound = req.query.sound;
    if (req.query.alarm) alarm = req.query.alarm;
    if (req.query.toggle) toggle = req.query.toggle;

    res.status(200).json({
        motion: motion,
        sound: sound,
        alarm: alarm,
        toggle: toggle
    })
});

app.listen(port, () => console.log("Backend server live on " + port));
