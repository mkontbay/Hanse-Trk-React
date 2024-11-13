import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text28">Kundenbewertungen</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text30">
                  Ich liebe die frischen Sandwiches und die freundliche
                  Bedienung hier. Immer eine gute Wahl für einen schnellen
                  Snack!
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text34">
                            Anna Müller
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            Stammkundin
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text29">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            Max Mustermann
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35">Besucher</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text26">
                        Tolle Auswahl an Getränken und Snacks. Perfekt für einen
                        Zwischenstopp während des Einkaufsbummels.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            Julia Schmidt
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text36">
                            Studentin
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text37">
                        Super leckere Burger zu fairen Preisen. Hier komme ich
                        gerne mit meinen Freunden vorbei.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Fritz Wagner
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text31">
                            Berufstätiger
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text25">
                        Schnelle Bedienung und immer frische Speisen. Mein
                        Lieblingsort für eine schnelle Mahlzeit in der
                        Mittagspause.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author3Name: undefined,
  review4: undefined,
  author3Alt: 'Bild von Julia Schmidt',
  review2: undefined,
  author2Name: undefined,
  author1Alt: 'Bild von Anna Müller',
  author2Src:
    'https://images.unsplash.com/photo-1534458246008-80a1ce3028cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDEyNTMzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1634034379073-f689b460a3fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDEyNTMzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  review1: undefined,
  content1: undefined,
  author4Position: undefined,
  author4Name: undefined,
  author2Alt: 'Bild von Max Mustermann',
  author1Position: undefined,
  author1Name: undefined,
  author2Position: undefined,
  author4Alt: 'Bild von Fritz Wagner',
  author4Src:
    'https://images.unsplash.com/photo-1468218457742-ee484fe2fe4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDEyNTMzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1531727991582-cfd25ce79613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDEyNTMzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  review3: undefined,
}

Testimonial17.propTypes = {
  author3Name: PropTypes.element,
  review4: PropTypes.element,
  author3Alt: PropTypes.string,
  review2: PropTypes.element,
  author2Name: PropTypes.element,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  heading1: PropTypes.element,
  review1: PropTypes.element,
  content1: PropTypes.element,
  author4Position: PropTypes.element,
  author4Name: PropTypes.element,
  author2Alt: PropTypes.string,
  author1Position: PropTypes.element,
  author1Name: PropTypes.element,
  author2Position: PropTypes.element,
  author4Alt: PropTypes.string,
  author4Src: PropTypes.string,
  author3Position: PropTypes.element,
  author1Src: PropTypes.string,
  review3: PropTypes.element,
}

export default Testimonial17