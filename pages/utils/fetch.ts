import { getAccessToken } from "@auth0/nextjs-auth0";

const baseUrl = "http://localhost:3000";

export const fetcherClient = async (url: string) => {
  const res = await fetch(`${baseUrl}${url}`);
  return res.json();
};

export const fetcherServer = async (ctx: any, url: string) => {
  const accessToken = await getAccessToken(ctx.req, ctx.res);
  const res = await fetch(`${baseUrl}${url}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};
