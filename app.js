const express = require('express'),
      app = express(),
      path = require('path'),
      PORT = process.env.PORT || 5000;
      app.use(express.static(path.join(__dirname)));

      app.get("/", (req, res) => {
          res.sendFile(__dirname + '/index.html');
      });
      app.listen(PORT, () => {
          console.log('listening on: ', PORT);
      });