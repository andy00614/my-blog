import React from 'react';

function Content(props) {
	return (
		<div>
			Content
			{props.data.map((item) => (
				<div key={item.title}>{item.title}</div>
			))}
		</div>
	);
}
export default Content;
