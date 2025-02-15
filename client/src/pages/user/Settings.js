import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Sidebar from "../../components/nav/Sidebar";

export default function Settings() {
  // state
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.put("/update-password", {
        password,
      });
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setLoading(false);
        toast.success("Password updated");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="display-4" style={{ backgroundColor: "#66fcf1", color: "#0b0c10", padding: "5rem", fontFamily: "Roboto", fontWeight: "bold" }}>Settings</h1>
      <div className="container-fluid">
        <Sidebar />
        <div className="container mt-2">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 mt-2">
              <form onSubmit={handleSubmit}>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-control mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button disabled={loading} className="btn col-12 mb-4" style={{ backgroundColor: "#45a29e", color: "#c5c6c7" }}>
                {loading ? "Waiting..." : "Register"}
                </button>  
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}