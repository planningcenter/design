describe("Avatar Spec", () => {
  before(() => {
    cy.visit("/components/avatar");
  });

  function assertStyle(assertion, selector = ".Avatar") {
    cy.get(selector).should(assertion);
  }

  it("is circular", function() {
    assertStyle(s => expect(s).to.have.css("border-radius", "50%"));
  });

  it("doesn't have border width", () =>
    assertStyle(s => expect(s).to.have.css("border-width", "0px")));

  it("can be 20, 24, 32, 40, 48, 56, 64, 72 pixels tall and wide", () => {
    function assertSize(size, selector) {
      assertStyle(s => {
        expect(s).to.have.css("height", size);
        expect(s).to.have.css("width", size);
      }, selector);
    }

    assertSize("20px", ".PointGridAvatar--size_2\\.5");
    assertSize("24px", ".PointGridAvatar--size_3");
    assertSize("32px", ".PointGridAvatar--size_4");
    assertSize("40px", ".PointGridAvatar--size_5");
    assertSize("48px", ".PointGridAvatar--size_6");
    assertSize("56px", ".PointGridAvatar--size_7");
    assertSize("64px", ".PointGridAvatar--size_8");
    assertSize("72px", ".PointGridAvatar--size_9");
  });

  it("can be inset relative to size", () => {
    function assertInset(padding, selector) {
      assertStyle(s => {
        expect(s).to.have.css("padding", padding);
      }, selector);
    }

    assertInset("0px", ".StyledAvatar--inset.PointGridAvatar--size_2\\.5");
    assertInset("2px", ".StyledAvatar--inset.PointGridAvatar--size_3");
    assertInset("2px", ".StyledAvatar--inset.PointGridAvatar--size_4");
    assertInset("3px", ".StyledAvatar--inset.PointGridAvatar--size_5");
    assertInset("3px", ".StyledAvatar--inset.PointGridAvatar--size_6");
    assertInset("4px", ".StyledAvatar--inset.PointGridAvatar--size_7");
    assertInset("4px", ".StyledAvatar--inset.PointGridAvatar--size_8");
    assertInset("5px", ".StyledAvatar--inset.PointGridAvatar--size_9");
  });

  it("can be inactive", () => {
    assertStyle(s => {
      expect(s).to.have.css("opacity", "0.5");
    }, ".InactiveAvatar");
  });
});

// TODO: responsive viewport tests
// https://docs.cypress.io/api/commands/viewport.html#Syntax
