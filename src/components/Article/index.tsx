import React, { useState, useEffect } from 'react';
import axios from 'axios';
import s from './index.scss';
import useStyles from 'isomorphic-style-loader/useStyles';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { inititalData } from '@/utils/initial'

const STR = ``;
function Content(props) {
	const { articleId } = useParams();
	let initalData = inititalData('',props.data)
	useStyles(s);
	const [list, setList] = useState(initalData);
	useEffect(() => {
		if (initalData.length === 0) {
			axios.get('http://39.105.148.23:8000/').then((res) => {
				setList(res.data.data);
			});
		}
	}, []);

	return (
		<div className={s.container}>
			<ReactMarkdown source={STR} escapeHtml={false}/>
		</div>
	);
}
export default Content;

Content.loadArticle = async (match) => {
	console.log(match)
	return 111
}
