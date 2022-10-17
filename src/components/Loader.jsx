import React from 'react'

const Loader = () => {
    return (
        <center>
            <div className='spinner-border text-primary' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </center>
    )
}

export default Loader