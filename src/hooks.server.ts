import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const { url } = event;
  console.debug("url", url.pathname);
  if (url.pathname !== "/") {
    console.log("Hello");
  } else if (url.pathname === "/") {
    console.debug("user is not connected and on root route, url: ", url);
    throw redirect(303, "/sign-in");
  }

  const response = await resolve(event);
  return response;
};
