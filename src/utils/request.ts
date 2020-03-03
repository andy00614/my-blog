import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://39.105.148.23:3000/'
});

interface Response {
	errno: number;
	message: string;
	data: any;
}

instance.interceptors.response.use(({ data }: { data: Response }) => {
	if (data.errno === 0) {
		return data.data;
	}
	throw data;
});

export default instance;
