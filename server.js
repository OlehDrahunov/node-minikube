'use strict';

const express = require('express');

const app = express();


const PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello World');
});

app.get('/healthz', (req, res) => {
  res.status(200).send('ok');
});

app.get('/ready', (req, res) => {
  e
  res.status(200).send('ready');
});

const server = app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT} (pid=${process.pid})`);
});


const shutdown = (signal) => {
  console.log(`Received ${signal}, shutting down...`);
  server.close((err) => {
    if (err) {
      console.error('Error during server close', err);
      process.exit(1);
    }
    console.log('Server closed.');
    process.exit(0);
  });

  setTimeout(() => {
    console.warn('Forcing shutdown');
    process.exit(1);
  }, 10000).unref();
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
