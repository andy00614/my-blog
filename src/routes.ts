import App from '@/components/demo';
import Content from '@/components/content';
import axios from 'axios';

export const routers = [
	{
		path: '/',
		component: App,
		key: 'home',
		exact: true,
		loadData() {
			return axios.get('http://39.105.148.23:8000/');
		}
	},
	{
		path: '/content',
		component: Content,
		key: 'content',
		loadData() {
			return axios.get('http://39.105.148.23:8000/');
		}
	}
];
