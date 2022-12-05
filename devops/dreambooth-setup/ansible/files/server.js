// This is a simple express server intended to expose the dreambooth server
// It executes a script to train and return a response from dreambooth
// It also sends back the generated Images from dreambooth as a zipped file to be saved to s3 by another API endpoint


const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const exec = require('child_process').exec;
const fs = require('fs');
const axios = require('axios');

const jsonParser = bodyParser.json()

const PORT = 8000;

const app = express();

app.use(jsonParser);

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to noxus. Our dreambooth server"
    })
});

app.get('/zip', (req, res) => {

    const filename = 'file', format = 'zip';
    let content;
    const pathToZippedImages = '/home/ubuntu/Dreambooth-server/zipped-images.zip'; // Change later when the path is known
    try {
        const data = fs.readFileSync(pathToZippedImages, 'binary');
        console.log(data);
        content = data
    } catch (err) {
        console.error("error: ", err);
    }

    res.set({
        "Content-Length": Buffer.byteLength(content),
        "Content-Type": "text/plain",
        "Content-Disposition": `attachment; filename=${filename}.${format}`,
    });

    res.status(200).send(content.toString("hex"));
});


// To be implemented by Musa in python
// Should send zipped file to s3

app.post('/zip', async (req, res) => {
    console.log("zip POST route hit")
    const data = await axios.get('http://3.84.159.50/zip')

    fs.writeFile("new.zip", data.data, 'binary', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
    console.log("====Request =====\n", data)
    console.log("====\n File: \n======\n", req.file)
    res.send({ "message": "success", "data": `${data}` });
});


app.post('/', (req, res) => {

    console.log(req.body)

    const pathToTrainingScript = '/home/ubuntu/beginTraining.sh';

    const { email, img_class } = req.body;

    const uid = uuid.v4().toString().split('-')[0];

    exec(`${pathToTrainingScript} ${email} ${img_class} ${uid}`, (error, stdout, stderr) => {
        console.log('stdout: \n' + stdout);
        console.log('stderr: ' + stderr);
        if (stderr !== null) {
            console.log(stderr)

            return res.status(500).json({
                message: `An error occcured while training your images`
            })
        }
        if (error !== null) {
            console.log('exec error: ' + error);

            return res.status(400).json({
                message: `An error occcured ==> ${error.message}`
            })
        }
    });

    return res.status(200).json({
        message: "Your images have begone training"
    })
});

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})


