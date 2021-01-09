 <a href="https://grantcreates.com">
    <img alt="Grant Creates" src="src/images/GrantCreatesLogoBanner.png" width="100%" />
 </a>

<h1 align="center">
grantcreates.com version 2.0
</h1>

Hi I'm Grant and I like to create rad things! This is my portfolio displaying my digital creations, some created and some being created.

<!-- DO NOT CHANGE -->

_Last updated on Sat, Jan  9, 2021  1:51:26 PM_

<!-- DO NOT CHANGE -->

<p align="center"> 
<span>
<<<<<<< HEAD
<img src="static/DesktopScreenshot.png" width="74.385%">
</img>
</span>
<span>
<img src="static/MobileScreenshot.png" width="20.615%">
=======
<img src="static/DesktopScreenshot.png" width="100%">
</img>
</span>
<span>
<img src="static/MobileScreenshot.png" width="50%">
>>>>>>> 2ac807b332eb6715c9f88f9c62867f207b1ba8a9
</img>
</span>
</p>

## Contents

1. [Deployment](#Deployment)
2. [Motivation](#Motivation)
3. [Design](#Design)
4. [Features](#Features)
5. [Technologies](#Technologies)
6. [Colors](#Colors)
7. [Inspirations](#Inspirations)
8. [License](#License)

## Deployment

`Type text in these blocks in your IDE's or code editor's terminal and hit enter.`

test

1. **Open up a new folder in the IDE or code editor of your choice (Visual Studio Code highly suggested).**
2. `git init`
3. `git clone https://github.com/grantmontgomery/grantcreates2.0.git`
4. **Move all files and folders outside of grantcreates2.0 folder in to the new folder.**
5. **Delete grantcreates2.0 folder.**
6. **Install the Gatsby CLI** `npm install -g gatsby-cli`

7. **Install dependencies** `npm install`

8. **Run the development server** `npm start`

9. **When the build is done in the terminal a window should open up at \***http://localhost:8000**\* in one of your browsers, but if it doesn't visit this address in the browser of your choice.**

- Run production build. `npm run build`
- Preview production build. `npm run server`

## Motivation

With so many other talented developers out there in the community it makes it tough to stand out from the crowd. I realized that for the second iteration of my site I had to create a place that wasn't just a showcase of my skills and projects, but was also an **experience**. I wanted to immerse my visitors and I believed one of the best ways to do that was with clean visual design and a touch of 3D to make the experience more interactive. My work started with the logo you see above and then the 3D models I created using [Vectary](https://www.vectary.com/). UI and visual design were important steps to the equation, but I also needed the site to be fast and that's where my design principle came in.

## Design

While looking around for other examples and inspiration for my portfolio I noticed many portfolios were bogged down by large libraries, assets that were too big, and were built with very complex designs or animations. I created these three principles to avoid these issues during the development of this site.

1. **Load times needed to be fast.**
2. **Bundle size needed to be as light as possible.**
3. **The site needed to be simple in it's layout and UI design.**
4. **Design with a mobile first approach.**

As a developer specializing in React, it made the most sense to me to create the site using it. React by itself is fast, but after researching the power of static site generation and server side rendering I saw that I could make it faster using a framework like [Gatsby](https://www.gatsbyjs.com/) or [Next.js](https://nextjs.org). Both of these tools specialize in static site generation for React applications however Next.js offers a lot more features for Full Stack Applications which I didn't need for this site. For that reason I chose to build it using Gatsby and it allowed me to meet the first two principles of my design.

In order to meet the third and fourth principles I decided to make the site a single page site. I built out the mobile layout of the site first which allowed me to create a more responsive experience. This also made the layout very simple and it allowed for fewer changes to the UI for desktop. The site also doesn't use any complex animations besides the ones from the objects rendered with Three.js.

## Features

These are some of the unique features of my site.

1. **Creations**
   These are the projects I've created or am currently working on.

- Relevant Components
  - [Creations](https://github.com/grantmontgomery/grantcreates2.0/tree/master/src/components/Creations)
  - [Creation](https://github.com/grantmontgomery/grantcreates2.0/tree/master/src/components/Creations/Creation)

2. **3D Objects**
   Interactable 3D objects created with Vectary and rendered using Three.js.

- Relevant Components
  - [Hammer And Anvil](https://github.com/grantmontgomery/grantcreates2.0/tree/master/src/components/HammerAndAnvil)
  - [Hammer](https://github.com/grantmontgomery/grantcreates2.0/tree/master/src/components/Hammer)

3. Contact Form
   Send a message directly to my inbox.

- Relevant Components
  - [Contact Float](https://github.com/grantmontgomery/grantcreates2.0/tree/master/src/components/ContactFloat)
- Backend
  - [Lambda Service](https://github.com/grantmontgomery/grantcreates2.0/blob/master/src/server/server.js)

## Technologies

Here's a list of some of the major Technologies used to create this experience.

- **Languages**
  - [TypeScript](https://github.com/microsoft/TypeScript)
  - JavaScript
  - [GraphQL](https://graphql.org/)
- **Markdown**
  - HTML
- **Styling**
  - [Sass](https://github.com/sass/sass)
  - [CSS Modules](https://github.com/css-modules/css-modules)
  - CSS
- **Libraries**
  - [React.js](https://github.com/facebook/react)
  - [Three.js](https://github.com/mrdoob/three.js)
- **Frameworks**
  - [Gatsby.js](https://github.com/gatsbyjs/gatsby)
- **Micro Services**
  - [Netlify Lambda](https://github.com/netlify/netlify-lambda)
- **SMTP Services**
  - [Nodemailer](https://github.com/nodemailer/nodemailer)
- **APIs**
  - [Google APIs](https://github.com/googleapis/googleapis)
- **Cloud Services**
  - [Netlify](https://github.com/netlify)

## Colors

| Color                          | Hex                                                               |
| ------------------------------ | ----------------------------------------------------------------- |
| Rich Black FOGRA 29            | ![#0b171d](https://via.placeholder.com/10/0b171d?text=+)`#0b171d` |
| Charleston Green               | ![#0f2027](https://via.placeholder.com/10/0f2027?text=+)`#0f2027` |
| Gunmetal                       | ![#203a43](https://via.placeholder.com/10/203a43?text=+)`#203a43` |
| Blue Sapphire                  | ![#2c5363](https://via.placeholder.com/10/2c5363?text=+)`#2c5363` |
| Teal Blue                      | ![#3e768e](https://via.placeholder.com/10/3e768e?text=+)`#3e768e` |
| Sky Blue Crayola (React Color) | ![#61dbfb](https://via.placeholder.com/10/61dbfb?text=+)`#61dbfb` |
| Alice Blue                     | ![#e2eef3](https://via.placeholder.com/10/e2eef3?text=+)`#e2eef3` |
| Emerald                        | ![#57c769](https://via.placeholder.com/10/57c769?text=+)`#57c769` |
| Red Salsa                      | ![#ed4548](https://via.placeholder.com/10/ed4548?text=+)`#ed4548` |

## Inspirations

These are some notable people who's work or advice were huge inspirations for this portfolio. Go check out their work!

- [Brittany Chiang](https://github.com/bchiang7)
- [Artem Gavrysh](https://github.com/temrysh)
- [Pablo Lorenzo](https://github.com/mr-wellick)

## License

- [MIT License](https://github.com/grantmontgomery/grantcreates2.0/blob/master/LICENSE)
