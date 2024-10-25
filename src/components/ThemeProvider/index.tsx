import { component$, Slot, useContext, useTask$ } from "@builder.io/qwik";
import { storeContext } from "../Store";

export const ThemeProvider = component$(() => {
	const userData = useContext(storeContext);

	useTask$(async ({ track }) => {
		const newData = track(userData);

		import(/* @vite-ignore */ `../../themes/${newData.theme}/index.scss`);
	});

	useTask$(() => {
		const availableThemes = import.meta.glob("../../themes/*/index.scss", { query: "?inline" });
		console.log(availableThemes);

		for (const theme in availableThemes) {
			const pattern = /themes\/(\w+)/;

			const trimmedTheme = pattern.exec(theme)?.[1] ?? "dark";

			userData.possibleThemes.push(trimmedTheme);
		}

		console.log(userData.possibleThemes);
	});

	return (
		<>
			<Slot />
		</>
	);
});
