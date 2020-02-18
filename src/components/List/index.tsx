import React from 'react';
import s from './index.scss'
import useStyles from 'isomorphic-style-loader/useStyles'

const list = [
	{
		time: '2020/01/01',
		title: 'Fast and maintainable patterns for fetching from a database'
	},
	{
		time: '2020/01/02',
		title: 'React Conf: “Building a Custom React Renderer”'
	},
	{
		time: '2020/01/03',
		title: ' Yak shaving and fixing'
	},
	{
		time: '2020/01/04',
		title: 'Type errors with inference need stacks'
	}
];

export default (props) => {
	useStyles(s)
	return <div className={s.container}>
		{
			list.map(item => (
				<div key={item.title} className={s.article}>
					<div className={s.time}>{item.time}</div>
					<div className={s.title}>{item.title}</div>
				</div>
			))
		}
	</div>
};
