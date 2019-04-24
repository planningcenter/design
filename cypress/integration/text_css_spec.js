describe("Avatar style", () => {
  beforeEach(() => {
    cy.visit("/planningcenter/text/spec");
  });

  it("modifies fontSize with subjective classNames", () => {
    function assertSizeByClassName(selector, size) {
      // TODO: could speed this up by getting all then filtering
      return cy.get(selector).should(s => {
        expect(s).to.have.css("font-size", size);
      });
    }

    assertSizeByClassName(".FontScaleText--font-size_x-small", "10px");
    assertSizeByClassName(".FontScaleText--font-size_small", "12px");
    assertSizeByClassName(".FontScaleText--font-size_medium", "14px");
    assertSizeByClassName(".FontScaleText--font-size_large", "16px");
    assertSizeByClassName(".FontScaleText--font-size_x-large", "18px");
  });
});

// TODO: responsive viewport tests
// https://docs.cypress.io/api/commands/viewport.html#Syntax
