import React from 'react'
import { useHistory } from 'react-router-dom'


const Home = () => {
    const history = useHistory () 
    
    const handleOnClick = () => {
        history.push('/todo')
    }

  return (

        <div className='home-main'>
            <h1>you are in home</h1>
            <button onClick={handleOnClick}>Start now!</button>
        </div>
    )
}
export default Home