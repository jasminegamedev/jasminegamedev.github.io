import React from 'react';
import { createUseStyles } from 'react-jss';
import { Game } from '../../Components/Game';
import { ImageDialog } from '../../Components/ImageDialog';
import { Grid } from '@material-ui/core';

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center'
    },
    body: {
        marginBottom: '40px',
        marginRight: '20px',
        marginLeft: '20px',
        fontSize: '20px',
    },
    link: {
        color: 'cyan'
    },
    details: {
        marginTop: '0px',
        marginBottom: '10px',
    },
    images: {
        marginRight: '20px',
        marginLeft: '20px',
    },
    image: {
        width: '100%',
        marginTop: '10px',
        cursor: 'pointer',
    },
    mediaFull: {
        maxWidth: '90%',
        maxHeight: '540px',
        display: 'block',
        margin: 'auto',
    },
});


export const PathfinderPage = ({children}) => {
    const [isDialogOpen, setDialogOpen] = React.useState(false);
    const [defaultImageId, setDefaultImageId] = React.useState(0);
    const classes = useStyles();

    function openDialog(id)
    {
        setDefaultImageId(id);
        setDialogOpen(true);
    }

    return (
        <div>
            <h2 className={classes.title}>
                Tilemap Pathfinder Demo
            </h2>
            <Game url="/content/games/Pathfinder/index.html" alt="/content/images/projects/pathfinder/pathfinder.mp4" width="1280px" height="720px" onAltClick={() => openDialog(0)} download='/content/games/Windows/Pathfinder.zip'/>

            <Grid container spacing={0}>
                <Grid item xs={12} md={8} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>This is a simple application I made to demonstrate how to perform pathfinding while using Unity's Tilemap system. It allows you to find the shortest path between any two points on a grid, and lets you draw your own walls that the path must avoid. It also allows you to specify a movement cost, so you can only move that many steps from the starting point. It uses a modified version of Dijkstra’s algorythm that is optimized to account for the movement cost limitation. It was originally built as part of a programming test, but I adapted it into it's own little demo project.</p>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: Windows, Web Browser</li>
                            <li>My Roles: Sole Developer</li>
                            <li>Tools Used: Unity, C#, .Net, Paint.Net</li>
                            <li>Team Size: 1 Person</li>
                            <li>Source Code: <a className={classes.link} href="https://github.com/jasminegamedev/pathfinder-demo">Github</a></li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridItem}>
                    <div className={classes.images}>
                        <img onClick={() => openDialog(1)} src='/content/images/projects/pathfinder/pathfinder1.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(2)} src='/content/images/projects/pathfinder/pathfinder2.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(2)} src='/content/images/projects/pathfinder/pathfinder3.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(3)} src='/content/images/projects/pathfinder/pathfinder4.png' alt='' className={classes.image}/>
                    </div>
                </Grid>
            </Grid>
            {isDialogOpen &&
                <ImageDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} initialSlideId={defaultImageId}>
                    <div>
                        <video loop autoPlay muted className={classes.mediaFull}>
                            <source src={"/content/images/projects/pathfinder/pathfinder.mp4"} type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <img src='/content/images/projects/pathfinder/pathfinder1.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/projects/pathfinder/pathfinder2.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/projects/pathfinder/pathfinder3.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/projects/pathfinder/pathfinder4.png' alt='' className={classes.mediaFull}/>
                    </div>
                </ImageDialog>
            }
        </div>
    );
}
