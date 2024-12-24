import React from 'react'


function Hero() {
  return (
    <section className='hero'>
        <div className="content">
            <div className="title">
                <h1>LET'S</h1>
                <h1>GET</h1>
                <h1>MOVING</h1>
            </div>
            <div className="sub-title">
                <p>Your Journey to Fitness Starts Here</p>
                <p>Unleash Your Potential</p>
            </div>
            <div className="buttons">
                <a href="Contact"><button>Start Your Journey</button></a>
                <a href='Pricing'><button>Discover Your Plan</button></a>
            </div>
        </div>
    </section>
  )
}

export default Hero