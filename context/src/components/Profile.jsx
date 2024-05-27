import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {User} = useContext(UserContext)

  if(!User) return <h1>Please Login</h1>

    return (
        <>
            <h2>Welcome {User.Username}</h2>
        </>
    )

}

export default Profile
