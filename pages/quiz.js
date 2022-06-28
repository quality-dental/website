import React from "react"
import Link from "next/link"
import styles from "../styles/Exam.module.scss"

const exam = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <section>
          <h1>SPARA 81% Boka din kompletta tandläkarundersökning.</h1>
          <h1>
            Röntgenbilder, lättare rengöring och putsning för endast 397 kr
            (tidigare 2115 kr)
          </h1>
        </section>

        <p className={styles.fadeText}>
          * Erbjudandet kan endast nyttjas av nya patienter.
        </p>
        <p className={styles.fadeText}>
          ** Speciellt avsatt tid för patienter riskgruppen.
        </p>
      </div>

      <p className={styles.spacedText}>
        <b>Just nu</b> gör vi något alldeles speciellt och erbjuder ett
        begränsat antal personer en undersökning, rengöring och putsning för
        endast 397 KR.
        <b> Allt det här ingår i undersökningen för endast 397 kr:</b>
      </p>

      <ul>
        <li>
          <p>
            Grundlig undersökning av dina tänder och tandkött för upptäcka
            eventuell plack, karies, eller direkt synliga skador.
          </p>
        </li>
        <li>
          <p>
            ​Vi undersöker uppkomsten av eventuella sjukdomar så som t.ex.
            parodontit (tandlossning) som kan uppkomma i munhålan.
          </p>
        </li>
        <li>
          <p>
            Vi tar röntgenbilder (4 st Bitewings) för att se eventuella
            tandproblem som kan ligga dolda och inte syns för blotta ögat.
          </p>
        </li>
        <li>
          <p>
            Vi ger dig en grundläggande rengöring och lättare borttagning av
            tandsten så din munhälsa känns fräsch efter undersökningen
          </p>
        </li>
      </ul>

      <Link href="/RegisterForCall">
        <button type="button">BOKA DIN TID NU OCH SPARA 1963 KR</button>
      </Link>

      <p className={styles.reviewsText}>
        <b>Det här säger våra patienter om oss</b>
      </p>

      <img className={styles.trophy} src="\reviews.jpg" width="100%" />

      <p className={styles.welcomText}>
        <b>Välkommen till vår fräscha mottagning ett stenkast från Avenyn!</b>
      </p>
      <iframe
        title="Clinic address"
        width="520"
        height="400"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.078490855619!2d11.97432651613306!3d57.69813628111807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff371125f33d3%3A0x2d3e352a81c04148!2sArkivgatan%201%2C%20411%2034%20G%C3%B6teborg!5e0!3m2!1sen!2sse!4v1618327496542!5m2!1sen!2sse"
      ></iframe>

      <div className={styles.footer}>
        <h2>Helt utan förpliktelser</h2>
        <p>
          Vi ger dig det här förmånliga erbjudandet då vi vet att du kommer bli
          supernöjd med din upplevelse hos oss :)
        </p>
        <p>
          Det finns inga dolda avgifter eller kostnader med det här erbjudandet
          utan du väljer självklart var du vill gå nästa gång du behöver gå till
          tandläkaren.
        </p>
        <p>
          Skulle det finnas behov av ytterligare behandlingar så får du alltid
          ett kostnadsförslag med en tydlig översikt som du kan ta ställning
          till innan vi skulle hjälpa dig med eventuell vidare behandling.
        </p>
      </div>

      <div className={styles.footBanner}>
        <p>
          <span> Först till kvarn gäller </span>
          Tryck på knappen för att säkerställa din plats nu!
        </p>
      </div>

      <Link href="/RegisterForCall">
        <button type="button">
          JA TACK, JAG VILL TA DEL AV DETTA ERBJUDANDE
        </button>
      </Link>
    </div>
  )
}

export default exam
