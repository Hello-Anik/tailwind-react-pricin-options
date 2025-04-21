
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'

function App() {
 
  const PricingPromise = fetch('PricingData.json')
  .then(res=> res.json());

  return (
    <>
    <header>
      <Navbar></Navbar>
      
    </header>
    <main>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
      </Suspense>
    </main>
    </>
  )
}

export default App
