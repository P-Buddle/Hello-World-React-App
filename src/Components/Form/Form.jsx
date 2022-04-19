import React from 'react'
import './form.css'
import { useState } from 'react'

const Form = () => {

    const [show, setShow]=useState(false)
    const [fullName, setfullName]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true)
        
    }
    
    return (
    <section>
        <div className='container form__container'>

            <form onSubmit={handleSubmit}>
                <label>Enter your name:</label>
                <input 
                    type="text"
                    autoComplete='off'
                    autoFocus
                    required
                    value={fullName}
                    maxLength="15"
                    onChange={(e) => setfullName(e.target.value)} 
                />
                <button className='btn'>Click Me</button>
            </form>
            
        </div>
        <div className='container reply__container'>
            {
                show? <h1>Hello {fullName}</h1>:null
            }
        </div>
    </section>
  )
}

export default Form

