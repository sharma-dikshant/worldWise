import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const { lat, lng } = Object.fromEntries(searchParams);
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h3>Map</h3>
      <h3>{lat}</h3>
      <h3>{lng}</h3>
    </div>
  );
}

export default Map;
