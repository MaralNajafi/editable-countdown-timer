import "./AppContainer.css";
export default function AppContainer({ children }) {
  return (
      <div className="app-container flex justify-center items-center min-h-screen">
      {children}
    </div>
  );
}
