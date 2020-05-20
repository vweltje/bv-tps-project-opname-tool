import React from "react"
import Layout from "../components/Layout/Layout"
import ProjectForm from "../components/ProjectForm/ProjectForm"
import Pdf from "../components/Pdf/Pdf"

const IndexPage = () => (
  <Layout>
    <ProjectForm />
    {false && <Pdf />}
  </Layout>
)

export default IndexPage
