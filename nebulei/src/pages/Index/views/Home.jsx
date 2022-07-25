import React from 'react'
import Typed from 'react-typed';

import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'

function Home() {
  return (
    <main>
        <section className='bg-black '>
            <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='text-white md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 main-font'>
                    Nebulei
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='text-white md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        Platform for,
                    </p>
                    <Typed
                    className='text-[#9D4EDD] md:text-5xl sm:text-4xl text-xl font-bold underline decoration-4 underline-offset-4  md:pl-4 pl-2 raleway-italic'
                    strings={["Scientist's", "Engineer's", "Technologist's", "Researcher's", "Philosopher's", "Intellectual's"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                    />
                </div>
                <p className='text-slate-200 md:text-2xl text-xl font-bold'>
                    Advancing Humanity with the power of shared information.
                </p>
            </div>
        </section>
    </main>
  )
}

export default Home;


