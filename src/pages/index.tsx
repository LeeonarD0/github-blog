import type { NextPage } from 'next'
import { Header } from '../../components/Header'
import { UserCard } from '../../components/UserCard'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <UserCard/>
    </>
  )
}

export default Home
