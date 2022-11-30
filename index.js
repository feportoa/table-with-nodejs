const express = require('express');
const extension = express();
const path = require('path');
const bodyParser = require('body-parser');

// Config
   // Body Parser
      extension.use(bodyParser.urlencoded({extended: false}));
      extension.use(bodyParser.json());
   // Static Files (CSS)
      extension.use(express.static(path.join(__dirname, "public")));

const PORT = 1779;
const HOST = '0.0.0.0';

extension.get('/', (req, res) =>{
   res.sendFile(path.join(__dirname, './layout/index.html'));
});

console.log('Server running\n');

extension.listen(PORT, HOST);
