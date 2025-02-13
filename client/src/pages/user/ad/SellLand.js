import Sidebar from "../../../components/nav/Sidebar";
import AdForm from "../../../components/forms/AdForm";

export default function SellLand() {
  return (
    <div>
      <h1 className="display-4" style={{ backgroundColor: "#66fcf1", color: "#0b0c10", padding: "5rem", fontFamily: "Roboto", fontWeight: "bold" }}>Sell Land</h1>
      <Sidebar />
      <div className="container mt-2">
        <AdForm action="Sell" type="Land" />
      </div>
    </div>
  );
}
