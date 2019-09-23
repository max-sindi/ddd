import React from 'react'
import Head from 'next/head'
import Header from "../components/fragments/header/Header"
import '@styles/index.scss'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Header></Header>
  </div>
)

export default Home
