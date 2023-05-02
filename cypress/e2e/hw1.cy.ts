describe("template spec", () => {
  it("passes", () => {
    const text = "bla-bla -bla -bla";
    cy.visit("/pre-junior");
    cy.get("#hw1-textarea").type(text);
    cy.get("#hw1-button").click();

    cy.get("#hw1-text-1").should("contain.text", text);
  });
});

export {};
