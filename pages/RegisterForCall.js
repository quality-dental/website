import React, { useState } from "react"
import styles from "../styles/Form.module.scss"
import { useRouter } from "next/router"

const RegisterForCall = () => {
  const router = useRouter()
  const [shown, setShown] = useState(false)

  const sendNumberToEmail = async (e) => {
    e.preventDefault()
    let url = "https://formsubmit.co/ajax/info@qualitydental.se"

    let body = {
      name: e.target.name.value,
      tel: e.target.tel.value,
    }

    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    })

    let data = await res.json()
    setShown(true)
    setTimeout(() => router.push("/"), 3000)

    e.target.reset()
  }

  return (
    <main className={styles.mainContainer}>
      {shown && (
        <section class={styles.message}>
          <div className={styles.content}>
            <h2>Tack för din bokning!</h2>
            <p>Vi ringer dig så snart som möjligt.</p>
          </div>
        </section>
      )}
      <section className={styles.formSection}>
        <h2>Boka tid.</h2>
        <p>
          Skriv in ditt namn och telefonnummer, så hör vi av oss snarast
          möjligt.
        </p>
        <form className={styles.formContent} onSubmit={sendNumberToEmail}>
          <article className={styles.email}>
            <input
              type="name"
              name="name"
              required
              placeholder="Fullständigt namn"
            />
          </article>

          <article className={styles.email}>
            <input
              type="number"
              name="tel"
              required
              placeholder="Telefonnummer"
            />
          </article>

          <button type="submit">boka</button>
        </form>
      </section>
    </main>
  )
}

export default RegisterForCall
