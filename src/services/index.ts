import request from '@/utils/request';

export const getArticles = async () => {
  const data = await request('/getList')
  return data
};
