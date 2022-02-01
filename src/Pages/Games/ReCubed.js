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


export const ReCubedPage = ({children}) => {
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
                Re: Cubed
            </h2>
            <Game url="/content/games/ReCubed/index.html" alt="/content/images/games/re-cubed/ReCubedVideo.mp4" onAltClick={() => openDialog(0)} download='/content/games/Windows/ReCubed.zip'/>

            <Grid container spacing={0}>
                <Grid item xs={12} md={8} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>Re: Cubed is a game where you must solve puzzles by controlling a cute little cube character. This cube possesses the soul of a hero, and every time the cube dies, they will be reincarnated into a new body. Use this to your advantage by dying in opportune places to help you in your next life.</p>
                        <p>Unfortunately, their new body has a very short life span, so be quick, and get to the nearest checkpoint before the time runs out! You also can only jump after collecting jump boots, but you can jump once for every pair of boots you collect.</p>
                        <p>This game was made in 48 hours as part of the <a className={classes.link} href="https://itch.io/jam/utah-indie-game-jam-2021">Utah Indie Game jam 2021</a>, although due to personal reasons, it was more like 30 hours for me. The theme of the jame was "Reincarnation", which I tried to realize through the gameplay of having to die and be reincarnated to make progress. This game won first place in the Best Gameplay category, the Judges Choice Award category, and the Audience Choice Award category. </p>
                        <h3 className={classes.details}>Controls:</h3>
                        <ul className={classes.details}>
                            <li>Move: WASD, ArrowKeys, or left control stick(Gampad)</li>
                            <li>Jump: Space, Left Click, or X button(PS4)</li>
                            <li>Die: Left Shift, Right Click, or Square(PS4)</li>
                        </ul>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: Windows, Web Browser</li>
                            <li>My Roles: Gameplay Programmer, Designer, Artist, UI Programmer, Level Designer</li>
                            <li>Tools Used: Unity, C#, Blender</li>
                            <li>Team Size: 1 Person</li>
                            <li>Time Frame: ~ 30 hours</li>
                            <li>Original Project Page: <a className={classes.link} href="https://jasminegamedev.itch.io/re-cubed">itch.io</a></li>
                        </ul>
                        <h3 className={classes.details}>Credits:</h3>
                        <ul className={classes.details}>
                            <li>Jasmine Stephens: Gameplay Programmer, Designer, Artist, UI Programmer, Level Designer</li>
                        </ul>
                        <h3 className={classes.details}>Additional Resources:</h3>
                        <ul className={classes.details}>
                            <li>The Cynic Project / <a className={classes.link} href="https://cynicmusic.com/">cynicmusic.com</a> / <a className={classes.link} href="https://pixelsphere.org/">pixelsphere.org</a></li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridItem}>
                    <div className={classes.images}>
                        <img onClick={() => openDialog(1)} src='/content/images/games/re-cubed/Title.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(2)} src='/content/images/games/re-cubed/Screenshot1.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(3)} src='/content/images/games/re-cubed/Screenshot2.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(4)} src='/content/images/games/re-cubed/Screenshot4.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(5)} src='/content/images/games/re-cubed/Screenshot5.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(6)} src='/content/images/games/re-cubed/Screenshot6.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(7)} src='/content/images/games/re-cubed/Victory.png' alt='' className={classes.image}/>
                    </div>
                </Grid>
            </Grid>
            {isDialogOpen &&
                <ImageDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} initialSlideId={defaultImageId}>
                    <div>
                        <video loop autoPlay muted className={classes.mediaFull}>
                            <source src={"/content/images/games/re-cubed/ReCubedVideo.mp4"} type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <img src='/content/images/games/re-cubed/Title.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/re-cubed/Screenshot1.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/re-cubed/Screenshot2.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/re-cubed/Screenshot4.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/re-cubed/Screenshot5.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/re-cubed/Screenshot6.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/re-cubed/Victory.png' alt='' className={classes.mediaFull}/>
                    </div>
                </ImageDialog>
            }
        </div>
    );
}
