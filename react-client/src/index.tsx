import express from 'express';
import cors from 'cors';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactPage from './reactpage';

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// root.render(
//     <ReactPage name='John' text='Welcome to the future' />
// );

const app = express();
const {
  PORT = 3000,
} = process.env;
app.use(cors());
app.use(express.static('./build/'));

app.listen(PORT, () => {
  console.log('server started at http://localhost:'+PORT);
});