describe("HW13", () => {
  before("visit url", () => {
    cy.visit("/junior_plus");
  });

  const url = "https://samurai.it-incubator.io/api/3.0/homework/test";

  it("click send true button. Should be disabled after clicking", () => {
    cy.intercept("POST", url, {
      statusCode: 200,
      delay: 3000,
    })
      .get("#hw13-send-true")
      .should("be.enabled")
      .click()
      .get("#hw13-send-true")
      .should("be.disabled")
      .wait(3000)
      .get("#hw13-send-true")
      .should("not.be.disabled");
  });
});

export {};
