const express = require('express');
const cors = require('cors');
const { generateMeta } = require('./controllers/aiController');

const app = express();

app.use(express.json());

app.use(cors());

app.listen(4000, () => {console.log('Cors enabled web server listening to port 4000')});
app.post('/api/aiprompt', generateMeta);

