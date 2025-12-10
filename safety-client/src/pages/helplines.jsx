import { useEffect, useState } from "react";
import axios from "axios";

function Helplines() {
  const [helplines, setHelplines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/helplines")
      .then((res) => {
        setHelplines(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching helplines:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Helpline Numbers</h1>

      {loading ? (
        <p>Loading...</p>
      ) : helplines.length === 0 ? (
        <p>No helplines found.</p>
      ) : (
        <ul>
          {helplines.map((h) => (
            <li key={h.helpline_id} style={{ marginBottom: "10px" }}>
              <strong>{h.category}</strong> — {h.helpline_number}
              <br />
              <em>{h.description}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Helplines;
