import Head from 'next/head'
import React from 'react'

import VerselLogo from '../assets/vercel.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>GMartins App</title>
      </Head>

      <main>
        <VerselLogo />
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure made by Rocketseat.</p>
      </main>
    </Container>
  )
}

export default Home
