import List from '@/components/List';
import Article from '@/components/Article';
import axios from 'axios';

export const routers = [
	{
		path: '/',
		component: List,
		key: 'home',
		exact: true,
		loadData() {
			return axios.get('http://39.105.148.23:8000/');
		}
	},
	{
		path: '/article/:articleId',
		component: Article,
		key: 'Article',
		loadData() {
			return axios.get('http://39.105.148.23:8000/');
		}
	}
];
