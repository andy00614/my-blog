// 如果是服务端渲染，那么初值(已经请求来值了，赋给state)
// 如果是客户端渲染，那会读script里的值，免去首次渲染
export const inititalData = (inital, injection) => {
	let initalData = inital;
	if (typeof window !== 'undefined') {
		initalData = (window as any).ctx;
	} else {
		initalData = injection;
	}
	return initalData;
};
