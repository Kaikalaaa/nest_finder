import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/cards/UserCard";

export default function Agents() {
  // state
  const [agents, setAgents] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      const { data } = await axios.get("/agents");
      setAgents(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ marginTop: "-10%" }}
      >
        <div className="display-4">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="display-4" style={{ backgroundColor: "#66fcf1", color: "#0b0c10", padding: "5rem", fontFamily: "Roboto", fontWeight: "bold" }}>AGENTS</h1>
      <div className="container">
        <div className="row">
          {agents?.map((agent) => (
            <UserCard user={agent} key={agent._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
