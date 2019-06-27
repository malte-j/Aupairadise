import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
export default () => <Layout>
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
    <p>Die Seite exisitiert nicht ¯\_(ツ)_/¯</p>
    <Link to='/'>Zurück zur Brücke</Link>
  </div>
</Layout>