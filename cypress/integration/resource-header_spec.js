describe("ResourceHeader", () => {
  before(() => {
    cy.visit("/components/resource-header");
  });

  function assertStyle(assertion, selector = ".Avatar") {
    cy.get(selector).should(assertion);
  }

  describe("Avatar", () => {
    it("has an Avatar component that is 112px with 5px border", function() {
      assertStyle(s => {
        expect(s).to.have.css("height", "112px");
        expect(s).to.have.css("width", "112px");
      }, ".ResourceHeader__Avatar");
    });

    it("has inset padding of 5px", function() {
      assertStyle(s => {
        expect(s).to.have.css("padding", "5px");
      }, ".ResourceHeader__Avatar");
    });
  });

  describe("Tab", () => {
    it("is 40px tall", () => {
      assertStyle(s => {
        expect(s).to.have.css("line-height", "40px");
      }, ".ResourceHeader__Tab");
    });

    it("has a 14px font-size", () => {
      assertStyle(s => {
        expect(s).to.have.css("font-size", "14px");
      }, ".ResourceHeader__Tab");
    });

    it("has 4px rounded top corners", () => {
      assertStyle(s => {
        expect(s).to.have.css("border-top-right-radius", "4px");
        expect(s).to.have.css("border-top-left-radius", "4px");
      }, ".ResourceHeader__Tab");
    });

    it("has no text-decoration", () => {
      assertStyle(s => {
        expect(s).to.have.css("text-decoration", "none solid rgb(0, 0, 0)");
      }, ".ResourceHeader__Tab");
    });

    it("is bold when 'target'", () => {
      assertStyle(s => {
        expect(s).to.have.css("font-weight", "700");
      }, ".ResourceHeader__Tab");
    });
  });

  describe("TabContainer", () => {
    it("has 24px padding all around", () => {
      assertStyle(s => {
        expect(s).to.have.css("padding", "0px 24px");
      }, ".ResourceHeader__TabContainer");
    });
  });

  describe("SummaryContainer", () => {
    it("has 24px padding all around", () => {
      assertStyle(s => {
        expect(s).to.have.css("padding", "24px");
      }, ".ResourceHeader__SummaryContainer");
    });

    // test margin applied to separate avatar
  });

  // describe("FlexSpacer", () => {
  //   it("", () => {
  //     assertStyle(s => {
  //       expect(s).to.have.css("font-weight", "bold");
  //     }, ".ResourceHeader__Tab");
  //   });
  // });

  describe("Title", () => {
    it("is bold", () => {
      assertStyle(s => {
        expect(s).to.have.css("font-weight", "700");
      }, ".ResourceHeader__Title");
    });

    it("is white", () => {
      assertStyle(s => {
        expect(s).to.have.css("color", "rgb(255, 255, 255)");
      }, ".ResourceHeader__Title");
    });

    it("is 25px in font-size", () => {
      assertStyle(s => {
        expect(s).to.have.css("font-size", "25px");
      }, ".ResourceHeader__Title");
    });
  });
});
