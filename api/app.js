const express = require("express");
const app = express();
const formidable = require("formidable");
const mv = require("mv");
const path = require("path");
const cors = require("cors");
const PORT = 3500;

app.use(express.json());
// app.use(express.urlencoded({ extended: true })); ::: if this middleware active, won't run
app.use(cors());

app.post("/upload", (req, res) => {
    const form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        // property same as name input file ( my input file named file )
        const file = files.file;

        if (typeof file != "undefined") {
            mv(file.filepath, path.join(__dirname, "./uploads/" + file.originalFilename), function (err) {
                if (err) console.error(`[x] Error Formidable: ${err}`);
            });
        }
    });

    res.write("File uploaded and moved!");
    res.end();
});

app.listen(PORT, () => console.log(`running on port ${PORT}...`));
