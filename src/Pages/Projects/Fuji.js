import React from 'react';
import { createUseStyles } from 'react-jss';
import { ScreenshotCarousel } from '../../Components/ScreenshotCarousel';
import { Grid } from '@material-ui/core';

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center'
    },
    body: {
        marginBottom: '0px',
        fontSize: '20px',
    },
    link: {
        color: 'cyan'
    },
    details: {
        marginTop: '0px',
        marginBottom: '10px',
    },
    image: {
        width: '100%',
        marginTop: '10px',
        cursor: 'pointer',
    },
    gridItem: {
        padding: '16px !important',
    },
});


export const FujiPage = () => {
    const classes = useStyles();
    return (
        <div>
            <h2 className={classes.title}>
                Fuji: A Celeste 64 Mod Loader
            </h2>
            <ScreenshotCarousel
                images={[
                    '/content/images/projects/fuji/fujititle.png',
                    '/content/images/projects/fuji/fuji1.jpg',
                    '/content/images/projects/fuji/fuji2.png',
                    '/content/images/projects/fuji/fuji3.jpg',
                    '/content/images/projects/fuji/fuji0.png',
                ]}
            />
            <Grid container spacing={0}>
                <div className={classes.body}>
                    <h3 className={classes.details}>Description:</h3>
                    <p>I've had an interest in modding for a long time, and for a while, I've had an idea that it might be a fun side project and a good learning experience to try to make a mod loader for a game I was interested in. I then learned that the team behind one of my favorite games, Celeste, made a small 3D Celeste game, and released it as an open source project. Since I already had some experience with C# and with modding platformers like this, it seemed like a fun opportunity to build my own mod loader for it. It started as a fun weekend side project, but eventually evolved into a bigger project with several contributors, and a small community of modders and players. </p>
                    <p>The Fuji mod loader supports many types of mods including Custom Levels, Custom Skins, Localization Mods, and modders can even inject their own code to create custom actors and mechanics. It also adds a number of other Quality of Life changes including things like supporting multiple save files, and in game controls rebinding.</p>
                    <p>This has been my first time leading an open source project like this, and it's been a good learning experience. I'm really proud of what we've been able to make with it.</p>
                    <h3 className={classes.details}>Details:</h3>
                    <ul className={classes.details}>
                        <li>Platform: Windows, Linux, MacOS</li>
                        <li>My Roles: Lead Engineer</li>
                        <li>Tools Used: C#, .Net, Github</li>
                        <li><a className={classes.link} href="https://github.com/FujiAPI/Fuji">Link to Github Page</a></li>
                        <li><a className={classes.link} href="https://fujiapi.github.io/">Link to Project Website</a></li>
                        <li><a className={classes.link} href="https://gamebanana.com/games/19773">Link to Mods Page</a></li>
                    </ul>
                </div>
            </Grid>
        </div>
    );
}
