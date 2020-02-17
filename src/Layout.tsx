import React from 'react';
import { StaticRouter, BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { routers } from './routes';
import StyleContext from 'isomorphic-style-loader/StyleContext';

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
				<StyleContext.Provider value={{ insertCss:props.insertCss }}>
					<StaticRouter location={props.req.path} context={{}}>
						{innerRoute()}
					</StaticRouter>
				</StyleContext.Provider>
			)}
		</div>
	);
};
export default Layout;
