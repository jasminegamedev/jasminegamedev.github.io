import React from 'react';
import { createUseStyles } from 'react-jss'
import { GameCarousel } from '../../Components/GameCarousel';

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center',
        marginBottom: '20px',
        marginTop: '0px',
    },
    body: {
        margin: '20px',
        fontSize: '24px',
        lineSize: '0px',
    },
    text: {
        margin: '20px',
        fontSize: '24px',
        textAlign: 'left',
        minHeight: '260px'
    },
    link: {
        color: 'cyan',
        fontWeight: 'bold',
    },
    image: {
        width: '250px',
        height: '250px',
        marginRight: '20px', 
        border: 'white 5px solid',
    }
});

export const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <span>
                <p className={classes.text}>
                    <img className={classes.image} src={"/logo512.png"} alt={""} align="left"/>
                    <b>Hello there!</b>
                    <br/>My name's Jasmine! I'm a 24 year old Software and Game Developer who specializes in Gameplay and UI Programming. I have over 4 years of software development experience, and I am currently looking for new opportunities in the games industry!
                    <br/>I love video games and game development, and have been involved in game development and game modding as a hobbyist for almost a decade!
                    <br/>If you'd like to see some of my previous work, I'd encourage you to check out my <a className={classes.link} href="#/portfolio">Portfolio</a>.
                </p>
            </span>
           <GameCarousel/>
        </div>
    );
}
