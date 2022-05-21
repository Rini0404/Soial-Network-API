// TODO: DO ROUTING, GETS< POSTS< and suchas a server.js would need. HOOK UP MONGO DB REQ.
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-net', {
  useUnifiedTopology: true,
    useNewUrlParser: true,
      // useFindAndModify: false,
});

mongoose.set('debug', true);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
