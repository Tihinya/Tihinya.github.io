declare module "astro:actions" {
	type Actions = typeof import("/home/tihinya/Programming/Tihinya.github.io/src/actions")["server"];

	export const actions: Actions;
}