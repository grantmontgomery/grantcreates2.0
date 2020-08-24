import * as React from "react"
import { Tools } from "../../Tools"
import { Scene } from "../../Hammer"
import css from "./AboutPage.module.css"

export const AboutPage: React.FC = () => {
  //For When I need to drop in a picture of myself.
  // const { file } = useStaticQuery(graphql`
  //   query NewQuery {
  //     file(relativePath: { eq: "MailIconCompressed.png" }) {
  //       childImageSharp {
  //         fluid {
  //           aspectRatio
  //           base64
  //           sizes
  //           src
  //           srcSet
  //         }
  //       }
  //     }
  //   }
  // `)

  const aboutRef = React.useRef<HTMLElement | null>(null)

  return (
    <section
      id="aboutPage"
      data-name="aboutPage"
      ref={aboutRef}
      className={css.about}
    >
      <div className={css.header}>About</div>
      <div className={css.imageWrapper}></div>
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
