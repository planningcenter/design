declare global {
  interface Window {
    Rails?: {
      csrfToken: () => string;
    };
  }
}

export type Fetch = typeof fetch;

export const defaultFetch: Fetch = (url, options) => {
  return fetch(url, { credentials: "include", mode: "cors", ...options });
};

export const railsCsrfFetch: Fetch = (url, { headers, ...rest }) => {
  return fetch(url, {
    headers: { ...headers, "X-CSRF-Token": inferRailsCsrfToken() },
    ...rest,
    credentials: "include",
    mode: "cors",
  });
};

function inferRailsCsrfToken(): string | null {
  return (
    window?.Rails?.csrfToken() ||
    document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute("content") ||
    null
  );
}

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
