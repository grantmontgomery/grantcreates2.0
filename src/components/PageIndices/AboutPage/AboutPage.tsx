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
        Hi, I'm Grant! I'm a full stack web developer who enjoys creating
        immersive experiences and applications with the power of React. I'm
        seeking a Full-Stack or Front-End Engineering position where I can
        utilize my skills and experience to bring your ideas to life. My
        previous experience in sales has given me the ability to understand the
        needs of end-users and to build out tools which solve them. Besides my
        technical skill and customer-facing experience, my greatest trait is my
        ability to learn quickly and adapt to any environment or tech stack.
      </p>
    </section>
  )
}
