import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'


const Home = () => {
  return (
    <div className>
        <Header/>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default Home