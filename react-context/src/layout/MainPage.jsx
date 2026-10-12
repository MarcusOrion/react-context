import { useCountContext } from "../contenxts/CountContext";

export default function MainPage() {
  const { temp, handleAddCount, handleSubCount, handleReset } =
    useCountContext();
  return (
    <main className="main-content">
      <div className="text-center">
        <h1 className="fw-bold fs-4">Counter</h1>
        <div className="display-1">{temp} °C</div>
        <div className="btn-group mt-3">
          <button
            className="temp btn btn-info"
            onClick={handleSubCount}
            disabled={temp <= 16}
          >
            Sub
          </button>
          <button className="btn btn-warning" onClick={handleReset}>
            Reset
          </button>
          <button
            className="temp btn btn-info"
            onClick={handleAddCount}
            disabled={temp >= 28}
          >
            Add
          </button>
        </div>
      </div>
    </main>
  );
}
