describe("Avatar style", () => {
  beforeEach(() => {
    cy.visit("/planningcenter/text/spec");
  });

  it("modifies fontSize with subjective classNames", () => {
    function assertSizeByTestId(selector, size) {
      // TODO: could speed this up by getting all then filtering
      return cy.get(selector).should(s => {
        expect(s).to.have.css("font-size", size);
      });
    }

    assertSizeByTestId(`[data-spec-font-size=10]`, "10px");
    assertSizeByTestId(`[data-spec-font-size=12]`, "12px");
    assertSizeByTestId(`[data-spec-font-size=14]`, "14px");
    assertSizeByTestId(`[data-spec-font-size=16]`, "16px");
    assertSizeByTestId(`[data-spec-font-size=18]`, "18px");
  });
});

// TODO: responsive viewport tests
// https://docs.cypress.io/api/commands/viewport.html#Syntax
