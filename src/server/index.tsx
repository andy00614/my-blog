import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '@/Layout';
import { routers } from '../routes';
import { matchRoutes } from 'react-router-config';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
	const matchedRouter = matchRoutes(routers, req.path);
	const match = matchedRouter[0].match;
	const loadData = matchedRouter[0].route.loadData.bind(this, match);
	loadData().then((response) => {
		const css = new Set(); // CSS for all rendered React components
		const insertCss = (...styles) => styles.forEach((style) => css.add(style._getCss()));
		const data = response;
		const content = renderToString(
			<Layout propsData={data} req={req} type="server" insertCss={insertCss} />
		);
		res.send(`<html>
    <head>
        <meta name="referrer" content="no-referrer" />
        <title>ssr</title>
        <link href='https://fonts.googleapis.com/css?family=Shadows Into Light' rel='stylesheet'>
        <style>${[...css].join('')}</style>
        
        <body>
        <div id="root">${content}</div>
        <script>window.ctx=${JSON.stringify({ url: match.url, data })}</script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.core.js"></script>
        <script src="/bundle.js"></script>
        </body>
      </head>
    </html>`);
	});
});

app.listen(7012);
