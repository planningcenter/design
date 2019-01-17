const pcoUrl = require("./");

test("defaults", () => {
  expect(pcoUrl()()).toBeUndefined();
});

test("production url", () => {
  const productionUrl = pcoUrl("production");

  expect(productionUrl("api")).toBe("https://api.planningcenteronline.com");
  expect(productionUrl("accounts")).toBe("https://accounts.planningcenteronline.com");
  expect(productionUrl("check-ins")).toBe("https://check-ins.planningcenteronline.com");
  expect(productionUrl("giving")).toBe("https://giving.planningcenteronline.com");
  expect(productionUrl("groups")).toBe("https://groups.planningcenteronline.com");
  expect(productionUrl("people")).toBe("https://people.planningcenteronline.com");
  expect(productionUrl("registrations")).toBe("https://registrations.planningcenteronline.com");
  expect(productionUrl("resources")).toBe("https://resources.planningcenteronline.com");
  expect(productionUrl("services")).toBe("https://services.planningcenteronline.com");
});

test("staging url", () => {
  const stagingUrl = pcoUrl("staging");

  expect(stagingUrl("api")).toBe("https://api-staging.planningcenteronline.com");
  expect(stagingUrl("accounts")).toBe("https://accounts-staging.planningcenteronline.com");
  expect(stagingUrl("check-ins")).toBe("https://check-ins-staging.planningcenteronline.com");
  expect(stagingUrl("giving")).toBe("https://giving-staging.planningcenteronline.com");
  expect(stagingUrl("groups")).toBe("https://groups-staging.planningcenteronline.com");
  expect(stagingUrl("people")).toBe("https://people-staging.planningcenteronline.com");
  expect(stagingUrl("registrations")).toBe("https://registrations-staging.planningcenteronline.com");
  expect(stagingUrl("resources")).toBe("https://resources-staging.planningcenteronline.com");
  expect(stagingUrl("services")).toBe("https://services-staging.planningcenteronline.com");
});

test("development url", () => {
  const developmentUrl = pcoUrl("development");

  expect(developmentUrl("api")).toBe("http://api.pco.test");
  expect(developmentUrl("accounts")).toBe("http://accounts.pco.test");
  expect(developmentUrl("check-ins")).toBe("http://check-ins.pco.test");
  expect(developmentUrl("giving")).toBe("http://giving.pco.test");
  expect(developmentUrl("groups")).toBe("http://groups.pco.test");
  expect(developmentUrl("people")).toBe("http://people.pco.test");
  expect(developmentUrl("registrations")).toBe("http://registrations.pco.test");
  expect(developmentUrl("resources")).toBe("http://resources.pco.test");
  expect(developmentUrl("services")).toBe("http://services.pco.test");
});

test("staging url", () => {
  const testUrl = pcoUrl("test");

  expect(testUrl("api")).toBe("http://api.pco.test");
  expect(testUrl("accounts")).toBe("http://accounts.pco.test");
  expect(testUrl("check-ins")).toBe("http://check-ins.pco.test");
  expect(testUrl("giving")).toBe("http://giving.pco.test");
  expect(testUrl("groups")).toBe("http://groups.pco.test");
  expect(testUrl("people")).toBe("http://people.pco.test");
  expect(testUrl("registrations")).toBe("http://registrations.pco.test");
  expect(testUrl("resources")).toBe("http://resources.pco.test");
  expect(testUrl("services")).toBe("http://services.pco.test");
});
