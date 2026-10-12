import { useCountContext } from "../contenxts/CountContext";

export default function Sidebar() {
  const { handleReset } = useCountContext();

  return (
    <aside className="app-sidebar">
      <h3 className="fw-bold">App Sidebar</h3>
      <button className="btn btn-warning ms-2 mt-3" onClick={handleReset}>
        Reset
      </button>
    </aside>
  );
}
