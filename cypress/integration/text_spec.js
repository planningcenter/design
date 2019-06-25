describe("Text Spec", () => {
  before(() => {
    cy.visit("/components/text");
  });

  it("can be 10, 12, 14, 16, or 18 pixel font-size", () => {
    function assertSize(size, selector = "Text") {
      // TODO: could speed this up by getting all then filtering
      return cy.get(selector).should(s => {
        expect(s).to.have.css("font-size", size);
      });
    }

    assertSize("10px", ".FontScaleText--font-size_x-small");
    assertSize("12px", ".FontScaleText--font-size_small");
    assertSize("14px", ".FontScaleText--font-size_medium");
    assertSize("16px", ".FontScaleText--font-size_large");
    assertSize("18px", ".FontScaleText--font-size_x-large");
  });
});

// TODO: responsive viewport tests
// https://docs.cypress.io/api/commands/viewport.html#Syntax
