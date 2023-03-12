export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a0db5e8d.js","imports":["_app/immutable/entry/start.a0db5e8d.js","_app/immutable/chunks/index.c5da838d.js","_app/immutable/chunks/singletons.2b01f444.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.4f1c1f55.js","imports":["_app/immutable/entry/app.4f1c1f55.js","_app/immutable/chunks/index.c5da838d.js"],"stylesheets":[],"fonts":[]}},
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
