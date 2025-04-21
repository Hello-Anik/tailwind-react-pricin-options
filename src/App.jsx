
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksCart from './components/MarksCart/MarksCart'

function App() {
 
  const PricingPromise = fetch('PricingData.json')
  .then(res=> res.json());
  const marksPromise = axios.get('marksData.json');

  return (
    <>
    <header>
      <Navbar></Navbar>
      
    </header>
    <main>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
      </Suspense>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    <MarksCart marksPromise={marksPromise}></MarksCart>
    </Suspense >
      <ResultChart></ResultChart>
    </main>
    </>
  )
}

export default App
