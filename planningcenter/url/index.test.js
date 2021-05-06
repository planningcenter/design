const pcoUrl = require("./");

describe("When incomplete arguments given", () => {
  test("returns undefined when no arguments are given", () => {
    expect(pcoUrl()()).toBeUndefined();
  });

  test("returns undefined when only environment is given", () => {
    expect(pcoUrl("production")()).toBeUndefined();
    expect(pcoUrl("staging")()).toBeUndefined();
    expect(pcoUrl("development")()).toBeUndefined();
    expect(pcoUrl("test")()).toBeUndefined();
  });

  test("returns undefined when product name is given", () => {
    expect(pcoUrl()("sample-app-name")).toBeUndefined();
  });
});

describe("When no domain inferred", () => {
  describe("and given environment 'production'", () => {
    test("returns product url using 'https://{product-name}.planningcenteronline.com' scheme", () => {
      expect(pcoUrl("production")("accounts")).toBe(
        "https://accounts.planningcenteronline.com"
      );
    });
  });

  describe("and given environment 'staging'", () => {
    test("returns product url using 'https://{product-name}-staging.planningcenteronline.com' scheme", () => {
      expect(pcoUrl("staging")("accounts")).toBe(
        "https://accounts-staging.planningcenteronline.com"
      );
    });
  });
});

describe("When inferred domain is 'planningcenteronline.com'", () => {
  let previousLocation = window.location;

  beforeEach(() => {
    delete window.location;
    window.location = new URL("https://planningcenteronline.com");
  });

  afterEach(() => {
    delete window.location;
    window.location = previousLocation;
  });

  describe("and given environment 'production'", () => {
    test("returns product url using 'https://{product-name}.planningcenteronline.com' scheme", () => {
      pcoUrl("development");
      expect(pcoUrl("production")("accounts")).toBe(
        "https://accounts.planningcenteronline.com"
      );
    });
  });

  describe("and given environment 'staging'", () => {
    test("returns product url using 'https://{product-name}-staging.planningcenteronline.com' scheme", () => {
      expect(pcoUrl("staging")("accounts")).toBe(
        "https://accounts-staging.planningcenteronline.com"
      );
    });
  });
});

describe("When inferred domain is 'planningcenter.com'", () => {
  let previousLocation = window.location;

  beforeEach(() => {
    delete window.location;
    window.location = new URL("https://planningcenter.com");
  });

  afterEach(() => {
    delete window.location;
    window.location = previousLocation;
  });

  describe("and given environment 'production'", () => {
    test("returns product url using 'https://{product-name}.planningcenter.com' scheme", () => {
      expect(pcoUrl("production")("accounts")).toBe(
        "https://accounts.planningcenter.com"
      );
    });
  });

  describe("and given environment 'staging'", () => {
    test("returns product url using 'https://{product-name}-staging.planningcenter.com' scheme", () => {
      expect(pcoUrl("staging")("accounts")).toBe(
        "https://accounts-staging.planningcenter.com"
      );
    });
  });
});

/*
The develompent tests flip the concern order from `production|staging` intentionally.
They are both dynamic buth different in their approach.
`production|staging` allow allow `planningcenteronline.com` and `planningcenter.com`.
`development` is open-ended and supports any tld.
*/
describe("When given environment 'development'", () => {
  let previousLocation = window.location;

  describe("and inferred domain is pco.codes", () => {
    beforeEach(() => {
      delete window.location;
      window.location = new URL("http://pco.codes");
    });

    afterEach(() => {
      delete window.location;
      window.location = previousLocation;
    });

    test("returns product url using 'https://{product-name}.pco.codes' scheme", () => {
      expect(pcoUrl("development")("accounts")).toBe(
        "http://accounts.pco.codes"
      );
    });
  });

  describe("and inferred domain is pco.test", () => {
    beforeEach(() => {
      delete window.location;
      window.location = new URL("http://pco.test");
    });

    afterEach(() => {
      delete window.location;
      window.location = previousLocation;
    });

    test("returns product url using 'https://{product-name}.pco.test' scheme", () => {
      expect(pcoUrl("development")("accounts")).toBe(
        "http://accounts.pco.test"
      );
    });
  });

  describe("and inferred domain is localhost", () => {
    beforeEach(() => {
      delete window.location;
      window.location = new URL("http://localhost");
    });

    afterEach(() => {
      delete window.location;
      window.location = previousLocation;
    });

    test("returns product url using 'https://{product-name}.pco.test' scheme", () => {
      expect(pcoUrl("development")("accounts")).toBe(
        "http://accounts.pco.test"
      );
    });
  });
});

describe("When given environment 'test'", () => {
  test("development url", () => {
    expect(pcoUrl("test")("accounts")).toBe("http://accounts.pco.test");
  });
});

describe("Assorted smoke-tests", () => {
  let previousLocation = window.location;

  test.each([
    [
      "services",
      "production",
      "https://planningcenteronline.com",
      "https://services.planningcenteronline.com",
    ],
    [
      "api",
      "staging",
      "https://planningcenteronline.com",
      "https://api-staging.planningcenteronline.com",
    ],
    [
      "publishing",
      "production",
      "https://planningcenter.com",
      "https://publishing.planningcenter.com",
    ],
    [
      "check-ins",
      "staging",
      "https://planningcenter.com",
      "https://check-ins-staging.planningcenter.com",
    ],
    ["giving", "development", "http://pco.test", "http://giving.pco.test"],
    [
      "calendar",
      "development",
      "http://pco.codes",
      "http://calendar.pco.codes",
    ],
    [
      "registrations",
      "test",
      "http://pco.test",
      "http://registrations.pco.test",
    ],
    ["accounts", "test", "http://pco.test", "http://accounts.pco.test"],
  ])(
    "product %p, given %p, under domain %p",
    (product, environment, domain, expected) => {
      delete window.location;
      window.location = new URL(domain);

      expect(pcoUrl(environment)(product)).toBe(expected);

      delete window.location;
      window.location = previousLocation;
    }
  );
});
