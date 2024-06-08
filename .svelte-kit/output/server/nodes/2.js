import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CyPDOaM0.js","_app/immutable/chunks/scheduler.RVfF2FVF.js","_app/immutable/chunks/index.CVBwhLaf.js","_app/immutable/chunks/P.DuwIkJLv.js"];
export const stylesheets = [];
export const fonts = [];
