import React,{useState} from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const HandleLogin = ()=>{
        setUser({Username,Password})
    }

  return (
    <>

        <input type="text" value={Username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username'/>
        {" "}
        {" "}
        <input type="password" value={Password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'/>
        <button onClick={HandleLogin}>Login</button>


    </>
  )
}

export default Login
