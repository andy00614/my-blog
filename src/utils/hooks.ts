import React, { useEffect, useState } from 'react';
import { getInitialData } from './initial';
import Lodash from 'lodash';

export const useInitialState = (initalData: any, loadData: any, fetchFn: Function) => {
	// eslint-disable-next-line no-constant-condition
	const env: 'csr' | 'ssr' = typeof window ? 'csr' : 'ssr';
	const envData = getInitialData(initalData, loadData);
	const [data, setData] = useState(envData);

	// 肯定csr
	useEffect(() => {
		const windowUrl = (window as any).ctx.url;
		const { pathname } = window.location;
		const whetherReFetch = (fetchData): boolean => {
			return windowUrl !== pathname || !Lodash.isEqual(fetchData, (window as any).ctx.data);
		};
		fetchFn().then((res) => {
			if (whetherReFetch(res)) {
				setData(res);
			}
		});
	}, []);

	return {
		data,
		setData
	};
};
