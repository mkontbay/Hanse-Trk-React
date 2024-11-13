import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="footer4-image"
            />
          </div>
          <div className="footer4-links">
            <Link to="/contact" className="thq-body-small">
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text20">Kontakt</span>
                </Fragment>
              )}
            </Link>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text14">Über uns</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text16">Speisekarte</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text18">Impressum</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 Hanse Türk</span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text17">Datenschutzerklärung</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text19">AGB</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text15">Cookie-Richtlinien</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link2: undefined,
  cookiesLink: undefined,
  link3: undefined,
  imageAlt: 'image',
  privacyLink: undefined,
  link5: undefined,
  termsLink: undefined,
  imageSrc: '/5.svg',
  link1: undefined,
}

Footer4.propTypes = {
  link2: PropTypes.element,
  cookiesLink: PropTypes.element,
  link3: PropTypes.element,
  imageAlt: PropTypes.string,
  privacyLink: PropTypes.element,
  link5: PropTypes.element,
  termsLink: PropTypes.element,
  imageSrc: PropTypes.string,
  link1: PropTypes.element,
}

export default Footer4
