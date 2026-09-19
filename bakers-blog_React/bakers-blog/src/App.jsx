import { useState } from 'react'
import { Routes, Route } from 'react-router';
import { ContextProvider } from './ContextProvider';
import Nav from './components/Nav';
import Home from './pages/Home'
import Search from './pages/Search';
import Types from './pages/Types';
import About from './pages/About';
import LogSignIn from './pages/LogSignIn';
import Footer from './components/Footer';
import IndividualRecipe from './pages/IndividualRecipe';
import Account from './pages/Account'
import { recipeMockData } from './data/recipes'
import './App.css'

function App() {

  return (
    <>
    <ContextProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/types/:tag' element={<Types />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<LogSignIn />} />
          <Route path="recipe/:id" element={<IndividualRecipe />} />
          <Route path="account/" element={<Account />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </>
  )
}

export default App
