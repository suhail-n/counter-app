import React from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";

export default function Counter({ onDelete, onIncrement, onDecrement, counter }) {
  const variant = counter.value === 0 ? "warning" : "primary";
  return (
      <Row>
        <Col sm={1}>
          <Badge variant={variant}>
            {counter.value > 0 ? counter.value : "Zero"}
          </Badge>
        </Col>
        <Col>
          <Button className="m-2"
            onClick={() => onIncrement(counter.id)}
            variant="secondary"
          >
            +
          </Button>
          <Button className="m-2"
            disabled={counter.value === 0}
            onClick={() => onDecrement(counter.id)}
            variant="secondary"
          >
            -
          </Button>
          <Button className="m-2" onClick={() => onDelete(counter.id)} variant="danger">
            Delete
          </Button>
        </Col>
      </Row>
  );
}