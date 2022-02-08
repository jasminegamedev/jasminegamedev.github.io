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


export const DualRealityPage = ({children}) => {
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
                Dual Reality
            </h2>
            <Game url="/content/games/DualReality/index.html" alt="/content/images/games/dual-reality/DualReality.mp4" width="1080px" height="640px" onAltClick={() => openDialog(0)} download="/content/games/Windows/DualReality.zip"/>
            <Grid container spacing={0}>
                <Grid item xs={12} md={8} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>Dual Reality is a 2D platformer about shifting between two realities. It's a simple game inspired by other games in this genre like Celeste or Super Meat Boy, but it has an added twist where you can swap between realities, where some platforms and hazards can only be interacted with when your in one of the two realities.</p>
                        <p>This game was made in 48 hours as part of the <a className={classes.link} href="https://globalgamejam.org/">Global Game Jam 2022</a>. The theme of the jame was "Duality", which I tried to capture through the gameplay of swapping between two realities. I also added the diversifier for making the aesthetics look like a retro game from before the year 2000.</p>
                        <h3 className={classes.details}>Controls:</h3>
                        <ul className={classes.details}>
                            <li>Move: WASD, ArrowKeys, or left control stick(Gampad)</li>
                            <li>Jump: Space</li>
                            <li>Swap Realities: Z or Mouse Click</li>
                            <li>Pause: Escape</li>
                        </ul>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: Windows, Web Browser</li>
                            <li>My Roles: Game Programmer, Level Designer, Artist, UI Programmer</li>
                            <li>Tools Used: Unity, C#, .Net, Paint.Net</li>
                            <li>Team Size: 1 Person</li>
                            <li>Time Frame: ~ 30 hours</li>
                            <li>Source Code: <a className={classes.link} href="https://github.com/jasminegamedev/dual-reality">Github</a></li>
                            <li>Original Global Game Jam Page: <a className={classes.link} href="https://globalgamejam.org/2022/games/dual-reality-9">globalgamejam.org/2022/games/dual-reality-9</a></li>
                        </ul>
                        <h3 className={classes.details}>Credits:</h3>
                        <ul className={classes.details}>
                            <li>Jasmine Stephens: Game Programmer, Level Designer, Artist, UI Programmer</li>
                        </ul>
                        <h3 className={classes.details}>Music:</h3>
                        <ul className={classes.details}>
                            <li>SubspaceAudio - <a className={classes.link} href="https://opengameart.org/content/5-chiptunes-action">opengameart.org/content/5-chiptunes-action</a></li>
                        </ul>
                        <ul className={classes.details}>
                            <li>Bart - <a className={classes.link} href="https://opengameart.org/content/chiptunes">opengameart.org/content/chiptunes</a></li>
                        </ul>
                        <h3 className={classes.details}>Fonts:</h3>
                        <ul className={classes.details}>
                            <li>Kenney - <a className={classes.link} href="https://www.kenney.nl/assets/kenney-fonts">www.kenney.nl/assets/kenney-fonts</a></li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridItem}>
                    <div className={classes.images}>
                        <img onClick={() => openDialog(1)} src='https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2022/01/451742/title.png?itok=HOeJ3CkK&timestamp=1643515218' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(2)} src='https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/451742/dualreality2.png?itok=tzHx4nuD&timestamp=1643587275' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(3)} src='https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/451742/dualreality3.png?itok=uNPzNZpd&timestamp=1643587275' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(4)} src='https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/451742/dualreality4.png?itok=h1AOubdg&timestamp=1643587275' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(5)} src='https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/451742/dualreality9.png?itok=quTGviOX&timestamp=1643587275' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(6)} src='https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/451742/dualreality10.png?itok=gT-tdn2V&timestamp=1643587275' alt='' className={classes.image}/>
                    </div>
                </Grid>
            </Grid>
            {isDialogOpen &&
                <ImageDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} initialSlideId={defaultImageId}>
                    <div>
                        <video loop autoPlay muted className={classes.mediaFull}>
                            <source src={"/content/images/games/dual-reality/DualReality.mp4"} type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <img src='https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2022/01/451742/title.png?itok=HOeJ3CkK&timestamp=1643515218' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/451742/dualreality2.png?itok=tzHx4nuD&timestamp=1643587275' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/451742/dualreality3.png?itok=uNPzNZpd&timestamp=1643587275' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/451742/dualreality4.png?itok=h1AOubdg&timestamp=1643587275' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/451742/dualreality9.png?itok=quTGviOX&timestamp=1643587275' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/451742/dualreality10.png?itok=gT-tdn2V&timestamp=1643587275' alt='' className={classes.mediaFull}/>
                    </div>
                </ImageDialog>
            }
        </div>
    );
}
