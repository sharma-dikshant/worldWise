import styles from "./CityItem.module.css";
function CityItem({ city }) {
  // console.log(city)
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  const { cityName, emoji, date } = city;

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.time}>({formatDate(date)})</time>
      <buttom className={styles.deleteBtn}>&times;</buttom>
    </li>
  );
}

export default CityItem;
