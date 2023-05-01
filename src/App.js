import "./style/App.css";
import AppContainer from "./components/AppContainer/AppContainer";
import CountdownWrapper from "./components/CountdownWrapper/CountdownWrapper";

function App() {
  return (
    <>
      <AppContainer>
        <CountdownWrapper title={"countdown timer"} />
      </AppContainer>
    </>
  );
}

export default App;
