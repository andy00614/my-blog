import React from 'react';
import styles from './styles.scss';

const Hello: React.FC<{}> = (props) => {
	return (
		<div className={styles.container}>
			<main className={styles.inner}>
				<header className={styles.header}>
					<h1 className={styles.name}>Andy Zhang</h1>
				</header>
				<p className={styles.desc}>Im andy</p>
				<div>{props.children}</div>
			</main>
		</div>
	);
};
export default Hello;
