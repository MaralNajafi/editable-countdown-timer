import "./Countdown.css";
export default function Countdown() {
  return (
    <div className="countdown flex flex-row justify-center items-center text-white text-9xl">
      <input className="text-center" value="00" maxlength="2" />
      <span className="font-medium">:</span>
      <input className="text-center" value="00" maxlength="2" />
    </div>
  );
}
