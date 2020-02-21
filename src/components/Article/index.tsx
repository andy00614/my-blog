import React, { useState, useEffect } from 'react';
import axios from 'axios';
import s from './index.scss';
import useStyles from 'isomorphic-style-loader/useStyles';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
// import { inititalData } from '@/utils/initial';
import { getConent } from '@/services';
import { useInitialState } from '@/utils/hooks';
function Content(props) {
	useStyles(s);
	const { articleId } = useParams();
	let { data: content } = useInitialState('', props.data, () =>
		getConent(articleId).then((res) => res.content)
	);

	return (
		<div className={s.container}>
			<ReactMarkdown source={content} escapeHtml={true} />
		</div>
	);
}
export default Content;

Content.loadArticle = async (match) => {
	const articleId = match.params.articleId;
	const data: any = await getConent(articleId);
	if(!data) return ''
	return data.content;
};
