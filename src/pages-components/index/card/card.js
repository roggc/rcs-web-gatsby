import * as styles from "./card.module.css";
import * as React from "react";

const Card = ({ children }) => {
  return <div className={styles.cardContainer}>{children}</div>;
};

export default Card;
