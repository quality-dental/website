import Head from "next/head"
import EmployeeCard from "../components/EmployeeCard"
import styles from "../styles/Home.module.scss"
import cardStyles from "../styles/cards.module.scss"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Quality Dental | Home</title>
        <link rel="icon" href="/QD.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <section className={styles.intro}>
          <blockquote>
            Varmt välkommen till <br /> <span> Quality Dental </span> på <br />
            <span> Arkivgatan 1 </span>i Göteborg
          </blockquote>
          <p>
            Tillsammans med dig skapar vi en lämplig behandlingsplan. <br />
            Samt hälper dig att upprätthålla en god munhälsa
          </p>
          <button>kontakta oss</button>
        </section>

        <section className={styles.about}>
          <h2>om oss</h2>
          <p>
            Vi är en privat tandklinik i Göteborg som erbjuder prisvärd och
            modern tandvård. Vår lokal ligger på Arkivgatan 1. Utifrån dina
            behov, sätter vi upp mål för din mun-hälsa och rekommenderar en
            lämplig behandling. 
          </p>

          <div className={styles.employees}>
            <EmployeeCard name="Susan Faily" title="Leg. tandhygienist " />
            <EmployeeCard
              name="basel almasri"
              title="Leg. Tandläkare, Verksamhetschef"
            />
            <EmployeeCard
              name="Angelica Handke"
              title="Operationssköterska, klinikkoordenator "
            />
          </div>
        </section>

        <section className={styles.treatments}>
          <h2>behandlingar</h2>
          <p>Hos oss möts du av ett personligt varmt bemötande </p>

          <div className={styles.container}>
            <div className={cardStyles.toothCard}>
              <img src="/teeth/generalCare.svg" alt="" />
              <h3>Vuxentandvård</h3>
            </div>
            <div className={cardStyles.toothCard}>
              <img src="/teeth/aesthetic.svg" alt="" />
              <h3>Estetisk tandvård</h3>
            </div>
            <div className={cardStyles.toothCard}>
              <img src="/teeth/surgical.svg" alt="" />
              <h3>Kirurgiska ingrepp</h3>
            </div>
          </div>

          <button>Visa alla behandlingar</button>

          <ul className={styles.treatmentsList}>
            <li>
              <p>Förebyggande vård</p>
            </li>
            <li>
              <p>Porslinsfyllningar, kronor och broar</p>
            </li>
            <li>
              <p>Tandblekning</p>
            </li>
            <li>
              <p>Parodbehandlingar</p>
            </li>
            <li>
              <p>Implantatbehandling</p>
            </li>
            <li>
              <p>Tandvårdsrädda patienter</p>
            </li>
            <li>
              <p>Bettfysiology behandling och bettskenor</p>
            </li>
            <li>
              <p>Sömnapnéer</p>
            </li>
          </ul>
        </section>

        <section className={styles.contact}>
          <div className="content">
            <h2>kontakta oss</h2>
            <p>Varmt välkommen till vår klinik, tveka inte att höra av dig.</p>

            <ul>
              <li>
                <img src="/contact/phone.svg" alt="" />
                <p>031-22 48 22</p>
              </li>
              <li>
                <img src="/contact/email.svg" alt="" />
                <p>info@qualitydental.se</p>
              </li>
              <li>
                <img src="/contact/location.svg" alt="" />
                <p>Arkivgatan 1, 411 34 Göteborg</p>
              </li>
              <li>
                <img src="/contact/facebook.svg" alt="" />
                <p>@qualitydentalsweden</p>
              </li>
              <li>
                <img src="/contact/instagram.svg" alt="" />
                <p>@qualitydentalsweden</p>
              </li>
            </ul>
          </div>
          <iframe
            width="520"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.078490855619!2d11.97432651613306!3d57.69813628111807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff371125f33d3%3A0x2d3e352a81c04148!2sArkivgatan%201%2C%20411%2034%20G%C3%B6teborg!5e0!3m2!1sen!2sse!4v1618327496542!5m2!1sen!2sse"
          ></iframe>
        </section>

        <section className={styles.formSection}>
          <h2>Vi svarar gärna på alla dina frågor</h2>

          <form className={styles.formContent}>
            <article className={styles.name}>
              <label htmlFor="name">Namn</label>
              <input type="text" name="name" required />
            </article>

            <article className={styles.tel}>
              <label htmlFor="number">Telefonnummer</label>
              <input type="number" name="tel" required />
            </article>

            <article className={styles.email}>
              <label htmlFor="">E-postadress</label>
              <input type="email" name="email" required />
            </article>

            <article className={styles.mssg}>
              <label htmlFor="mssg">medelande</label>
              <textarea type="text" name="mssg" />
            </article>

            <button>skicka</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Home
