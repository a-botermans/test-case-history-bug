import React from 'react'
import Content from '../components/content'
import Layout from '../components/layout'
import Header from '../components/header'

export default ({ pageContext }) => (
  <Layout>
  	<Header title={pageContext.title}></Header>
  	<Content></Content>
  </Layout>
)
