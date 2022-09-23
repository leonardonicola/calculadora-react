import { Button } from "../../components/Button"
import { Display } from "../../components/Display"
import { useState } from "react"
import "./styles.css"

export const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0")
  const [clearDisplay, setClearDisplay] = useState(false)
  const [operation, setOperation] = useState(null)
  const [value, setValue] = useState([0, 0])
  const [current, setCurrent] = useState(0)
  
  const clearMemory = () => {
    setDisplayValue("0")
    setClearDisplay(false)
    setOperation(null)
    setValue([0, 0])
    setCurrent(0)
  }

  const handleOperation = (operator) => {
    if (current === 0) {
      setOperation(operator)
      setCurrent(1)
      setClearDisplay(true)
    } else {
      const equals = operator === "="
      const currentOperation = operation

      switch (currentOperation) {
        case "+":
          value[0] += value[1]
          break
        case "-":
          value[0] -= value[1]
          break
        case "/":
          value[0] /= value[1]
          break
        case "*":
          value[0] *= value[1]
          break
        default:
      }

      value[1] = 0

      setDisplayValue(value[0])
      setClearDisplay(!equals)
      setValue(value)
      if (equals) {
        setCurrent(0)
      } else {
        setOperation(operator)
        setCurrent(1)
      }
    }
  }

  const addDigit = (n) => {
    if (n === "." && displayValue.includes(".")) {
      return
    }

    const clearDisplayFn = displayValue === "0" || clearDisplay

    const currentValue = clearDisplayFn ? "" : displayValue
    const valueInDisplay = currentValue + n
    setDisplayValue(valueInDisplay)
    setClearDisplay(false)

    if (n !== ".") {
      const values = [...value]
      values[current] = parseFloat(valueInDisplay)

      setValue(values)
    }
  }

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Button label="AC" click={clearMemory} triple />
      <Button label="/" click={handleOperation} operation />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" click={handleOperation} operation />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" click={handleOperation} operation />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" click={handleOperation} operation />
      <Button label="0" click={addDigit} double />
      <Button label="." click={addDigit} />
      <Button label="=" click={handleOperation} operation />
    </div>
  )
}
