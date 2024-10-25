import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./styles.scss?inline";

export const Avatar = component$(() => {
	useStylesScoped$(styles);

	return (
		<figure class="avatar">
			<figcaption></figcaption>
			<span class="status"></span>
		</figure>
	);
});
