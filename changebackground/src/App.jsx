import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor:color}}>
        <div className='flex flex-raw items-center justify-center h-10 w-4/5 mx-auto rounded-lg bg-slate-200 gap-3'>
          <button onClick={()=>setColor("red")} className='bg-red-600 w-12 h-5 rounded-md text-center'>Red</button>
          <button onClick={()=>setColor("black")} className='bg-black w-12 h-5 rounded-md text-center'>black</button>
          <button onClick={()=>setColor("blue")} className='bg-blue-600 w-12 h-5 rounded-md text-center'>blue</button>
          <button onClick={()=>setColor("yellow")} className='bg-yellow-400 w-12 h-5 rounded-md text-center'>yellow</button>
          <button onClick={()=>setColor("orange")} className='bg-orange-600 w-12 h-5 rounded-md text-center'>orange</button>
          <button onClick={()=>setColor("purple")} className='bg-purple-600 w-12 h-5 rounded-md text-center'>purple</button>
          <button onClick={()=>setColor("green")} className='bg-green-600 w-12 h-5 rounded-md text-center'>green</button>
          <button onClick={()=>setColor("brown")} className='bg-amber-800 w-12 h-5 rounded-md text-center'>amber</button>
          <button onClick={()=>setColor("white")} className='bg-white w-12 h-5 rounded-md text-center'>white</button>
        </div>
      </div>
      
    </>
  )
}

export default App
