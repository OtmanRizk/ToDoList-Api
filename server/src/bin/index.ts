#!/usr/bin/env node

import app from "../app";
import debug from 'debug';
import http from 'http';

function normalizeport(val: string): number | string | false{
  const port = parseInt(val,10);
  if(isNaN(port)) return val;
  if(port >= 0) return port;
  return false;
}

const port = normalizeport( process.env.PORT || '3400');
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});