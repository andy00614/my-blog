import List from '@/components/List';
import Article from '@/components/Article';
import axios from 'axios';
import { loadList } from './components/List';

export const routers = [
	{
		path: '/',
		component: List,
		key: 'home',
		exact: true,
		loadData: loadList
	},
	{
		path: '/article/:articleId',
		component: Article,
		key: 'Article',
		loadData: Article.loadArticle
	}
];
