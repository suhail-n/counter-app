import React from "react";
import Counter from "./Counter";

import { Button, Container } from "react-bootstrap";

export default function Counters(props) {
  const { onDelete, onIncrement, onReset, counters, onDecrement } = props;
  return (
    <>
      <Container>
        <Button className="mt-2 mb-2" variant="primary" onClick={onReset}>
          Reset
        </Button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            key={counter.id}
          />
        ))}
      </Container>
    </>
  );
}
