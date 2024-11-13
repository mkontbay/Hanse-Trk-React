import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Contact11 from '../components/contact11'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Hanse Türk</title>
        <meta property="og:title" content="Contact - Hanse Türk" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="contact-text10">Start</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">Speisekarte</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">Über uns</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13">Kontakt</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text14">Startseite</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text15">Speisekarte</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text16">Über uns</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text17">Kontakt</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text18">Bestellen</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text19">Anrufen</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="contact-text20">
              Willkommen auf unserer Startseite. Entdecken Sie unsere leckeren
              Angebote!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text21">
              Schauen Sie sich unsere vielfältige Speisekarte an und wählen Sie
              Ihre Lieblingsgerichte.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text22">
              Erfahren Sie mehr über uns, unsere Geschichte und unser Team.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="contact-text23">
              Nehmen Sie Kontakt mit uns auf. Wir freuen uns auf Ihre Anfragen!
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Contact11
        email={
          <Fragment>
            <span className="contact-text24">info@beispielimbiss.de</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text25">+49 123 456789</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text26">
              Musterstraße 123, 12345 Musterstadt
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text27">
              Für Reservierungen oder Anfragen kontaktieren Sie uns gerne über
              das Kontaktformular.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text28">
              Wir freuen uns von Ihnen zu hören!
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact-text29">
              Besuchen Sie uns während unserer Öffnungszeiten oder kontaktieren
              Sie uns telefonisch.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="contact-text30">
              Folgen Sie uns auf den sozialen Medien für die neuesten Updates
              und Aktionen.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text31">Kontaktieren Sie uns</span>
          </Fragment>
        }
      ></Contact11>
      <Footer4
        link1={
          <Fragment>
            <span className="contact-text32">Kontakt</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text33">Über uns</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text34">Speisekarte</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact-text35">Impressum</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="contact-text36">AGB</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact-text37">Cookie-Richtlinien</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text38">Datenschutzerklärung</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact
