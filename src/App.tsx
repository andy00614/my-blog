import React from 'react';
import Button from '@/components/Button';

export interface HelloProps {
	// compiler: string;
	// framework: string;
	style?: React.CSSProperties;
}

interface AnimalDes {
	name: string;
	title: string;
}

type AnimalType = 'cat' | 'dog' | 'frog';
const AnimalMap: Record<AnimalType, AnimalDes> = {
	cat: { name: '猫', title: 'cat' },
	dog: { name: '狗', title: 'dog' },
	frog: { name: '青蛙', title: 'frog' }
};

const Hello = (props: HelloProps) => {
	// console.log(111)
	let foo = 1;
	const b = foo ?? 3;
	function handleClick() {}
	if (foo === 2) {
		foo = 2;
	}
	return (
		<h1 onClick={handleClick}>
			<Button />
			Hello from2133321
		</h1>
	);
};
export default Hello;
