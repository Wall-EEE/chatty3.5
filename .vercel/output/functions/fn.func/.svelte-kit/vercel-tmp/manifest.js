export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.4aa5d5b8.js","imports":["_app/immutable/entry/start.4aa5d5b8.js","_app/immutable/chunks/index.c5da838d.js","_app/immutable/chunks/singletons.8ca22663.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.c98fb7b1.js","imports":["_app/immutable/entry/app.c98fb7b1.js","_app/immutable/chunks/index.c5da838d.js"],"stylesheets":[],"fonts":[]}},
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
