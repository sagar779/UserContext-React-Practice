import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const [username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, Password})
    }
  return (
    <div>
      <h2>LogIn Kr Le Ab</h2>
      <input type='text'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='username'/><br/>
      <input type='text'
      value={Password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Password'/><br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
