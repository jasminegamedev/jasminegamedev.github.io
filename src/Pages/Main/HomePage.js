import React from 'react';
import { createUseStyles } from 'react-jss';
import { ContactPage, PortfolioPage } from './';

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
        fontSize: '22px',
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
        borderRadius: '5px',
        background: 'radial-gradient(ellipse at center, #1e579933 0%,#256ec633 0%,#06307a33 100%)',
    }
});

export const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <span id="Home">
                <p className={classes.text}>
                    <img className={classes.image} src={"/logo512.png"} alt={""} align="left"/>
                    <b>Hello World!</b>
                    <br/>My name's Jasmine (she/her), also known online as Jazzrabbit.
                    <br/>I'm a trans Software/Web/Game Developer who specializes in Gameplay Programming, Tools Programming, and UI Programming, as well as Front End Web Development. I'm currently working as a Game Engineer at <a className={classes.link} href="http://www.monomipark.com/">Monomi Park</a> on Slime Rancher 2!
                    <br/>I love video games and have been involved in game development and game modding as a hobbyist for almost a decade. My main tools of choice are C# and Unity for game development, and React/TypeScript for web development, but I'm always open to learning new tools and technologies!
                </p>
            </span>
            <span id="Portfolio">
                <PortfolioPage />
            </span>
            <span id="Contact">
                <ContactPage />
            </span>
        </div>
    );
}
