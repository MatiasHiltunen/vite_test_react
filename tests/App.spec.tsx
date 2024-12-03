import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from '../src/App'
import React from "react";


test("Test App.tsx", async ()=> {

    const component = render(<App></App>)

    const button = component.getByRole("button", {name: "Increment"}).element()

    expect(button).toBeTruthy()

    // button.click()


})
