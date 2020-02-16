import express from 'express';
import { renderToString } from 'react-dom/server';
import Demo from '@/components/demo';
import React from 'react';

const app = express();

app.get('*', (req, res) => {
	const content = renderToString(<Demo />);
	res.send(content);
});

app.listen(7012);
