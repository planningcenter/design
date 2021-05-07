export type Environment = "production" | "staging" | "development" | "test";
export type Product =
  | "api"
  | "accounts"
  | "calendar"
  | "check-ins"
  | "giving"
  | "groups"
  | "publishing"
  | "registrations"
  | "services";

export default (env: Environment) => (productName: Product) => {
  if (!(env && productName)) return;

  switch (env) {
    case "production":
      return `https://${productName}.${domain()}`;
    case "staging":
      return `https://${productName}-staging.${domain()}`;
    case "development":
      let tld = "test";

      try {
        tld = location.hostname.match(/\pco\.(\w+)$/)[1];
      } catch (error) {
        // don't show warning in Topbar's local dev env
        if (location.hostname !== "localhost") {
          console.error(`${location.hostname} is not a supported dev TLD`);
        }
      }

      return `http://${productName}.pco.${tld}`;
    case "test":
      return `http://${productName}.pco.test`;
    default:
      return `http://${productName}.${domain()}`;
  }
};

const domain = () => {
  const result = location.hostname.match(/planningcenter(online)?.com/);

  if (result === null) {
    return "planningcenteronline.com";
  } else {
    return result[0];
  }
};
