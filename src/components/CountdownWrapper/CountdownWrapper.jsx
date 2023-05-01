import "./CountdownWrapper.css";
import Countdown from "../Countdown/Countdown";
import Button from "../Button/Button";
export default function CountdownWrapper({ title }) {
  return (
    <div className="countdown-wrapper p-4">
      <h1 className="text-white text-3xl text-center capitalize">{title}</h1>
      <Countdown />
      <div className="flex flex-row justify-center gap-12">
        <Button disabled={true}>start</Button>
        <Button disabled={true}>clear</Button>
      </div>
    </div>
  );
}
