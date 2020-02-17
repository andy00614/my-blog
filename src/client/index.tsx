import ReactDOM from 'react-dom';
import React from 'react';
import Layout from '@/Layout';
import StyleContext from 'isomorphic-style-loader/StyleContext';

const insertCss = (...styles) => {
	const removeCss = styles.map((style) => {return style} );
	return () => removeCss.forEach((dispose) => dispose());
};
ReactDOM.hydrate(
	<StyleContext.Provider value={{ insertCss }}>
		<Layout type="client" />
	</StyleContext.Provider>,
	document.getElementById('root')
);
