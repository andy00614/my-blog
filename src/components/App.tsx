import React from 'react';
import s from './styles.scss';
import useStyles from 'isomorphic-style-loader/useStyles'
import { useHistory } from "react-router-dom";
import { useInitialState } from '@/utils/hooks';


const Hello: React.FC<{}> = (props) => {
	useStyles(s)
	const history = useHistory()

	const comeHome = () => {
		history.push('/')
	}
	
	return (
		<div className={s.container}>
			<main className={s.inner}>
				<header className={s.header}>
					<h1 className={s.name} onClick={comeHome}>Andy</h1>
				</header>
				<div>{props.children}</div>
			</main>
		</div>
	);
};
export default Hello;
