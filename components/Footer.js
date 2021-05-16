import React from "react"

const Footer = () => (
  <footer>
    <img src="/logo.svg" alt="" className="logo" />
    <blockquote>quality dental</blockquote>
    <div className="content">
      <ul>
        <li>
          <img src="/footer/phone.svg" alt="" />
          <p>031-22 48 22</p>
        </li>
        <li>
          <img src="/footer/email.svg" alt="" />
          <p>info@qualitydental.se</p>
        </li>
        <li>
          <img src="/footer/location.svg" alt="" />
          <p>Arkivgatan 1, 411 34 Göteborg</p>
        </li>
      </ul>

      <ul className="open">
        <li>
          <h4>oppettider</h4>
        </li>
        <li>
          <p className="day">mån - tor</p>
          <p>09:00 - 18:00</p>
        </li>
        <li>
          <p className="day">fre</p>
          <p>11:00 - 15:00</p>
        </li>
      </ul>
    </div>
    <div className="ctas">
      <a
        href="https://www.instagram.com/qualitydentalsweden/"
        target="_blank"
        className="instagram"
      >
        <img src="/footer/instagram.svg" alt="" />
        <p>@qualitydentalsweden</p>
      </a>
      <a
        href="https://www.facebook.com/qualitydentalsweden/"
        target="_blank"
        className="facebook"
      >
        <img src="/footer/facebook.svg" alt="" />
        <p>@qualitydentalsweden</p>
      </a>
    </div>
    <div className="foot">
      <span>Skapad av Ali Suliman | ali.suliman.dev@gmail.com</span>
    </div>
  </footer>
)

export default Footer
