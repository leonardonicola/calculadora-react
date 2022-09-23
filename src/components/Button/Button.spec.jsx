const { screen, render } = require("@testing-library/react")
import { Button } from "."

describe("<Button/>", () => {
  it("should display a button", () => {
    render(<Button label="-"/>)
    expect(screen.queryByRole('button', {name: "-"})).toBeInTheDocument
  })

  it("should have the class passed in props", () => {
    render(<Button label="=" operation/>)
    expect(screen.queryByRole('button', {name: "="})).toHaveClass('operation')
    expect(screen.queryByRole('button', {name: "="})).not.toHaveClass('double')
    expect(screen.queryByRole('button', {name: "="})).not.toHaveClass('triple')
  })
  
})
