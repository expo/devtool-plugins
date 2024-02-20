#!/usr/bin/env node
const path = require('path');
const { createRequestHandler } = require('@expo/server/adapter/express');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const WEBUI_ROOT = path.resolve(__dirname, '../../webui');
const CLIENT_BUILD_DIR = path.join(WEBUI_ROOT, 'dist/client');
const SERVER_BUILD_DIR = path.join(WEBUI_ROOT, 'dist/server');
const app = express();
app.use(compression());
// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by');
process.env.NODE_ENV = 'production';
app.use(express.static(CLIENT_BUILD_DIR, {
    maxAge: '1h',
    extensions: ['html'],
}));
app.use(morgan('tiny'));
app.all('*', createRequestHandler({
    build: SERVER_BUILD_DIR,
}));
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
//# sourceMappingURL=bin.js.map