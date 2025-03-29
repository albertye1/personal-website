// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			colorTheme: import('$lib/types').ColorTheme
		}
		// interface Platform {}
		interface Session {
			colorTheme: import('$lib/types').ColorTheme
		}
		// interface Stuff {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
