import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero171 from '../components/hero171'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hanse Türk</title>
        <meta property="og:title" content="Hanse Türk" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">Start</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">Speisekarte</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">Über uns</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">Kontakt</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Startseite</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Speisekarte</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Über uns</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Kontakt</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Bestellen</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Anrufen</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text20">
              Willkommen auf unserer Startseite. Entdecken Sie unsere leckeren
              Angebote!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">
              Schauen Sie sich unsere vielfältige Speisekarte an und wählen Sie
              Ihre Lieblingsgerichte.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">
              Erfahren Sie mehr über uns, unsere Geschichte und unser Team.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">
              Nehmen Sie Kontakt mit uns auf. Wir freuen uns auf Ihre Anfragen!
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero171
        content1={
          <Fragment>
            <span className="home-text24">
              Das beste Essen für beste Preise!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text25">Willkommen bei Hanse Türk!</span>
          </Fragment>
        }
      ></Hero171>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text26">Vielfältige Burgerauswahl</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text27">Knusprige Beilagen</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text28">Erfrischende Getränke</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text29">
              Genießen Sie unsere vielfältige Auswahl an köstlichen Burgern, die
              frisch zubereitet werden.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text30">
              Probieren Sie unsere knusprigen Pommes und andere leckere
              Beilagen, die perfekt zu unseren Gerichten passen.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text31">
              Entdecken Sie unsere Auswahl an erfrischenden Getränken, von
              Limonaden bis hin zu Eistees.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text32">Jetzt bestellen</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text33">
              Entdecken Sie unsere leckeren Speisen und Getränke.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text34">Besuchen Sie uns heute!</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text35">Schnelle Verpflegung</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text36">Vielfältige Speiseauswahl</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text37">Gemütliche Atmosphäre</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text38">
              Genießen Sie eine schnelle und unkomplizierte Verpflegung in
              unserem Imbiss.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text39">
              Entdecken Sie eine vielfältige Auswahl an Speisen und Getränken in
              unserem Imbiss.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text40">
              Erleben Sie eine gemütliche Atmosphäre, während Sie bei uns
              speisen.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text41">Wähle deine Speisen aus</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text42">Bestelle und bezahle</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text43">Warte auf deine Bestellung</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text44">Genieße deine Mahlzeit</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text45">
              Schau dir unsere vielfältige Speisekarte an und wähle deine
              Lieblingsgerichte aus.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text46">
              Füge die gewünschten Speisen und Getränke zu deinem Warenkorb
              hinzu und bezahle bequem online oder vor Ort.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text47">
              Lehne dich zurück und warte, bis deine Bestellung frisch
              zubereitet und für dich bereit ist.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text48">
              Nimm deine Bestellung entgegen und genieße deine köstliche
              Mahlzeit von unserem Imbiss.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text49">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text50">
              Tolle Auswahl an Getränken und Snacks. Perfekt für einen
              Zwischenstopp während des Einkaufsbummels.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text51">
              Super leckere Burger zu fairen Preisen. Hier komme ich gerne mit
              meinen Freunden vorbei.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text52">
              Schnelle Bedienung und immer frische Speisen. Mein Lieblingsort
              für eine schnelle Mahlzeit in der Mittagspause.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text53">
              Ich liebe die frischen Sandwiches und die freundliche Bedienung
              hier. Immer eine gute Wahl für einen schnellen Snack!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text54">Kundenbewertungen</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text55">Anna Müller</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text56">Max Mustermann</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text57">Julia Schmidt</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text58">Fritz Wagner</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text59">Stammkundin</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text60">Besucher</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text61">Studentin</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text62">Berufstätiger</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text63">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text64">Kontaktieren Sie uns</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text65">Besuchen Sie uns persönlich</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text66">
              Schreiben Sie uns eine Nachricht
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text67">
              Kommen Sie vorbei und genießen Sie unsere Speisen und Getränke
              direkt vor Ort.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text68">
              Für Anfragen oder Feedback können Sie uns gerne eine Nachricht
              hinterlassen.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text69">Kontakt</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text70">Über uns</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text71">Speisekarte</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text72">Impressum</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text73">AGB</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text74">Cookie-Richtlinien</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text75">Datenschutzerklärung</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
