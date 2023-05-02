import SuperButton from "../../src/s2-homeworks/hw04/common/c2-SuperButton/SuperButton";
import { mount } from "cypress/react18";

describe("SuperButton.cy.tsx", () => {
  const text = "Hello";
  it("playground", () => {
    mount(<SuperButton>{text}</SuperButton>);

    cy.contains("button", text);
  });
});

export {};
