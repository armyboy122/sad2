const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Bit is Alive!'));

app.listen(port, () => console.log(`Bit is listening to http://localhost:${port}`));