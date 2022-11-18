import "./Button.css";

const Button = ({ text, type }) => {
  return (
    <div className={`button button-${type}`}>
      <span>{text}</span>
    </div>
  );
};

export default Button;
