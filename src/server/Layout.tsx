import React from 'react';
import { StaticRouter, Route, Switch, Link } from 'react-router-dom';
import { routers } from '../routes';

function Layout(props) {
	return (
		<div>
			<StaticRouter location={props.req.path} context={{}}>
				<Link to="/content">content</Link>
				<Link to="/">Home</Link>
				<Switch>
					{routers.map((item) => (
						<Route path={item.path} key={item.key} exact={item.exact}>
							<item.component data={props.data} />
						</Route>
					))}
				</Switch>
			</StaticRouter>
		</div>
	);
}
export default Layout;
