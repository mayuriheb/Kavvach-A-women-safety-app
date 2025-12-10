import { useEffect, useState } from "react";
import axios from "axios";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/locations")
      .then((res) => {
        setLocations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching locations:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Safe Locations</h1>

      {loading ? (
        <p>Loading safe locations…</p>
      ) : locations.length === 0 ? (
        <p>No safe locations found.</p>
      ) : (
        <ul>
          {locations.map((loc) => (
            <li key={loc.location_id} style={{ marginBottom: "15px" }}>
              <strong>{loc.name}</strong> — {loc.category}  
              <br />
              {loc.address}
              <br />
              <em>{loc.description}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
