export type CreationData = {
  name: string
  subTitle: string
  detailsName: string
  details: string
  technologies: string
  githublink: string
  link: string
}

type Data = {
  apps: CreationData[]
  websites: CreationData[]
}

export const creationsData: Data = {
  apps: [
    {
      name: "Seknd",
      subTitle: "React Web Application",
      detailsName: "Seknd (Second)",
      details: "",
      technologies: "React Redux Express Sass",
      githublink: "https://github.com/grantmontgomery/seknd",
      link: "sekndapp.com",
    },
  ],
  websites: [
    {
      name: "Grant Creates",
      subTitle: "Gatsby Portfolio Website",
      detailsName: "Grant Creates",
      details: "My portfolio site",
      technologies: "Typescript Gatsby React Express Sass",
      githublink: "https://github.com/grantmontgomery/grantcreates2.0",
      link: "",
    },
  ],
}
