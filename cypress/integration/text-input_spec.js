describe("TextInput Spec", () => {
  before(() => {
    cy.visit("/components/text-input");
  });

  it("has a box-shadow to indicate focus", () => {
    return cy
      .get(".TextInput")
      .first()
      .focus()
      .should(s => {
        expect(s).to.have.css(
          "box-shadow",
          "rgba(128, 128, 128, 0.5) 0px 0px 1.5px 3px"
        );
      });
  });

  function assertSize([fs, p, br, mh], selector = "TextInput") {
    return cy.get(selector).should(s => {
      expect(s).to.have.css("font-size", fs);
      expect(s).to.have.css("padding", p);
      expect(s).to.have.css("border-radius", br);
      expect(s).to.have.css("max-height", mh);
    });
  }

  it("can be 24px tall with 12px font-size, 2/4px padding, and 2.5px border-radius", () => {
    assertSize(
      ["12px", "2px 4px", "2.5px", "14px"],
      ".PointGridTextInput--height_2\\.5"
    );
  });

  it("can be 32px tall with 12px font-size, 4/5px padding, and 3px border-radius", () => {
    assertSize(
      ["12px", "4px 5px", "3px", "14px"],
      ".PointGridTextInput--height_3"
    );
  });

  it("can be 40px tall with 14px font-size, 7/8px padding, and 4px border-radius", () => {
    assertSize(
      ["14px", "7px 8px", "4px", "16px"],
      ".PointGridTextInput--height_4"
    );
  });

  it("can be 48px tall with 16px font-size, 10/11px padding, and 5px border-radius", () => {
    assertSize(
      ["16px", "10px 11px", "5px", "18px"],
      ".PointGridTextInput--height_5"
    );
  });

  it("is red when invalid", () => {
    return cy.get(".InvalidTextInput").should(s => {
      expect(s).to.have.css("border-color", "rgb(235, 86, 86)");
      expect(s).to.have.css("color", "rgb(235, 86, 86)");
    });
  });

  it("has a red glow when invalid and focused", () => {
    return cy
      .get(".InvalidTextInput")
      .first()
      .focus()
      .should(s => {
        expect(s).to.have.css(
          "box-shadow",
          "rgba(235, 86, 86, 0.5) 0px 0px 1.5px 3px"
        );
      });
  });

  // TODO: test ":placeholder", ":focus" and ":invalid"
});

// TODO: responsive viewport tests
// https://docs.cypress.io/api/commands/viewport.html#Syntax
