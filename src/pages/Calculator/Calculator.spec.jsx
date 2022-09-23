const { screen, render, fireEvent } = require("@testing-library/react")
import { Calculator } from "."

describe("<Calculator/>", () => {
  it("should render values in display", () => {
    render(<Calculator />)
    const buttonThree = screen.queryByText("3")
    const buttonMinus = screen.queryByText("-")
    const display = screen.queryByTestId("display")

    fireEvent.click(buttonThree)
    expect(display).toHaveTextContent("3")
    fireEvent.click(buttonThree)
    expect(display).toHaveTextContent("33")
    fireEvent.click(buttonMinus)
    expect(display).toHaveTextContent("33")
    fireEvent.click(buttonThree)
    expect(display).toHaveTextContent("3")
  })
})
