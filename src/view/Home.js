import React from 'react'
import Sidebar from '../components/lib/Sidebar'
import Banner from '../components/home/Banner'
import About from '../components/home/About'
import CTAsec from '../components/home/CTAsec'
import Project from '../components/home/Project'
import Services from '../components/home/Services'
import Services2 from '../components/home/Services2'
import Client from '../components/home/Client'
import Project2 from '../components/home/Project2'
import Team from '../components/home/Team'
import Query_test from '../components/home/Query_test'
import Video from '../components/home/Video'
import News from '../components/home/News'
import Newsletter from '../components/home/Newsletter'

const Home = () => {
  return (
    <>

      {/* Sidebar Cart Item */}
      <Sidebar />
      {/* END sidebar widget item */}

      {/* Banner Section Four */}
      <Banner />
      {/* End Banner Section */}

      {/* About Section */}
      <About />
      {/* End About Section */}

      {/* CTA Section Two */}
      <CTAsec />
      {/* End CTA Section Two */}

      {/* Projects Section */}
      <Project />
      {/* End Projects Section */}

      {/* Services Section Two */}
      <Services />
      {/* End Services Section Two */}

      {/* Services Section Five */}
      <Services2 />
      {/* End Services Section Five */}

      {/* Clients Section / Style Three */}
      <Client />
      {/* End Clients Section / Style Three */}

      {/* Projects Section Two */}
      <Project2 />
      {/* End Projects Section Two */}

      {/* Team Section Two */}
      <Team />
      {/* End Team Section Two */}

      {/* Default Section */}
      <Query_test />
      {/* End Default Section */}

      {/* Video Section */}
      <Video />
      {/* End Video Section */}

      {/* News Section Three */}
      <News />
      {/* End News Section Three */}

      {/* CTA Section Five */}
      <Newsletter />
      {/* End CTA Section Five */}


    </>
  )
}

export default Home