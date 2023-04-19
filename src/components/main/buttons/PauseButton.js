import React from 'react'

function PauseButton(props) {
    return (
        <button {...props} className='hover:scale-125'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokelinecap="round" strokelinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>

        </button>
    )
}

export default PauseButton
