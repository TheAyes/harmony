import { component$, Slot, useContext, useTask$ } from "@builder.io/qwik";
import { storeContext } from "~/components/store";

export const ThemeProvider = component$(() => {
	const userData = useContext(storeContext);

	useTask$(async ({ track }) => {
		const newData = track(userData);

		const availableThemes = import.meta.glob("../../themes/*/index.scss");
		for (const theme in availableThemes) {
			const pattern = /themes\/(\w+)/;

			const trimmedTheme = pattern.exec(theme)?.[1] ?? "dark";
			console.log(trimmedTheme);
		}

		import(/* @vite-ignore */ `../../themes/${newData.theme}/index.scss`);
	});

	return (
		<>
			<Slot />
		</>
	);
});
