import React from "react"

import Layout from "../components/layout"
import Head from '../components/head'

import Header from "../components/header"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from '../components/contact'
import Footer from "../components/footer"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <Header/>
      <Hero/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </Layout>
  )
}

export default HomePage