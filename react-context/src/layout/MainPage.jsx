import { useState } from "react";

export default function MainPage() {
  return (
    <main className="main-content">
      <div className="text-center">
        <h1 className="fw-bold fs-4">Counter</h1>
        <div className="display-1">{temp} °C</div>
        <div className="btn-group mt-3">
          <div className="btn btn-info" onClick={handleSubCount}>
            Sub
          </div>
          <div className="btn btn-warning" onClick={handleReset}>
            Reset
          </div>
          <div className="btn btn-info" onClick={handleAddCount}>
            Add
          </div>
        </div>
      </div>
    </main>
  );
}
