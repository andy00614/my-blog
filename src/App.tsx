import * as React from 'react';

export interface HelloProps {
	// compiler: string;
	// framework: string;
	style?: React.CSSProperties;
}

const Hello = (props: HelloProps) => {
	console.log(11)
	return (
		<h1>
			Hello from
		</h1>
	);
};
export default Hello;
