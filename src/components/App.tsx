import React from 'react';
import s from './styles.scss';
import useStyles from 'isomorphic-style-loader/useStyles';
import { useHistory } from 'react-router-dom';
import { useInitialState } from '@/utils/hooks';

const Hello: React.FC<{}> = (props) => {
	useStyles(s);
	const history = useHistory();

	const comeHome = () => {
		history.push('/');
	};

	return (
		<div className={s.container}>
			<main className={s.inner}>
				<header className={s.header}>
					<h1 className={s.name} onClick={comeHome}>
						Andy00614-Blog
					</h1>
				</header>
				<div className={s.content}>{props.children}</div>
				<footer>
					<a href="mailto:andy00614@163.com">email</a>
					<span> • </span>
					<a href="https://github.com/andy00614">github</a>
					<span> • </span>
					<a href="https://stackoverflow.com/users/10517346/andy">stack overflow </a>
				</footer>
			</main>
		</div>
	);
};
export default Hello;
