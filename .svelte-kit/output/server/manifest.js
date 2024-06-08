export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","figma/Depository.png","figma/Investments.png","figma/Main Dashboard.png","figma/Modules.png","figma/Projection.png","figma/cluster.png","kuber-logos.png","kuber-logos_white.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.CVVXNVo4.js","app":"_app/immutable/entry/app.C6ovyaEJ.js","imports":["_app/immutable/entry/start.CVVXNVo4.js","_app/immutable/chunks/entry.CogYcV7c.js","_app/immutable/chunks/scheduler.RVfF2FVF.js","_app/immutable/chunks/index.BmElZ1zV.js","_app/immutable/entry/app.C6ovyaEJ.js","_app/immutable/chunks/scheduler.RVfF2FVF.js","_app/immutable/chunks/index.CVBwhLaf.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
