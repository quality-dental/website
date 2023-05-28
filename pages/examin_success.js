import styles from "../styles/form_page.module.scss"

const formSuccess = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topBarSuccess}>
        <img src="/logo.svg" alt="" className="logo" />
      </div>
      <div className={styles.container}>
        <p>
          <p> تم استلام طلبك وسيتم التواصل معكم باقرب وقت</p>
          لحجز موعد يمكنك الاتصال بنا على الرقم 031224822 أو يمكنك ملئ معلوماتك
          الشخصية و سيقوم موظفينا متحدثي اللغة العربية الاتصال بك من نفس الرقم
          (031224822). يمكنك الاتصال أيضا للحصول على إستشارة مجانيه او المساعده
          في الحالات الاسعافيه.
        </p>

        <ul>
          <li>كون اننا نقبل عدد محدد من المرضى تطبق الشروط التاليه</li>
          <br />
          <li>العرض فقط للمرضى الجدد ✔</li>
          <li>العرض صالح لمدة شهر من تاريخ تسجيل معلوماتك الشخصية ✔</li>
          <li>
            {" "}
            krفي حال الغاء او تغيير الموعد قبل اقل من 24 ساعة من وقت الموعد
            يترتب على المريض دفع 700 ✔
          </li>
        </ul>
      </div>

      <div className={styles.bottomSection}>
        <iframe
          title="Clinic address"
          width="520"
          height="400"
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.078490855619!2d11.97432651613306!3d57.69813628111807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff371125f33d3%3A0x2d3e352a81c04148!2sArkivgatan%201%2C%20411%2034%20G%C3%B6teborg!5e0!3m2!1sen!2sse!4v1618327496542!5m2!1sen!2sse"
        />
      </div>
    </div>
  )
}

export default formSuccess
