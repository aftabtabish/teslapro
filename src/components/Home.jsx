import React from 'react'

import Ban from './Ban'
import Footer from './Footer'
import Header from './Header'
export default function Home() {
  return (
    <div>
    <Header/>
    <section className='first'>
    <video
    src="./videos/video1.mp4" autoPlay loop muted className='video'/>


        
        <Ban
        title="Model 3"
        subtitle="From $29,740*"
        description="After Federal Tax Credit & Est. Gas Savings"
        buttonText1="Order Now"
        buttonText2="Demo Drive"
        note="*Price before incentives and savings is $40,240, excluding taxes and fees. Subject to change."
        linkText="Learn about est. gas savings."
        hideButton2={true}
      />
      </section>


      <section className='second'>
    
        <img src="./images/img2.jpg" alt="" className='img1'/>

        

        <Ban
        title="Model Y"
        subtitle="From $36,640*"
        description="After Federal Tax Credit & Est. Gas Savings"
        buttonText1="Order Now"
        buttonText2="Demo Drive"
        note="*Price before incentives and savings is $47,740, excluding taxes and fees. Subject to change."
        linkText="Learn about est. gas savings."
        hideButton2={true}
      />
      </section>

      <section className='third'>
    
        <img src="./images/img3.jpg" alt="" className='img1'/>

        

        <Ban
        title="Model S"
        subtitle="From $71,090*"
        description="After Est. Gas Savings"
        buttonText1="Order Now"
        buttonText2="Demo Drive"
        note="*Price before savings is $74,990, excluding taxes and fees. Subject to change."
        linkText="Learn about est. gas savings."
        hideButton2={true}
      />
      </section>


      <section className='fourth'>
    
        <img src="./images/img4.jpg" alt="" className='img1'/>

        

        <Ban
        title="Model X"
        subtitle="From $68,590*"
        description="After Federal Tax Credit & Est. Gas Savings"
        buttonText1="Order Now"
        buttonText2="Demo Drive"
        note="*Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change."
        linkText="Learn about est. gas savings."
        hideButton2={true}
      />
      </section>


      <section className='fifth'>
    
      <video
    src="./videos/video2.mp4" autoPlay loop muted className='video'/>

        

        <Ban
        title="Experience Tesla"
        description="Schedule a Demo Drive Today"
        buttonText1="Demo Drive"
        hideButton2={false}
      />
      </section>


      <section className='six'>
    
        <img src="./images/img6.jpg" alt="" className='img1'/>

        

        <Ban
        title="Solar Panels"
        subtitle="Schedule a Virtual Consultation*"
        buttonText1="Order Now"
        buttonText2="Learn More"
        hideButton2={true}
      />
      </section>

      <section className='seven'>
    
        <img src="./images/img7.jpg" alt="" className='img1'/>

        

        <Ban
        title="Accessories"
        buttonText1="Shop Now"
        hideButton2={false}
      />
      <Footer/>
     
      </section>
    </div>
  )
}
