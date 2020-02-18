import React, { useState, useEffect } from 'react';
import axios from 'axios'
import s from './index.scss'
import useStyles from 'isomorphic-style-loader/useStyles'
import { useParams } from 'react-router-dom'

function Content(props) {
	const { articleId } = useParams()
	let initalData = []
	if(typeof window !== 'undefined') {
		initalData = (window as any).ctx
	} else {
		initalData = props.data
	}
	useStyles(s)
	const [list,setList] = useState(initalData)
	useEffect(() => {
		if(initalData.length === 0) {
			axios.get('http://39.105.148.23:8000/').then(res => {
				setList(res.data.data)
			})
		}
	},[])
	
	return (
		<div className={s.container}>
			111
			{articleId}
			{list.map((item) => (
				<div key={item.title}>{item.title}</div>
			))}
		</div>
	);
}
export default Content;
