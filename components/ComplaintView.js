import React, { useState } from "react"
import styles from "../styles/Rate.module.scss"

const ComplaintView = () => {
  const [complaintPersonnel, setComplaintPersonnel] = useState("")
  const [complaintMsg, setComplaintMsg] = useState("")
  const [number, setNumber] = useState(0)
  const [name, setName] = useState("")

  const submitData = async (e) => {
    let url = "https://formsubmit.co/ajax/info@qualitydental.se"
    e.preventDefault()

    const body = {
      name,
      number,
      personnel: complaintPersonnel,
      message: complaintMsg,
    }

    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    })

    if (res) {
      e.target.reset()
      alert("Tack for din feedback!")
      window.location.replace("https://www.qualitydental.se/")
    }
  }

  const ImageItem = ({ name }) => (
    <article
      className={name === complaintPersonnel ? styles.chosenComplaintImag : ""}
      onClick={() => setComplaintPersonnel(name)}
    >
      <img src={`/${name}.jpg`} />
      <p>Basel Almasri</p>
    </article>
  )

  return (
    <section className={styles.ratingContainer}>
      <h2>Berätta om din upplevelse</h2>
      <br />
      <br />
      <p>
        Vi är tacksamma för fin feedback om det är nått vi kan färbättra eller
        åtgärda.
      </p>
      <div className={styles.choosDr}>
        <p>Välj personal som utförde din behandling:</p>
        <div className={styles.imageContainer}>
          {["Basel Almasri", "Susan Faily"].map((name) => (
            <ImageItem name={name} key={name} />
          ))}
        </div>
      </div>
      <form
        className={styles.feedbackContainer}
        onSubmit={(e) => submitData(e)}
      >
        <p>
          Tack för din ärliga feedback! Lämna ditt <b>namn</b>,
          <b>telefonnummer</b> och <b>feedback</b> här, så kontakta vi dig för
          att lösa problemet.
        </p>
        <textarea
          required
          id="feedback"
          name="user_feedback"
          rows="6"
          cols="70"
          placeholder="Vad kan vi göra för att ge dig en bättre upplevelse?*"
          onChange={(e) => setComplaintMsg(e.target.value)}
        />
        <input
          required
          type="number"
          id="tel"
          name="user_tel"
          placeholder="Mobilnummer*"
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          required
          type="text"
          id="name"
          name="user_name"
          placeholder="För-och efternamn*"
          onChange={(e) => setName(e.target.value)}
        />
        <button className={styles.complaintCta} type="submit">
          Skicka min feedback
        </button>
      </form>
    </section>
  )
}

export default ComplaintView
