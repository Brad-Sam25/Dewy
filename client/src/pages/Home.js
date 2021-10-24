import React from 'react';
import classes from './Home.module.css'

const Home = () => {
    return (
        <div className= { classes.wallpaper }>
            <div className= {classes.skinContainer}>
                <div className= {classes.skinGroup}>
                    <h1>Skincare Quiz</h1>
                    <p>Discover your skin's potential</p>
                    <button>Take Quiz</button>
                </div>
            </div>
        </div>
    )
}

export default Home
