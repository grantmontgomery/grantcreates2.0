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
        have previous experience as a Customer Solutions Engineer where I was
        tasked with developing full stack tools and features using React, Apollo
        GraphQL, PostGreSQL, and Node.js. I'm currently seeking a role where I
        can continue applying my skills and experience in order to contribute
        towards building amazing products. If you would like to get in contact
        with me about opportunities or assistance in solving your development
        needs you can contact me{" "}
        <a className={css.link} href="/#contactPage">
          here
        </a>{" "}
        or follow me on Twitter at{" "}
        <a className={css.link} href="https://twitter.com/grantcreates">
          @grantcreates
        </a>
        .
      </p>
    </section>
  )
}
