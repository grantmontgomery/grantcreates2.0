import * as React from "react"
import { Tools } from "./Tools"
import css from "./AboutPage.module.css"

type Props = {
  aboutRef: React.Ref<HTMLElement>
}

export const AboutPage: React.FC<Props> = ({ aboutRef }) => {
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

  return (
    <section ref={aboutRef} id="about" className={css.about}>
      <div className={css.headerWrapper}>
        <div>About</div>
      </div>
      <div className={css.imageWrapper}></div>
      <div className={css.descriptionWrapper}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          eius, pariatur amet at porro aspernatur excepturi possimus libero quam
          quaerat nostrum quisquam, quas nobis assumenda omnis minus quasi.
          Quisquam, laboriosam.
        </p>
      </div>
      <Tools></Tools>
    </section>
  )
}
