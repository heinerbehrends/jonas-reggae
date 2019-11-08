/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from "prop-types"
import { Styled, jsx, Container } from "theme-ui"

import useSiteMetadata from "gatsby-theme-musician/src/use-site-metadata"
import HeroImage from "gatsby-theme-musician/src/components/hero-image"

let additionalStyles = {}
let bgOverlayStyles = {}

const paddedMultiline = { 
  lineHeight: 1.4,
  padding: '2px 0',
  width: '75%',
  margin: '20px auto',
};

const paddedMultilineSpan = { 
  backgroundColor: 'rgba(0,0,0,0.6)',
  color: '#fff',
  display: 'inline',
  padding: '0.2rem 1rem',
  
  /* Needs prefixing */
  boxDecorationBreak: 'clone',
  WebkitBoxDecorationBreak: 'clone',
};

const BannerContent = ({ title, tagline }) => (
  <>
    <Styled.h1 style={paddedMultiline} >
      <span style={paddedMultilineSpan}>{title}</span>
    </Styled.h1>
    {tagline && <p style={paddedMultiline}><span style={paddedMultilineSpan}>{tagline}</span></p>}
  </>
)

const Banner = ({ children, bgOverlay, color }) => {
  const { title, artist, bannerImg } = useSiteMetadata()

  if (bannerImg) {
    additionalStyles["flexDirection"] = "column"
  }
  if (color) {
    additionalStyles["color"] = "color"
  }

  if (bgOverlay) {
    bgOverlayStyles = {
      "&:after": {
        background: bgOverlay,
      },
    }
  }

  const bannerContentElement = (
    <BannerContent
      title={title}
      tagline={typeof artist.tagline === "undefined" ? null : artist.tagline}
    />
  )

  return (
    <div
      className="GtmBanner"
      sx={{
        variant: "components.banner",
        ...additionalStyles,
        ...bgOverlayStyles,
        minHeight: 0, 
      }}
    >
      {bannerImg ? (
        <HeroImage
          className="GtmBanner__hero-wrapper"
          fluid={bannerImg.fluid}
          sx={{ flexGrow: 1 }}
        >
          <Container className="GtmBanner__content-wrapper">
            {children || bannerContentElement}
          </Container>
        </HeroImage>
      ) : (
        <Container
          className="GtmBanner__content-wrapper"
          sx={{ alignSelf: "center" }}
        >
          {children || bannerContentElement}
        </Container>
      )}
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.any,
  bgOverlay: PropTypes.string,
  color: PropTypes.string,
}

export default Banner
