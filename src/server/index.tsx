import express from 'express';
import { renderToString } from 'react-dom/server';
import Demo from '@/components/demo';
import React from 'react';
import { render } from './render';
import Layout from './Layout';

const app = express();

app.get('*', (req, res) => {
	const { targetComponent: TargetComponent, loadData } = render(req, res);
	// @ts-ignore
	loadData().then((response) => {
		const data = response.data.data;
		// @ts-ignore
		const content = renderToString(<Layout data={data} req={req} />);
		res.send(content);
	});
});

app.listen(7012);
