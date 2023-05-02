import "./Button.css";

export default function Button({ children, disabled, onClick }) {
  return (
    <button
      className="capitalize font-medium rounded-3xl py-2"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
