// 如果是服务端渲染，那么初值(已经请求来值了，赋给state)
// 如果是客户端渲染，那会读script里的值，免去首次渲染
// todo把state也引进来抽离成hooks
export function getInitialData<T> (inital:T, injection):T {
	let initialData = inital
	// judge server or client
	if (typeof window !== 'undefined') {
		// client
		const windowUrl = (window as any).ctx.url;
		const { pathname } = window.location;
		if(windowUrl === pathname) {
			initialData = (window as any).ctx.data
		} else {
			initialData = inital
		}
	} else {
		// server
		initialData = injection;
	}
	return initialData
};
