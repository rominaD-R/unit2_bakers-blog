import React from 'react'
import { Link } from 'react-router';
import { motion } from "motion/react"
import './css/FeaturedHero.css'

export default function FeaturedHero() {
  return (
    <>
      <div id='featuredHero'>
        <motion.div className='white-block' 
          initial={{ x: -300 }}  
          animate={{ x: 0 }} 
          transition={{ type: "spring", stiffness: 80,  bounce: 0.1 }}
        >
          <div className='text-feature'>
            <h2>Pizza Margarita</h2>
            <h4>About the recipe:</h4>
            <p>
              This is the best margherita pizza that you’ll be able to make in your own 
              kitchen, with a standard oven, with normal everyday ingredients (no fancy flours required), and without preparing an 
              incredibly time-intensive pizza dough days in advance.
            </p>
            <Link to={`recipe/${8}`}><button>See Full Recipe</button></Link>
          </div>
        </motion.div>
      </div>
    </>
  )
}
