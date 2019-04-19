describe("Avatar style", () => {
  beforeEach(() => {
    cy.visit("/planningcenter/avatar/spec");
  });

  function assertStyle(assertion) {
    cy.get(`[data-spec-style=true]`).should(assertion);
  }

  it("has a circular shape", function() {
    assertStyle(s => expect(s).to.have.css("border-radius", "50%"));
  });

  it("doesn't have border width", () =>
    assertStyle(s => expect(s).to.have.css("border-width", "0px")));
});

describe("Required sizes", () => {
  beforeEach(() => cy.visit("/planningcenter/avatar/spec"));

  function assertSize(size) {
    return cy.get(`[data-spec-size=${size}]`).should(s => {
      expect(s).to.have.css("height", size);
      expect(s).to.have.css("width", size);
    });
  }

  it("displays at 20px", () => assertSize("20px"));
  it("displays at 24px", () => assertSize("24px"));
  it("displays at 32px", () => assertSize("32px"));
  it("displays at 40px", () => assertSize("40px"));
  it("displays at 48px", () => assertSize("48px"));
  it("displays at 56px", () => assertSize("56px"));
  it("displays at 64px", () => assertSize("64px"));
  it("displays at 72px", () => assertSize("72px"));
});

describe("Sizes have scaled insets via padding", () => {
  beforeEach(() => cy.visit("/planningcenter/avatar/spec"));

  function assertTieredInset(size, padding) {
    return cy.get(`[data-spec-size-inset=${size}]`).should(s => {
      expect(s).to.have.css("padding", padding);
    });
  }

  it("has a 0px inset at 20px", () => assertTieredInset("20px", "0px"));
  it("has a 2px inset at 24px", () => assertTieredInset("24px", "2px"));
  it("has a 2px inset at 32px", () => assertTieredInset("32px", "2px"));
  it("has a 3px inset at 40px", () => assertTieredInset("40px", "3px"));
  it("has a 3px inset at 48px", () => assertTieredInset("48px", "3px"));
  it("has a 4px inset at 56px", () => assertTieredInset("56px", "4px"));
  it("has a 4px inset at 64px", () => assertTieredInset("64px", "4px"));
  it("has a 5px inset at 72px", () => assertTieredInset("72px", "5px"));
});

// TODO: responsive viewport tests
// https://docs.cypress.io/api/commands/viewport.html#Syntax
