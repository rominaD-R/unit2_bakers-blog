import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import './css/ContactPopup.css'

export default function ContactPopup( props ) {
  return (props.trigger) ? (                        // If the trigger from clicking the ContactButton is true, then everything after ":" will be rendered
    <div className='popup-background'>
        <div className='popup-contact'>
            <div className='top-row'>
                <h2>Contact Me!</h2>
                {/* Close button */}
                <button onClick={() => props.setTrigger(false)}><FontAwesomeIcon icon={faX} /></button>             
            </div>
            <form action="">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your name..." />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your email..." />

                <label for="subject">Message:</label>
                <textarea id="subject" name="subject" placeholder="Write something..."></textarea>

                <input type="submit" value="Submit" onClick={() => props.setTrigger(false)} />
            </form>
            <div>
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
        </div>
    </div>
  ) : "";
}
