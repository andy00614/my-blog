import React, { useState, useEffect } from 'react';
import s from './index.scss';
import useStyles from 'isomorphic-style-loader/useStyles';
import { useHistory } from 'react-router-dom';
import { getArticles } from '@/services';
import { ListType } from './type';
import moment from 'moment';
import { useInitialState } from '@/utils/hooks';

interface Iprops {
	data: ListType[];
}
const List: React.FC<Iprops> = (props) => {
	useStyles(s);
	const history = useHistory();
	const turnArticlePage = (id: string) => {
		history.push(`/article/${id}`);
	};
	const { data: list } = useInitialState([], props.data, getArticles);

	return (
		<div className={s.container}>
			<div className={s.desc}>
				Everybody wants to be a hero, but nobody wants to start from zero...
			</div>

			{list.map((item) => (
				<div key={item.title} className={s.article}>
					<div className={s.time}>{moment(item.time).format('YYYY/MM/DD')}</div>
					<div className={s.title} onClick={() => turnArticlePage(item.articleId)}>
						{item.title}
					</div>
				</div>
			))}
		</div>
	);
};
export default List;
export const loadList = async () => {
	const data = getArticles();
	return data;
};
