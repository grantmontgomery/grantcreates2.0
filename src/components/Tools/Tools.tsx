import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Tool } from "./Tool"
import css from "./Tools.module.css"

export const Tools: React.FC = () => {
  const {
    allToolsJson: { nodes },
  } = useStaticQuery(graphql`
    query ToolsQuery {
      allToolsJson {
        nodes {
          tools
        }
      }
    }
  `)

  const { tools } = nodes[0]

  return (
    <div className={css.toolsWrapper}>
      {tools.map(tool => (
        <Tool name={tool}></Tool>
      ))}
    </div>
  )
}
