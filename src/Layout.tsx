import React from 'react';
import { StaticRouter, BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { routers } from './routes';

interface IProps {
	propsData?: any;
	type: 'server' | 'client';
	[props: string]: any;
}

const Layout: React.FC<IProps> = (props) => {
	const innerRoute = () => (
		<>
			<Link to="/content">content</Link>
			<Link to="/">Home</Link>
			<Switch>
				{routers.map((item) => {
					console.log('hahaha',item.path)
					return (
						<Route path={item.path} key={item.key} exact={item.exact}>
							<item.component data={props.propsData} />
						</Route>
					);
				})}
			</Switch>
		</>
	);
	return (
		<div>
			{props.type === 'client' ? (
				<BrowserRouter>{innerRoute()}</BrowserRouter>
			) : (
				<StaticRouter location={props.req.path} context={{}}>
					{innerRoute()}
				</StaticRouter>
			)}
		</div>
	);
};
export default Layout;
