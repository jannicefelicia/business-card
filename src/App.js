import React from 'react'
import About from './components/About'
import Info from './components/Info'
import Interests from './components/Interests'
import Footer from './components/Footer'

export default function App() {
    return(
        <main>
            <Info />
            <div className='middle'>
                <About />
                <Interests />
            </div>
            <Footer />
        </main>
    )
}