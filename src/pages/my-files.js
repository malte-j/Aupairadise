import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <div>
        <h1>Meine Dateien</h1>
        <table>
          <thead>
            <tr>
             { 
               Object.keys(data.allFile.edges[0].node).map((label, index) => (
                 <td key={index}>{label}</td>
               ))}            
            </tr>
          </thead>
          <tbody>
          {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime
        }
      }
    }
}
`
