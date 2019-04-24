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

  it("displays at default sizes", () => {
    beforeEach(() => cy.visit("/planningcenter/avatar/spec"));

    function assertSize(size) {
      // TODO: could speed this up by getting all then filtering
      return cy.get(`[data-spec-size=${size}]`).should(s => {
        expect(s).to.have.css("height", size);
        expect(s).to.have.css("width", size);
      });
    }

    assertSize("20px");
    assertSize("24px");
    assertSize("32px");
    assertSize("40px");
    assertSize("48px");
    assertSize("56px");
    assertSize("64px");
    assertSize("72px");
  });

  it("has a 0px inset at 20px", () => {
    beforeEach(() => cy.visit("/planningcenter/avatar/spec"));

    function assertTieredInset(size, padding) {
      return cy.get(`[data-spec-size-inset=${size}]`).should(s => {
        expect(s).to.have.css("padding", padding);
      });
    }

    assertTieredInset("20px", "0px");
    assertTieredInset("24px", "2px");
    assertTieredInset("32px", "2px");
    assertTieredInset("40px", "3px");
    assertTieredInset("48px", "3px");
    assertTieredInset("56px", "4px");
    assertTieredInset("64px", "4px");
    assertTieredInset("72px", "5px");
  });
});

// TODO: responsive viewport tests
// https://docs.cypress.io/api/commands/viewport.html#Syntax
