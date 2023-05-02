import "./Button.css";

export default function Button({ children, disabled, onClick, className }) {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
