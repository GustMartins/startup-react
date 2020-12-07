import Head from 'next/head'
import React from 'react'

import VerselLogo from '../assets/vercel.svg'
import { Container, Heading, Paragraph } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>GMartins App</title>
      </Head>

      <main>
        <VerselLogo />
        <Heading>ReactJS Structure</Heading>
        <Paragraph>A ReactJS + Next.js structure made by Rocketseat.</Paragraph>
      </main>
    </Container>
  )
}

export default Home
