import "./styles.css"
import React from "react"
import P from "prop-types"

export const Display = React.memo(({ value }) => {
  return (
    <div className="display" data-testid="display">
      {value}
    </div>
  )
})

Display.propTypes = {
  value: P.oneOfType([P.string, P.number]).isRequired
}
