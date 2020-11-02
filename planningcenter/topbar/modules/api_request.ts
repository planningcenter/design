export type ApiRequest = (
  url: string,
  options?: {
    data?: object | null;
    onError?: (error: any) => { response: null; json: null; ok: false };
  } & RequestInit
) => Promise<{ response: Response; json: any; ok: boolean }>;

function handleError(e) {
  console.warn(e);

  return { response: null, json: null, ok: false };
}

const apiRequest: ApiRequest = (
  url,
  {
    method = "GET",
    data = null,
    headers = {},
    onError = handleError,
    ...rest
  } = {}
) => {
  const requestHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...headers,
  };

  const options: RequestInit = {
    credentials: "include",
    headers: requestHeaders,
    method,
    mode: "cors",
    redirect: "follow",
    ...rest,
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
    onError
  );
};

export default apiRequest;
