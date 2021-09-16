import React from 'react'
import './home.css'

export const Home = () => {
    return (
        <div className='wrapper'>
            <h1 className='title'>Github Profile</h1>
            <p className='sub-title'>Generate Your Github Profile</p>
            <form className='form' action=''>
                <label className='form__label'><span>Github Username</span></label>
                <input type='text' className='form__username' name='username' required/>
                <button className='form__btn' type='submit'>Generate</button>
            </form>
        </div>
    )
}
