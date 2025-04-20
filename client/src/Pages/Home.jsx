import React from 'react'
import Records from '../Components/Records'
import Form from '../Components/Form'

function Home() {
  return (
    <section className= ' my-[4rem] h-auto w-[100vw] flex justify-around'>
      <Records />
      <Form />
    </section>
  )
}

export default Home