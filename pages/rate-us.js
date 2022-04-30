import React, { useState, useEffect } from "react"
import styles from "../styles/Rate.module.scss"
import ComplaintView from "../components/ComplaintView"

const RateUs = () => {
  const [currentRating, setCurrentRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [ratings, setRatings] = useState([])
  const [currentStep, setCurrnetStep] = useState(1)
  const [fullRatings, setFullRatings] = useState(0)
  const steps = [
    { count: 1, description: "Hur nöjd är du med hehandlingen du fick?" },
    { count: 2, description: "Hur nöjd är du med vår service?" },
    {
      count: 3,
      description:
        "Hur troligt är det att du rekommenderar oss till familj och vänner?",
    },
  ]
  const ifNotFullRating = {
    title: "Tack för din svar!",
    description:
      "Vi förstär att du inte är helt nöjd med din upplevelse hos oss. Tryck pà knappen nedan och välj din behandlare och lämna en kommentar sã hör vi av oss om det är nâgot vi kan åtgärda eller förbättra.",
  }

  const submitCurrentRating = () => {
    if (currentStep <= 3) {
      const tempRating = { step: currentStep, rating: currentRating }
      console.log("TempRating", tempRating)
      setRatings((prevState) => [...prevState, tempRating])
      currentRating === 5 && setFullRatings((prevState) => prevState + 1)
      setCurrentRating(0)
      setHover(0)
    }
    setCurrnetStep(currentStep + 1)
  }

  return (
    <div className={styles.wrapper}>
      {currentStep <= steps.length && (
        <section className={styles.ratingContainer}>
          <h2>
            {currentStep <= 3
              ? "Berätta om din upplevelse"
              : "tack för din recension"}
          </h2>
          <p className={styles.description}>
            {steps[currentStep - 1].description}
          </p>
          <div className={styles.starsList}>
            {[...Array(5)].map((star, index) => {
              index += 1
              return (
                <button
                  key={index}
                  className={
                    index <= currentRating || index <= hover
                      ? styles.on
                      : styles.off
                  }
                  onClick={() => setCurrentRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(currentRating)}
                >
                  <span className={styles.star}>&#9733;</span>
                </button>
              )
            })}
          </div>
          <button
            onClick={() => submitCurrentRating()}
            className={styles.cta}
            disabled={currentRating === 0}
          >
            {currentStep <= 3 ? "nästa" : "Lämna recension"}
          </button>
        </section>
      )}
      {currentStep > steps.length && ratings.length === 3 && fullRatings === 3 && (
        <section className={styles.ratingContainer}>
          <img className={styles.trophy} src="\trophy.png" width="100px" />
          <h2>Tack för dina svar!</h2>
          <p className={styles.description}>
            Klicka på knappen nedan för att lämna en review och delta i vår
            tävling för att vinna ett tandblekningskit eller eltandborste värde
            (1000-3000 KR)
          </p>
          <p>Så här går tävlingen till</p>
          <ul>
            <li>
              <p className={styles.description}>
                Lämna en review på Google (klicka på knappen "lämna min
                review")med där för- och efternamn framgår (antingen i texten du
                skriver eller i användarnamnet) så vi vet vem som lämnat review.
              </p>
            </li>
            <li>
              <p className={styles.description}>
                Den 1e dagen i januari, april, juli samt oktober så utses en
                vinnare för föregående kvartal av Quality Dentals personal.
              </p>
            </li>
            <li>
              <p className={styles.description}>
                Vinnaren utses baserat på bäst formulerade uppmuntran som ges
                som en review.
              </p>
            </li>
          </ul>
          <p>För att läsa samtliga tävlingsregler tryck här</p>
          <button className={styles.cta}>
            <a href="https://g.page/r/CQIw6u1HT7XqEAg/review">
              SKRIV EN REVIEW OCH FÅ EN CHANS ATT VINNA TÄVLINGEN
            </a>
          </button>
        </section>
      )}
      {currentStep > steps.length &&
        ratings.length === 3 &&
        fullRatings < 3 && <ComplaintView />}
    </div>
  )
}

export default RateUs
