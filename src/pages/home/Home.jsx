import React from 'react'
import TopSection from '../../components/home/TopSection'
import WhyChooseUs from '../../components/home/WhyChooseUs'
import AllServices from '../../components/home/AllServices'
import Estimation from '../../components/home/Estimation'
import FeaturedProducts from '../../components/home/FeaturedProducts'
import Blogs from '../../components/home/Blogs'
import Contact from '../../components/home/Contact'

const Home = () => {
  return (
    <main>
      <article>
        <TopSection />
        <WhyChooseUs />
        <AllServices />
        <Estimation />
        <FeaturedProducts />
        <Blogs />
        <Contact/>
      </article>
    </main>
  )
}

export default Home