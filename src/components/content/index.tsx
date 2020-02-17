import React, { useState, useEffect } from 'react';
import axios from 'axios'
import s from './index.css'

function Content(props) {
	const [list,setList] = useState(props.data || [])
	useEffect(() => {
		if(!props.data || props.data.length === 0) {
			axios.get('http://39.105.148.23:8000/').then(res => {
				setList(res.data.data)
			})
		}
	},[])
	
	return (
		<div className={s.container}>
			Content
			{list.map((item) => (
				<div key={item.title}>{item.title}</div>
			))}
		</div>
	);
}
export default Content;
