import React from 'react';
import { motion } from "motion/react"
import ContactButton from '../components/ContactButton';

export default function About() {
  return (
    <div className='text-cont about'>
        <div>
            <h2>About Baker's Blog</h2>
            <motion.img src="/fevicon-bake.png" alt="Bread with butter" whileHover={{ rotate: -6 }} />
            <p>
                Baker's Blog is a website where verified bakers can post their recipes to share with each other, with a focus in using easy-to-use tags.
                This tagging system is to help users find certain recipes, whether that is for specific ingredients, or for any allergy friendly recipes.
            </p>
        </div>
        <h2>About the Creator</h2>
        <motion.img src="/rome-pic.jpg" alt="Headshot picture of the developer Rome Diaz-Rivero" whileHover={{ rotate: 4 }} />
        <p>
            Hi, I'm Rome, the developer/designer of Baker's Blog. This has always been an idea of mine since I like website design and love baking. 
            I really wanted to make a baking blog where users from anywhere can submit a recipe and share them with other, albiet in a readable 
            and user-friendly sense. 
        </p>
        <h3>Have anymore questions?</h3>
        <ContactButton />
        <table>
            <tr>
                <th>Email</th>
                <td>romina.diazrivero@gmail.com</td>
            </tr>
            <tr>
                <th>Mobile Phone</th>
                <td>+1 (314) 494-7248</td>
            </tr>
            <tr>
                <th>LinkedIn</th>
                <td>linkedin.com/in/r-diaz-rivero</td>
            </tr>
        </table>
    </div>
  )
}
