import * as request from "superagent";

export default (
  url: string,
  cb: any,
  handleError = (err) => {
    console.warn(err);
  },
) =>
  request
    .get(url)
    .withCredentials()
    .end((err, res) => {
      if (err || !res.ok) {
        return handleError(err);
      }

      return cb(res.body);
    });
