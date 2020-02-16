import React from 'react';
import { StaticRouter, Route } from 'react-router-dom';
import { routers } from '../routes';
import { matchRoutes } from 'react-router-config';

export function render(req, res) {
	const matchedRouter = matchRoutes(routers, req.path);
	const targetComponent = matchedRouter[0].route.component;
	const loadData = matchedRouter[0].route.loadData;
	return { targetComponent, loadData };
}
