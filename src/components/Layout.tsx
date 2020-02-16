import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routers } from '../routes';
import App from './App';

function Layout() {
	return (
		<div>
			<App>
				<BrowserRouter>
					<Switch>
						{routers.map((item) => (
							<Route
								component={item.component}
								path={item.path}
								key={item.key}
								exact={item.exact}
							/>
						))}
					</Switch>
				</BrowserRouter>
			</App>
		</div>
	);
}
export default Layout;
