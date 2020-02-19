import React, { useState } from 'react';
import s from './index.scss';
import useStyles from 'isomorphic-style-loader/useStyles';
import { useHistory } from 'react-router-dom'
import { getArticles } from '@/services'
import { inititalData } from '@/utils/initial'


export default (props) => {
	useStyles(s);
	const history = useHistory()
	const initialData = inititalData([],props.data)
	const turnArticlePage = (id:string) => {
		history.push(`/article/${id}`)
	}
	const [list,setList] = useState(initialData)
	console.log(list)

	return (
		<div className={s.container}>
			<div className={s.desc}>
				Everybody wants to be a hero, but nobody wants to start from zero
			</div>

			{list.map((item) => (
				<div key={item.title} className={s.article}>
					<div className={s.time}>{item.time}</div>
					<div className={s.title} onClick={() => turnArticlePage(item.articleId)}>{item.title}</div>
				</div>
			))}
		</div>
	);
};

export const loadList = async () => {
	const data = getArticles();
	return data
}