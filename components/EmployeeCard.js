import React from "react"
import styles from "../styles/cards.module.scss"

const EmployeeCard = ({ name, title }) => (
  <div className={styles.employeeCard}>
    <img src="/user.svg" alt="" />
    <h3>{name}</h3>
    <p className={styles.titleTxt}>{title}</p>
  </div>
)

export default EmployeeCard
