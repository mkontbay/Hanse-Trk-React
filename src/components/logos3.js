import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './logos3.css'

const Logos3 = (props) => {
  return (
    <div className="logos3-container1 thq-section-padding">
      <div className="logos3-max-width thq-section-max-width">
        <h2 className="logos3-text1 thq-heading-2">
          {props.heading1 ?? (
            <Fragment>
              <span className="logos3-text2">
                Trusted by the world&apos;s best companies social proof to build
                credibility
              </span>
            </Fragment>
          )}
        </h2>
        <div className="thq-grid-5">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos3-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos3-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos3-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos3-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos3-logo5 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo6Alt}
            src={props.logo6Src}
            className="logos3-logo6 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo7Alt}
            src={props.logo7Src}
            className="logos3-logo7 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo8Alt}
            src={props.logo8Src}
            className="logos3-logo8 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo9Alt}
            src={props.logo9Src}
            className="logos3-logo9 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo10Alt}
            src={props.logo10Src}
            className="logos3-logo10 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos3.defaultProps = {
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo7Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo8Alt: 'Leckere Burger',
  logo4Alt: 'Online-Bestellung',
  logo8Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo10Alt: 'Erfrischende Getränke',
  logo7Alt: 'Schnelle Verpflegung',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo9Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo6Alt: 'Kontakt',
  heading1: undefined,
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo5Alt: 'Kundenbewertungen',
  logo1Alt: 'Logo des Imbiss',
  logo10Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo2Alt: 'Burger-Symbol',
  logo3Alt: 'Getränke-Auswahl',
  logo9Alt: 'Vielfältige Speisekarte',
}

Logos3.propTypes = {
  logo2Src: PropTypes.string,
  logo1Src: PropTypes.string,
  logo7Src: PropTypes.string,
  logo8Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo8Src: PropTypes.string,
  logo4Src: PropTypes.string,
  logo10Alt: PropTypes.string,
  logo7Alt: PropTypes.string,
  logo5Src: PropTypes.string,
  logo9Src: PropTypes.string,
  logo6Alt: PropTypes.string,
  heading1: PropTypes.element,
  logo3Src: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo10Src: PropTypes.string,
  logo6Src: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo9Alt: PropTypes.string,
}

export default Logos3
