export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.1efa6256.js","imports":["_app/immutable/entry/start.1efa6256.js","_app/immutable/chunks/index.c5da838d.js","_app/immutable/chunks/singletons.a12dad0b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.2615c505.js","imports":["_app/immutable/entry/app.2615c505.js","_app/immutable/chunks/index.c5da838d.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
