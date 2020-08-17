import * as React from "react"
import css from "./MobileNav.module.css"

type Props = {
  navLinks: boolean
  handleTap: () => void
}

export const MobileNav: React.FC<Props> = ({ navLinks, handleTap }) => {
  const alterMenu: () => string = () => {
    return navLinks ? "switched" : "normal"
  }

  return (
    <svg
      className={`${css.mobileNav} ${css[alterMenu()]}`}
      onClick={handleTap}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 130"
      role="img"
    >
      <path
        className={css.path1}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke="white"
        d="M19.64,120.75L127.5,12.89c6.77-6.77,18.36-1.98,18.36,7.6v0c0,5.94-4.81,10.75-10.75,10.75H4.14"
      />
      <path
        className={css.path2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke="white"
        d="M19.14,9.25L127,117.11c6.96,6.96,18.86,2.03,18.86-7.81v0c0-6.1-4.95-11.05-11.05-11.05H44.14"
      />
    </svg>
  )
}
