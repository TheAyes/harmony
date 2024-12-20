import { type CookieValue, type RequestEventBase, server$ } from "@builder.io/qwik-city";
import { createBrowserClient, createServerClient, isBrowser } from "@supabase/ssr";
import type { Database } from "../types";
import { getSupabaseProfileByName } from "./supabaseClient";

const convertRecordToArray = (record: Record<string, CookieValue>): { name: string; value: string }[] => {
	return Object.entries(record).map(([key, value]) => ({ name: key, value: value.value }));
};

export const createClient = (requestEvent: RequestEventBase) => {
	return isBrowser()
		? createBrowserClient<Database>(
				requestEvent.env.get("PUBLIC_SUPABASE_URL")!,
				requestEvent.env.get("PUBLIC_SUPABASE_ANON_KEY")!
			)
		: createServerClient<Database>(
				requestEvent.env.get("PUBLIC_SUPABASE_URL")!,
				requestEvent.env.get("PUBLIC_SUPABASE_ANON_KEY")!,
				{
					cookies: {
						getAll: () => convertRecordToArray(requestEvent.cookie.getAll()),
						setAll: (cookiesToSet) => {
							cookiesToSet.forEach((cookie) => {
								requestEvent.cookie.set(cookie.name, cookie.value, cookie.options);
							});
						}
					}
				}
			);
};

export const getServerProfileByName = server$(function (accountName: string) {
	// @ts-ignore - Used for "this" as it occasionally decides to just error out?
	return getSupabaseProfileByName(this, accountName);
});
