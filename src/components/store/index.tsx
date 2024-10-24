import { component$, createContextId, Slot, useContextProvider, useStore } from "@builder.io/qwik";

const initialState = {
	theme: "dark",
	possibleThemes: [] as string[]
};

export type TStore = typeof initialState;

export const storeContext = createContextId<TStore>("theme");

export const Store = component$(() => {
	const userData = useStore<TStore>(initialState);
	useContextProvider(storeContext, userData);
	return (
		<>
			<Slot />
		</>
	);
});
