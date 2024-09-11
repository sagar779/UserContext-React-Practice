import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    
    <div>
    <UserContextProvider>
      <h1> Shik Gya Bete</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>  
    </div>
  )
}

export default App
