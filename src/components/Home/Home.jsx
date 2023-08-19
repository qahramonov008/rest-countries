import Header from './Header/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Home