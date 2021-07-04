import React from "react"
import styles from "../styles/cards.module.scss"

const EmployeeCard = ({ name, title }) => (
  <div className={styles.employeeCard}>
    <img className={styles.employeeImage} src={`/${name}.jpg`} alt={`${name}`} />
    <p className={styles.titleTxt}>{title}</p>
    <h3>{name}</h3>
  </div>
)

export default EmployeeCard
