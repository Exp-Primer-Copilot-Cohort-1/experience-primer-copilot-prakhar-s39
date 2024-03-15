// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error reading file');
            return;
        }
        res.send(data);
    });
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error reading file');
            return;
        }
        const comments = JSON.parse(data);
        comments.push(comment);
        fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error writing file');
                return;
            }
            res.send('Comment added');
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

```javascript
// Path: index.js
// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error reading file');
            return;
        }
        res.send(data);
    });
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error reading file');
            return;
        }
        const comments = JSON.parse(data);
        comments.push(comment);
        fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error writing file');
                return;
            }
            res.send('Comment added');
        });
    });
});

app.listen(3000, () => {

