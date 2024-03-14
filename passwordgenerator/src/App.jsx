import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(8)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const text = useRef(null)
  const copyref = useRef(null)


  const handleGeneratePassword = useCallback(()=>{
    let password = ''
    let charSet = 'abcdefghijklmnopqrstuvwxyz'
    if(includeUppercase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(includeNumbers) charSet += '0123456789'
    if(includeSymbols) charSet += '!@#$%^&*()_+'
    for(let i=0; i<passwordLength; i++){
      const randomIndex = Math.floor(Math.random() * charSet.length)
      password += charSet[randomIndex]
    }
    setPassword(password)
  }, [passwordLength, includeUppercase, includeNumbers, includeSymbols,setPassword])

  const copy = useCallback(()=>{
    console.log("in")
    window.navigator.clipboard.writeText(password)
    text.current.select()
    copyref.current.style.backgroundColor = 'green'
    setTimeout(()=>copyref.current.style.backgroundColor = 'blue', 10000)
    },[text,passwordLength,includeNumbers,includeSymbols,includeUppercase])

  useEffect(()=>{
    handleGeneratePassword()
  }, [handleGeneratePassword,includeNumbers,includeSymbols,includeUppercase,passwordLength])

  

  return (
    <>
      <div className='w-full h-screen bg-black'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-white text-4xl text-center p-4'>Password Generator</h1>
          <div className='flex flex-row justify-center text-center items-center gap-2'>
            <input className='text-orange-600 text-xl text-center px-4 rounded-lg bg-gray-200' value={password} readOnly ref={text} />
            <button className='text-white text-lg text-center px-2 bg-blue-500 rounded-lg' ref={copyref} onClick={copy}>COPY</button>
          </div>
          <div className='flex justify-center items-center text-center gap-1'>
            <input type='range' id='number' className='w-20 h-10 text-center' min={8} max={20} value={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)} />
            <label htmlFor="number" className='text-white bg-slate-500 px-2 rounded-md' >{passwordLength}</label>
            <button className='bg-blue-500 p-2 m-2 rounded-md' onClick={handleGeneratePassword}>Generate Password</button>
          </div>
          <div className='flex justify-center items-center'>
            <label htmlFor='uppercase' className='text-white'>Include Uppercase</label>
            <input type='checkbox' id='uppercase' className='m-2' checked={includeUppercase} onChange={(e)=>setIncludeUppercase(e.target.checked)} />
            <label htmlFor='numbers' className='text-white'>Include Numbers</label>
            <input type='checkbox' id='numbers' className='m-2' checked={includeNumbers} onChange={(e)=>setIncludeNumbers(e.target.checked)} />
            <label htmlFor='symbols' className='text-white'>Include Symbols</label>
            <input type='checkbox' id='symbols' className='m-2' checked={includeSymbols} onChange={(e)=>setIncludeSymbols(e.target.checked)} />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
