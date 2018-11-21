describe("My First Test", function() {
  it("Visits the Kitten Sink", function() {
    cy.visit("http://localhost:8001/");
    cy.get("[data-cy=first-avatar-test]").should(
      "have.css",
      "border-radius",
      "999px"
    );
  });
});
