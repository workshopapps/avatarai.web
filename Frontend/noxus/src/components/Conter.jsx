import Button from "./Button";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => 0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <p data-testid="count">{count}</p>
      <Button
        click={handleClick}
        type={`primary`}
        text={`Increment`}
        testId={`increment`}
      />
    </div>
  );
};

export default Counter;
