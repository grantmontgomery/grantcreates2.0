import * as React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import css from "./AboutPage.module.css"

const portraitDimensions = {
  position: "relative",
  height: "100%",
  width: "auto",
}

const landscapeDimensions = {
  position: "relative",
  height: "auto",
  width: "100%",
}

export const AboutPage: React.FC<{
  aboutRef: React.MutableRefObject<HTMLElement | null>
}> = ({ aboutRef }) => {
  const {
    file: { childImageSharp },
  } = useStaticQuery(
    graphql`
      query PicQuery {
        file(relativePath: { eq: "GrantCreatesCompressed.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            fixed {
              src
              srcSet
            }
          }
        }
      }
    `
  )

  const [portrait, setPortraitMode] = React.useState<boolean>(false)

  React.useEffect(() => {
    window.innerWidth < window.innerHeight && setPortraitMode(true)
  }, [])

  const { fluid, fixed } = childImageSharp

  return (
    <section
      id="aboutPage"
      data-name="aboutPage"
      ref={aboutRef}
      className={css.about}
    >
      <div className={css.header}>About</div>
      <div className={css.borderFrame}></div>
      <Img
        fluid={fluid}
        placeholderStyle={{ display: "none" }}
        fadeIn={true}
        loading="eager"
        title="Grant Montgomery"
        alt="Grant Montgomery"
        imgStyle={portrait ? portraitDimensions : landscapeDimensions}
        className={css.imageWrapper}
      ></Img>
      <p className={css.description}>
        Hi, I'm Grant! I'm a full stack developer who enjoys creating immersive
        experiences and applications using web technologies such as React. I
        currently work at{" "}
        <a className={css.link} href="https://www.goodrx.com">
          GoodRx
        </a>{" "}
        as a software engineer on the{" "}
        <a href="https://www.goodrx.com/health" className={css.link}>
          GoodRx Health
        </a>{" "}
        team. If you have any questions about my work or would like to get in
        contact for consulting you can reach me{" "}
        <a className={css.link} href="/#contactPage">
          here
        </a>
        .
      </p>
    </section>
  )
}
