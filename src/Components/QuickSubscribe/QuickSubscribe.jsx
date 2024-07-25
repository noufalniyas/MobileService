import React from 'react'
import './QuickSubscribe.css'
const QuickSubscribe = () => {
  return (
    <div className='quickSub'>
        <div className="form2">
            <div className="name">
                <label htmlFor="name">Name</label>
                <input type='text' placeholder='Your Name'/>
            </div>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input type='email' placeholder='Your Email'/>
            </div>
          
        </div>
    </div>
  )
}

export default QuickSubscribe
