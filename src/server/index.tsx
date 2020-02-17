import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '@/Layout';
import { routers } from '../routes';
import { matchRoutes } from 'react-router-config';

const app = express();

app.use(express.static('public'))


app.get('*', (req, res) => {
	const matchedRouter = matchRoutes(routers, req.path);
	const loadData = matchedRouter[0].route.loadData;
	loadData().then((response) => {
		const data = response.data.data;
		const content = renderToString(<Layout propsData={data} req={req} type="server" />);
		res.send(`<html>
    <head>
        <title>ssr</title>
        <body>
          <h2>hello ssr</h2>
          <div id="root">${content}</div>
          <script src="/index.js"></script>
        </body>
      </head>
    </html>`);
	});
});

app.listen(7012);
