import React, { useState } from 'react'
import ContactPopup from './ContactPopup'

export default function ContactButton() {

    const [popupState, setPopupState] = useState(false);

    return (
        <div>
            <button onClick={() => setPopupState(true)}>Contact Me!</button>
            <ContactPopup trigger={popupState} setTrigger={setPopupState} />
        </div>
    )
}
