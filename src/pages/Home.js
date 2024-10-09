import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import { Grid } from '@mui/material'
import Experiences from '../components/Experiences'
import Hackathons from '../components/Hackathons'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <Title />
        <Grid my={8} />
        <Experiences />
        <Hackathons />
        <Footer />
    </>
  )
}

export default Home
