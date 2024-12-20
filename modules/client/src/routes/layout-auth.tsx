import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { createClient } from "@harmony/shared";
import { LOGIN_REDIRECT } from "@harmony/shared/src/utils/constants";

import styles from "./layout-auth.scss?inline";

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.dev/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5
	});
};

export { useLoginFormLoader } from "@harmony/components";

export const onRequest: RequestHandler = async (requestEvent) => {
	const client = createClient(requestEvent);

	const { data: sessionData, error: accountError } = await client.auth.getSession();
	if (sessionData.session && !accountError) throw requestEvent.redirect(LOGIN_REDIRECT, "/");
};

export default component$(() => {
	useStyles$(styles);

	return (
		<>
			<Slot />
		</>
	);
});
