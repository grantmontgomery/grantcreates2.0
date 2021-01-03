import * as React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import css from "./AboutPage.module.css"

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
        alt="Grant on a rooftop in Los Angeles"
        imgStyle={{
          position: "relative",
          height: "100%",
          width: "auto",
        }}
        className={css.imageWrapper}
      ></Img>
      <div className={css.descriptionWrapper}>
        <p>
          Hi, I'm Grant! I'm a full stack web developer who enjoys creating
          immersive experiences and applications with the power of React. I'm
          seeking a Full-Stack or Front-End Engineering position where I can
          utilize my skills and experience to bring your ideas to life. My
          previous experience in sales has given me the ability to understand
          the needs of end-users and to build out tools which solve them.
          Besides my technical skill and customer-facing experience, my greatest
          trait is my ability to learn quickly and adapt to any environment or
          tech stack.
        </p>
      </div>
    </section>
  )
}
