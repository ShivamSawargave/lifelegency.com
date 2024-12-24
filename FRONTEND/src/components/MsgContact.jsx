import React from 'react'
import { Link } from 'react-router-dom'

function MsgContact() {
  return (
    <>
        <div className='flex flex-col md:pt-40 pt-16 justify-center items-center pb-12'>
            <div className='md:text-4xl text-3xl justify-center items-center'>Thank you for showing interest, our relationship executive will get in touch with you shortly.</div>
            <Link to="/"><button className=''>Back to Homepage</button></Link>
        </div>
    </>
  )
}

export default MsgContact