import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/HeaderTwo'
import ContactHero from '../components/pages/contact/ContactHero'
import ContactForm from '../components/pages/contact/ContactForm'

const page = () => {
  return (
    <div className='bg-[#f3f3f3]'>
      <Header />
      <ContactHero />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  )
}

export default page
