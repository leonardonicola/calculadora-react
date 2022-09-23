import "./styles.css"
import P from "prop-types"
import React from "react"

export const Button = React.memo(
  ({ click, label, operation, double, triple }) => {
    return (
      <button
        onClick={() => click && click(label)}
        className={`
            button
            ${operation ? "operation" : ""}
            ${double ? "double" : ""}
            ${triple ? "triple" : ""}
        `}
      >
        {label}
      </button>
    )
  }
)

Button.propTypes = {
  click: P.func.isRequired,
  label: P.string.isRequired,
  operation: P.bool,
  double: P.bool,
  triple: P.bool,
}
