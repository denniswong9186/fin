import { Button, Card, ProgressBar, Stack, OverlayTrigger, Tooltip } from "react-bootstrap"
import { currencyFormatter } from "../utils"

export default function BudgetCard({
  name,
  category,
  amount,
  max,
  gray,
  hideButtons,
  onAddExpenseClick,
  onViewExpensesClick,
}) {
  const classNames = []
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10")
  } else if (gray) {
    classNames.push("bg-light")
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Total expenses: {currencyFormatter.format(amount)}
    </Tooltip>
  );


  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
      <div>{category}</div>
      {max && (
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <ProgressBar
              className="rounded-pill"
              variant={getProgressBarVariant(amount, max)}
              min={0}
              max={max}
              now={amount}
            />
          </OverlayTrigger>
        )}
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}
            {max && (
              <span className="text-muted fs-6 ms-1">
                / {currencyFormatter.format(max)}
              </span>
            )}
          </div>
        </Card.Title>

        {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={onAddExpenseClick}
            >
              Add Expense
            </Button>
            <Button onClick={onViewExpensesClick} variant="outline-secondary">
              View Expenses
            </Button>
          </Stack>
          
        )}
      </Card.Body>
    </Card>
  )
}

function getProgressBarVariant(amount, max) {
  const ratio = amount / max
  if (ratio < 0.5) return "primary"
  if (ratio < 0.75) return "warning"
  return "danger"
}