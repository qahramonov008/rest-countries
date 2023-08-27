import Header from './Header/Header'
import { Outlet } from 'react-router-dom'

const Home = ( {isDark, setIsDark } ) => {
  return (
    <>
        <Header isDark={isDark} setIsDark={setIsDark}/>
        <Outlet />
    </>
  )
}

export default Home