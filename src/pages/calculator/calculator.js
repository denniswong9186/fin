import { useReducer } from "react"
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton"
import "./calculator.css"
import NavBar from "../../components/NavBar";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}

function reducer(state, { type, payload }) {
  switch (type) {

    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        }
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        }
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        }
      }
      if (state.currentOperand == null) return state
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null }
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }
      case ACTIONS.EVALUATE:
        if (!state.operation || !state.currentOperand || !state.previousOperand) return state;
        const result = evaluate(state);
        return result === "NaN" ? { ...initialState } : { ...state, overwrite: true, previousOperand: null, operation: null, currentOperand: result };
      default:
        return state;

  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return ""
  let computation = ""
  // eslint-disable-next-line default-case
  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "*":
      computation = prev * current
      break
    case "÷":
      if (current === 0) return "NaN"; // Handle divide by zero
      computation = prev / current;
      break;
  }

  return computation.toString()
}

const initialState = {
  currentOperand: "",
  previousOperand: "",
  operation: null,
  overwrite: false,
};

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})
function formatOperand(operand) {
  if (operand == null) return
  const [integer, decimal] = operand.split(".")
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

function App() {
  const initialState = {};
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const digitButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].map((digit) => (
    <DigitButton key={digit} digit={digit} dispatch={dispatch} />
  ));
  
  return (
    <div>
      <NavBar />
        <div className="welcome-statement">Welcome to the Calculator</div>
        <div className="intro-statement">created by Quantum Wealth Strategies</div>
          <div className="calculator-container">
            <div className="calculator-grid">
              <div className="output">
                <div className="previous-operand">
                  {formatOperand(state.previousOperand)} {state.operation}
                </div>
                <div className="current-operand">{formatOperand(state.currentOperand)}</div>
              </div>
              <button className="span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
                AC
              </button>
              <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
                DEL
              </button>
              <OperationButton operation="÷" dispatch={dispatch} />
              {digitButtons}
              <OperationButton operation="*" dispatch={dispatch} />
              <OperationButton operation="+" dispatch={dispatch} />
              <OperationButton operation="-" dispatch={dispatch} />
              <button className="span-two" onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>
                =
              </button>
            </div>
          </div>
    </div>
  );
}


export default App
