describe("HW1", () => {
  before("visit url", () => {
    cy.visit("/pre-junior");
  });

  const text = "bla-bla -bla -bla";

  it("get textarea element, type some text", () => {
    cy.get("#hw1-textarea").type(text);
    cy.get("#hw1-button").click();

    cy.get("#hw1-text-1").should("contain.text", text);
  });

  it("check ava. Should be visible and have width greater than 0", () => {
    cy.get("#hw1-avatar-1")
      .should("be.visible")
      .and("have.prop", "width")
      .should("be.greaterThan", 0);
  });

  it("check name", () => {
    cy.get("#hw1-name-1").should("be.visible").and("have.text", "Brad Pitt");
  });

  it("check time", () => {
    cy.get("#hw1-time-1").should("be.visible").and("not.be.empty");
  });
});

export {};
