import { component$, createContextId, Slot, useContextProvider, useStore } from "@builder.io/qwik";

const initialState = {
	theme: "light",
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
