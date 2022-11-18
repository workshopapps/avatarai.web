import "./Button.css";

const Button = ({ text, type, click, testId }) => {
  return (
    <button
      data-testid={testId}
      onClick={click}
      className={`button button-${type}`}
    >
      {text}
    </button>
  );
};

export default Button;
