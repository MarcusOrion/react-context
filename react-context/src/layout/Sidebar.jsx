import { useContext } from "react";
import CountContext from "../contenxts/CountContext";

export default function Sidebar() {
  const { handleReset } = useContext(CountContext);

  return (
    <aside className="app-sidebar">
      <h3 className="fw-bold">App Sidebar</h3>
      <button className="btn btn-warning ms-2 mt-3" onClick={handleReset}>
        Reset
      </button>
    </aside>
  );
}
