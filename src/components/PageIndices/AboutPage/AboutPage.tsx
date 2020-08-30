import * as React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import css from "./AboutPage.module.css"

export const AboutPage: React.FC = () => {
  const aboutRef = React.useRef<HTMLElement | null>(null)
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
          Hi, I'm Grant! I'm a web developer based in Los Angeles who enjoys
          creating slick digital experiences and efficient solutions. I'm
          seeking a Full-Stack or Front-End Engineering position domestically or
          internationally. Although I know how to implement a fair amount of
          technologies, my greatest trait is my ability to adapt and learn
          quickly whether that be in life or tech. When I'm not coding you can
          catch me at the beach or on a trail.
        </p>
      </div>
    </section>
  )
}
