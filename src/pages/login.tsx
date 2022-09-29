import type { NextPage } from 'next'
import { useEffect } from 'react'
import Router from "next/router";
import Login from 'components/login'

const Home: NextPage = () => {
  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      Router.push(`/customers-list`);
    }
  }, [])
  return (
  <Login />
  )
}

export default Home
