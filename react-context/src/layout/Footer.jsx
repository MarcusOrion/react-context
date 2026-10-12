import { useCountContext } from "../contenxts/CountContext";

export default function Footer() {
  const { temp } = useCountContext();
  return (
    <footer className="d-flex flex-column align-items-center">
      <p className="mb-1">Lorem Ipsum &copy; 2026</p>
      <div className="badge text-bg-info px-2 py-2 mb-3">{temp} °C</div>
    </footer>
  );
}
