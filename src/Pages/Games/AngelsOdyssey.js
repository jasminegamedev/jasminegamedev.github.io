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

export const AngelsOdysseyPage = ({children}) => {
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
                Angel's Odyssey: The Seven Deadly Sins
            </h2>
            <Game url="/content/games/AngelsOdyssey/index.html" alt="/content/images/games/angels-odyssey/AngelsOdyssey.mp4" width="960px" height="540px" onAltClick={() => openDialog(0)} download="/content/games/Windows/AngelsOdyssey.zip"/>
            <Grid container spacing={0}>
                <Grid item xs={12} md={8} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>Angel's Odyssey is a Bullet Hell adventure with some unique twists. </p>
                        <p>Join the heavenly angel Humility (Mili for short) on her quest to save heaven from the invading demons. Travel to Hell to uncover the cause of the demonic invasion, and face off against the might of the Seven Deadly Sins. Face over 20 levels of interesting opponents, with unique bullet patterns!</p>
                        <p>You have a limited number of bullets, so you'll have to absorb the bullets that enemies shoot at you and fire them back. But you can only absorb bullets that match your color, so be careful.</p>
                        <p>This game was originally made in 10 days for the <a  className={classes.link} href="https://itch.io/jam/bullet-hell-jam-2023">2023 Bullet Hell Jam</a>, although I mostly only worked on it during 2 weekends, and I also spent a day or two after doing some minor bug fixing, UX improvements, and enemy balancing. My goal for this jam was to try to make a longer game with more content than I normally would in a game jam. I think I suceeded in having a lot of content, but I did end up sacrificing some of the polish to accomplish that. I also got a lot more experience doing more complicated pixel art than I'm used to, so that was a big change for me.</p>
                        <h3 className={classes.details}>Controls (Gamepad Recommended):</h3>
                        <h3 className={classes.details}>Keyboard:</h3>
                        <ul className={classes.details}>
                            <li>Move: WASD</li>
                            <li>Aim: Mouse</li>
                            <li>Shoot: Right Click</li>
                            <li>Dash: Shift</li>
                            <li>Change Color (After you unlock them): Mouse Wheel, or Q & E keys</li>
                            <li>Pause: Escape</li>
                        </ul>
                        <h3 className={classes.details}>Gamepad:</h3>
                        <ul className={classes.details}>
                            <li>Move: Left Stick</li>
                            <li>Aim: Right Stick</li>
                            <li>Shoot: Right Trigger</li>
                            <li>Dash: Left Trigger</li>
                            <li>Change Color (After you unlock them): Left and Right Shoulder Buttons</li>
                            <li>Pause: Start</li>
                        </ul>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: Windows, Web Browser</li>
                            <li>My Roles: Game Programmer, Enemy Designer, Artist, UI Programmer</li>
                            <li>Tools Used: Unity, C#, Aseprite</li>
                            <li>Team Size: 1 Person</li>
                            <li>Time Frame: ~ 40 hours</li>
                            <li>Original Global Game Jam Page: <a className={classes.link} href="https://jazzrabbit.itch.io/angels-odyssey">jazzrabbit.itch.io/angels-odyssey</a></li>
                        </ul>
                        <h3 className={classes.details}>Music:</h3>
                        <ul className={classes.details}>
                            <li>Music by Marllon Silva / xDeviruchi - <a className={classes.link} href="https://xdeviruchi.itch.io/8-bit-fantasy-adventure-music-pack">xdeviruchi.itch.io/8-bit-fantasy-adventure-music-pack</a></li>
                        </ul>
                        <h3 className={classes.details}>Fonts:</h3>
                        <ul className={classes.details}>
                            <li>Kenney - <a className={classes.link} href="https://www.kenney.nl/assets/kenney-fonts">www.kenney.nl/assets/kenney-fonts</a></li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridItem}>
                    <div className={classes.images}>
                        <img onClick={() => openDialog(1)} src='/content/images/games/angels-odyssey/TitleV2.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(1)} src='/content/images/games/angels-odyssey/Screen1.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(2)} src='/content/images/games/angels-odyssey/Screen3.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(3)} src='/content/images/games/angels-odyssey/Screen4.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(4)} src='/content/images/games/angels-odyssey/Screen5.png' alt='' className={classes.image}/>
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
