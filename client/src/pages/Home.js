import React from 'react';
import classes from './Home.module.css'

const Home = () => {
    return (
        <div>
            <div className= {classes.skinQuiz, classes.wallpaper}>
                <h1>Skincare Quiz</h1>
                <p>Discover your skin's potential</p>
                <button>Take Quiz</button>
            </div>
        </div>
    )
}

export default Home
