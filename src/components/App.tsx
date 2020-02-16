import React from 'react';
import styles from './styles.scss';

const Hello: React.FC<{}> = () => {
	return (
		<div className={styles.container}>
			<main className={styles.inner}>
				<header className={styles.header}>
					<h1 className={styles.name}>Andy Zhang</h1>
				</header>
				<p className={styles.desc}>
					I’m a software engineer. I build things to help people. Currently at Humu,
					previously manager of React at Facebook and engineer at Khan Academy.
				</p>
			</main>
		</div>
	);
};
export default Hello;
