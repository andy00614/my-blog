import React from 'react';
import s from './styles.scss';
import useStyles from 'isomorphic-style-loader/useStyles'

const Hello: React.FC<{}> = (props) => {
	useStyles(s)
	return (
		<div className={s.container}>
			<main className={s.inner}>
				<header className={s.header}>
					<h1 className={s.name}>Andy</h1>
				</header>
				<p className={s.desc}>Everybody wants to be a hero, but nobody wants to start from zero</p>
				<div>{props.children}</div>
			</main>
		</div>
	);
};
export default Hello;
