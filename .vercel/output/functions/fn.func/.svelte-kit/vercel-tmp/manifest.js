export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","faviconold.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a41a8722.js","imports":["_app/immutable/entry/start.a41a8722.js","_app/immutable/chunks/index.c5da838d.js","_app/immutable/chunks/singletons.6887a5fa.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.ba87634a.js","imports":["_app/immutable/entry/app.ba87634a.js","_app/immutable/chunks/index.c5da838d.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
