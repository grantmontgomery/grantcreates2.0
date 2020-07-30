import * as React from "react"
import { Tools } from "./Tools"
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

  // const observer = new IntersectionObserver(
  //   entries => {
  //     const opacityBar2: HTMLElement | null = document.getElementById(
  //       "opacityBar2"
  //     )

  //     if (entries.length === 1) {
  //       return entries[0].intersectionRatio > 0.05
  //     }
  //   },
  //   { threshold: [0, 0.05, 0.1, 0.15] }
  // )

  // React.useLayoutEffect(() => aboutRef.current?.focus())

  // React.useEffect(() => {
  //   if (aboutRef.current) {
  //     observer.observe(aboutRef.current)
  //   }
  // }, [])

  return (
    <section id="about" ref={aboutRef} className={css.about}>
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
