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
    <section id="about" ref={aboutRef} className={css.about}>
      <div className={css.header}>About</div>
      <div className={css.imageWrapper}></div>
      <div className={css.descriptionWrapper}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          eius, pariatur amet at porro aspernatur excepturi possimus libero quam
          quaerat nostrum quisquam, quas nobis assumenda omnis minus quasi.
          Quisquam, laboriosam.
        </p>
      </div>
      {/* <div className={css.toolsHeader}>Tools</div>
      <div className={css.hammer}></div>
      <Scene></Scene>
      <Tools></Tools> */}
    </section>
  )
}
