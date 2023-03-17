import { NextFunction, Response, Request } from 'express';
import WebReactPage from './webreactpage';

export default function renderPage(
    req: Request,
    res: Response,
    next: NextFunction
  ) 
  {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>react-client</title>
        <script type="module" src="/webreactpage.js"/>        
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <h1>Content Below</h1>
        <web-react-page name="John" text="This is from a web component"></web-react-page>            
      </body>
    </html>
    `);
  }