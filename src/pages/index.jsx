import React from "react"
import Layout from "../components/Layout/Layout"
import ProjectForm from "../components/ProjectForm/ProjectForm"
import Pdf from "../components/Pdf/Pdf"

const IndexPage = () => (
  <>
    {false ? (
      <Layout>
        <ProjectForm />
      </Layout>
    ) : (
      <Layout noMaxWidth>
        <Pdf />
      </Layout>
    )}
  </>
)

export default IndexPage
