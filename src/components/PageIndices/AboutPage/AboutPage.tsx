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
        experiences and applications with the power of React. I'm currently
        working at{" "}
        <a
          className={css.link}
          target="_blank"
          href="https://www.intellipse.com/"
        >
          Intellipse
        </a>{" "}
        as a Customer Solutions Engineer using React, GraphQL, PostGreSQL, and
        TypeScript to support the sales and development teams. If you would like
        to reach out about advice, projects, or consultations you can click on
        the mail icon on the bottom right and fill out the form. I also love
        connecting with other developers or people in the industry as well so
        feel free to follow me on Twitter at{" "}
        <a className={css.link} href="https://twitter.com/grantcreates">
          @grantcreates
        </a>
        .
      </p>
    </section>
  )
}
