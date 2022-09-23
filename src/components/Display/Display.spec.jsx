const { screen, render } = require("@testing-library/react")
import { Display } from "."

describe("<Display/>", () => {
  it("should display a value", () => {
    render(<Display value="13" />)
    expect(screen.getByText("13")).toBeInTheDocument
  })
})
