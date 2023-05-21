import { UserProvider, useUser } from './UserContext'
import './App.css'

const LoggedInUser = () => {
  const { user } = useUser()
  return (
    <p>
      Hello<span className='Username'>{user.name}</span>
    </p>
  )
}

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  )
}

const Page = () => {
  const { user } = useUser()
  return (
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, numquam accusantium praesentium temposre vitae libero voluptates temporibus eum? Quae, magnam!
      </p>
      <p>Written by {user.name}</p>
      <p>Email adress : {user.email}</p>
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <Header />
      <Page />
    </div>
  )
}

function Root() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  )
}

export default Root
