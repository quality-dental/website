import React, { useState } from "react"
import styles from "../../styles/form_page.module.scss"

const formArb = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bookTime, setBookTime] = useState("")
  const [lastVisit, setLastVisit] = useState("")
  const onSubmit = async (e) => {
    e.preventDefault()
    const body = {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      bookTime,
      lastVisit,
    }
    try {
      const rawResponse = await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
      const content = await rawResponse.json()

      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setBookTime("")
      setLastVisit("")
    } catch (e) {
      console.log({ e })
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topBar}>العرض لعدد محدود من المرضى</div>
      <div className={styles.formContainer}>
        <div className={styles.background}></div>
        <blockquote>
          kr399 وفّر 83% واحجز موعد لفحص شامل يتضمن صور أشعة فقط ب (kr2260
          سابقاً)
        </blockquote>

        <form onSubmit={onSubmit} id="form">
          <section className={styles.formRow}>
            <label htmlFor="name">
              الاسم بالكامل <span>*</span>
            </label>
            <div className={styles.fullName}>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="firstName"
                required
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="lastName"
                required
              />
            </div>
          </section>
          <section className={styles.formRow}>
            <label htmlFor="email">
              البريد الإلكتروني <span>*</span>
            </label>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              />
            </div>
          </section>
          <section className={styles.formRow}>
            <label htmlFor="phone">
              رقم الهاتف <span>*</span>
            </label>
            <div>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="tel"
                required
              />
            </div>
          </section>
          <section className={styles.formRow}>
            <label htmlFor="time">
              الوقت المرغوب بالتواصل بك <span>*</span>
            </label>
            <div>
              <input
                type="date"
                value={bookTime}
                onChange={(e) => setBookTime(e.target.value)}
                name="timeToContact"
                required
              />
            </div>
          </section>
          <section className={styles.formRow}>
            <label htmlFor="name">
              آخر زيارة كانت لك عند طبيب الأسنان <span>*</span>
            </label>
            <div>
              <input
                type="date"
                value={lastVisit}
                onChange={(e) => setLastVisit(e.target.value)}
                name="lastVisite"
                required
              />
            </div>
          </section>

          <button type="submit">تواصلو معي</button>
        </form>

        <p>
          399kr كل هذا فقط ب فحص سريري دقيق يبدأ ب فحص الاغشية المخاطية والفم
          والاسنان وأخيراً اللثة عن طريق فحص شامل للنسج الداعمة للأسنان من خلال
          الفحص يتم الكشف المبكر عن سرطانات الفم وامراض النسج الداعمة (فقدان
          الاسنان و انتانات الاسنان وغيرها) #عن طريق 4 صور الاشعة (داخل الفموية)
          نكتشف مشاكل الاسنان الخفية التي لا تُرى بالفحص السريري. عند الحاجة
          لمزيد من الصور الشعاعية قد تضاف قيمتها الى قيمة العرض :نحن نقوم بعمل
          جميع المعالجات السنيه من ضمنها زراعة الأسنان - ابتسامة هوليوود - تببيض
          أسنان
        </p>
        <a href="#form">نعم، اريد حجز موعد</a>
      </div>

      <div className={styles.reviews}>
        <img src="/reviews.jpg" />
        <img className={styles.chrImage} src="/Basel Almasri.jpg" />
        <p>
          مرحبا، أنا باسل طبيب أسنان من سوريا أرحب بكم في عيادتنا Quality Dental
        </p>
        <img className={styles.chrImage} src="/Susan Faily.jpg" />
        <p>طاقمنا الطبي طبيب الأسنان باسل وأخصائية الصحة الفموية سوزان</p>
      </div>

      <div className={styles.bottomSection}>
        <p>Avenyn اهلاً وسهلاً بكم في عيادتنا التي تبعد بضعة امتار عن شارع</p>
        <iframe
          title="Clinic address"
          width="520"
          height="400"
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.078490855619!2d11.97432651613306!3d57.69813628111807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff371125f33d3%3A0x2d3e352a81c04148!2sArkivgatan%201%2C%20411%2034%20G%C3%B6teborg!5e0!3m2!1sen!2sse!4v1618327496542!5m2!1sen!2sse"
        />
        <p>
          لحجز موعد يمكنك الاتصال بنا على الرقم 031224822 أو يمكنك ملئ معلوماتك
          الشخصية و سيقوم موظفينا متحدثي اللغة العربية الاتصال بك من نفس الرقم
          (031224822). يمكنك الاتصال أيضا للحصول على إستشارة مجانيه او المساعده
          في الحالات الاسعافيه :كون اننا نقبل عدد محدد من المرضى تطبق الشروط
          التاليه .العرض فقط للمرضى الجدد .العرض صالح لمدة شهر من تاريخ تسجيل
          معلوماتك الشخصية .في حال الغاء او تغيير الموعد قبل اقل من 24 ساعة من
          وقت الموعد يترتب على المريض دفع 700 كرون
        </p>
        <a href="#form">نعم، اريد حجز موعد</a>
      </div>
    </div>
  )
}

export default formArb
