import React from 'react';
import { createUseStyles } from 'react-jss';
import { ScreenshotCarousel } from '../../Components/ScreenshotCarousel';

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center'
    },
    body: {
        marginBottom: '40px',
        marginRight: '40px',
        marginLeft: '40px',
        fontSize: '20px',
        width: '100%',
    },
    details: {
        marginTop: '0px',
        marginBottom: '10px',
    },
    columns: {
        display: 'inline-flex',
        marginTop: '40px',
    },
});

export const JasmineGamesPage = () => {
    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.title}>
                Jasmine.Games - Portfolio Website
            </h2>
            <ScreenshotCarousel
                images={[
                    '/content/images/projects/jasminegames/jasminegames1.png',
                    '/content/images/projects/jasminegames/jasminegames2.png',
                    '/content/images/projects/jasminegames/jasminegames3.png',
                    '/content/images/projects/jasminegames/jasminegames4.png',
                ]}
            />
            <div className={classes.columns}>
                <div className={classes.body}>
                    <h3 className={classes.details}>Description:</h3>
                    <p>I designed and built my own portfolio website that you are currently looking at. I used to use a static wordpress website, but I thought it would be fun to build my own website from scratch, and would be a good opportunity to show off some of my web development skills. This also allowed me to add a lot of custom functionality, such as having web versions of most of my games hosted directly on my website.</p>
                    <h3 className={classes.details}>Details:</h3>
                    <ul className={classes.details}>
                        <li>Platform: Web</li>
                        <li>Tools Used: React.js, JavaScript, Material UI Framework, Github Pages</li>
                        <li>Source Code: <a className={classes.link} href="https://github.com/jasminegamedev/jasminegamedev.github.io">Github</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
