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

  it("modifies height and width by class selector", () => {
    function assertSizeAndClassName(selector, size) {
      // TODO: could speed this up by getting all then filtering
      return cy.get(selector).should(s => {
        expect(s).to.have.css("height", size);
        expect(s).to.have.css("width", size);
      });
    }

    assertSizeAndClassName(".PointGridAvatar--size_2\\.5", "20px");
    assertSizeAndClassName(".PointGridAvatar--size_3", "24px");
    assertSizeAndClassName(".PointGridAvatar--size_4", "32px");
    assertSizeAndClassName(".PointGridAvatar--size_5", "40px");
    assertSizeAndClassName(".PointGridAvatar--size_6", "48px");
    assertSizeAndClassName(".PointGridAvatar--size_7", "56px");
    assertSizeAndClassName(".PointGridAvatar--size_8", "64px");
    assertSizeAndClassName(".PointGridAvatar--size_9", "72px");
  });

  it("modifies padding, relative to size, with class selector", () => {
    function assertTieredInsetAndClassName(selector, padding) {
      return cy.get(selector).should(s => {
        expect(s).to.have.css("padding", padding);
      });
    }

    assertTieredInsetAndClassName(
      ".StyledAvatar--inset.PointGridAvatar--size_2\\.5",
      "0px"
    );
    assertTieredInsetAndClassName(
      ".StyledAvatar--inset.PointGridAvatar--size_3",
      "2px"
    );
    assertTieredInsetAndClassName(
      ".StyledAvatar--inset.PointGridAvatar--size_4",
      "2px"
    );
    assertTieredInsetAndClassName(
      ".StyledAvatar--inset.PointGridAvatar--size_5",
      "3px"
    );
    assertTieredInsetAndClassName(
      ".StyledAvatar--inset.PointGridAvatar--size_6",
      "3px"
    );
    assertTieredInsetAndClassName(
      ".StyledAvatar--inset.PointGridAvatar--size_7",
      "4px"
    );
    assertTieredInsetAndClassName(
      ".StyledAvatar--inset.PointGridAvatar--size_8",
      "4px"
    );
    assertTieredInsetAndClassName(
      ".StyledAvatar--inset.PointGridAvatar--size_9",
      "5px"
    );
  });
});

// TODO: responsive viewport tests
// https://docs.cypress.io/api/commands/viewport.html#Syntax
