import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor :color}}
    >
      <div className=" flex flex-wrap justify-center pt-96       inset-x-0 px-2">
        <div className=' felx flex-wrap justify-center gap-3 shadow-lg bg-white
         px-4 py-2 rounded-3xl mt-48'>
          <button onClick={()=>setColor("red")} className=' outline-none px-4 
          py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}}>
            RED
          </button>
          <button onClick={()=>setColor("blue")} className=' outline-none px-4 
          py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"blue"}}>
            BLUE
          </button>
          <button onClick={()=>setColor("Green")} className=' outline-none px-4 
          py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"green"}}>
            GREEN
          </button>
          <button onClick={()=>setColor("purple")} className=' outline-none px-4 
          py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"purple"}}>
            PURPLE
          </button>
          <button onClick={()=>setColor("crimson")} className=' outline-none px-4 
          py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"crimson"}}>
            CRIMSON
            
          </button>

        </div>

      </div>
    </div>
  )
}

export default App
