export type Fetch = typeof fetch;

export const defaultFetch: Fetch = (url, options) => {
  return fetch(url, { credentials: "include", mode: "cors", ...options });
};

export default function apiRequest(
  fetch: Fetch,
  url: string,
  { method = "GET", data = null } = {}
): Promise<{ response: Response; json: any; ok: boolean }> {
  const options: RequestInit = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method,
    redirect: "follow",
  };

  if (data && method !== "GET") {
    options.body = JSON.stringify(data);
  }

  return fetch(url, options).then(
    (response) =>
      response
        .json()
        .then((json) => ({ response, json, ok: response.ok }))
        .catch(() => ({ response, json: null, ok: response.ok })),
    (e) => {
      console.warn(e);

      return { response: null, json: null, ok: false };
    }
  );
}
