import React from 'react'
import Typed from 'react-typed';


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
                    strings={["Scientists", "Engineers", "Technologists", "Researchers", "Philosophers", "Historians", "Psychologists"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                    />
                </div>
                <p className='text-slate-200 md:text-2xl text-xl font-bold'>
                    Advancing Humanity with the power of shared information.
                </p>
                <div className='p-0 m-5'>
                    <a href=''>
                        <button type="button" class="rounded-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Get Started
                        </button>
                    </a>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home;


