import request from '@/utils/request';
import { ListType } from '../components/List/type';

interface ContentType {
	id: string;
	time: number;
	title: string;
	articleId: string;
	content: string;
}

export const getArticles = async (): Promise<ListType[]> => {
	const data = await request('/getList');
	return (data as any as ListType[]);
};

export const getConent = async (id): Promise<ContentType> => {
	const data = await request.get('/searchContent', {
		params: {
			id
		}
	});
	return (data as any as ContentType);
};
