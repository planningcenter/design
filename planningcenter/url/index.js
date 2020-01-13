export default env => appName => {
  if (!(env && appName)) return;

  switch (env) {
    case "production":
      return `https://${appName}.planningcenteronline.com`;
    case "staging":
      return `https://${appName}-staging.planningcenteronline.com`;
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

      return `http://${appName}.pco.${tld}`;
    case "test":
      return `http://${appName}.pco.test`;
    default:
      return `http://${appName}.planningcenteronline.com`;
  }
};
