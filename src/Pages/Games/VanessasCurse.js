import React from 'react';
import { createUseStyles } from 'react-jss';
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
        minWidth: '80%',
        maxHeight: '540px',
        display: 'block',
        margin: 'auto',
    },
    video: {
        width: "100%",
        minHeight: "640px",
        marginBottom: "20px",
    }
});

export const VanessasCursePage = ({children}) => {
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
                A Hat in Time: Vanessa's Curse
            </h2>
            <iframe className={classes.video} src="https://www.youtube.com/embed/NrIKafwyKmQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <Grid container spacing={0}>
                <Grid item xs={12} md={8} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>A deadly game of tag in Queen Vanessa's Manor! Escape the clutches of your fallen peers. Collect crowns and souls to obtain new unlockable cosmetics.</p>
                        <p>This project is the first ever CreatorDLC for the indie 3D platformer, A Hat in Time, as well as its first official Online Game Mode. I was one of the lead developers for this DLC, and developed a majority of its custom gameplay systems and UI elements. I also built several new level design tools that expanded the networking systems and gave more control to the level designers.</p>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: <a className={classes.link} href="https://store.steampowered.com/app/1738980/A_Hat_in_Time__Vanessas_Curse/">Steam</a></li>
                            <li>Publisher: Gears For Breakfast</li>
                            <li>Tools: Unreal Engine 3, UnrealScript</li>
                        </ul>
                        <h3 className={classes.details}>Core Team Credits:</h3>
                        <ul className={classes.details}>
                            <li>Jasmine Stephens: Gameplay Programmer, UI Programmer, Network Systems Programmer</li>
                            <li>Mathieu 'Werti100' Martel: Project Lead, Level Designer, 3D Artist</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridItem}>
                    <div className={classes.images}>
                        <img onClick={() => openDialog(0)} src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_ff7562ec4ba999877af492e30b3097f5643df6fe.600x338.jpg?t=1637180258' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(1)} src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_87d5d70ccfbaac8bbb8340e4654b647a18da1b5a.600x338.jpg?t=1637180258' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(2)} src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_278811f0c28d98a50d10fc6a529b62172cf0d1f6.600x338.jpg?t=1637180258' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(3)} src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_ba3c052d4c1073a35e3c87402383711a97e05aba.600x338.jpg?t=1637180258' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(4)} src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_87926278cf24709b907b7b5d59e8411f92def1a0.600x338.jpg?t=1637180258' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(5)} src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_5019c948e7f07b151f4e2b4b811fc4f0c5900726.600x338.jpg?t=1637180258' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(6)} src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_93336e58f9e44a14567a6192c4f66f0690265262.600x338.jpg?t=1637180258' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(7)} src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_51a870124b5ee4dc0b246e5608cabdb76531366d.600x338.jpg?t=1637180258' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(8)} src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_8fd8f538a64d8de6788e36b9ed48cc38a755e7c7.600x338.jpg?t=1637180258' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(9)} src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_1050402b6b8ad64da6a82616b17c1a3d8d53fe3e.600x338.jpg?t=1637180258' alt='' className={classes.image}/>
                    </div>
                </Grid>
            </Grid>
            {isDialogOpen &&
                <ImageDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} initialSlideId={defaultImageId}>
                    <div>
                        <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_ff7562ec4ba999877af492e30b3097f5643df6fe.600x338.jpg?t=1637180258' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_87d5d70ccfbaac8bbb8340e4654b647a18da1b5a.600x338.jpg?t=1637180258' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_278811f0c28d98a50d10fc6a529b62172cf0d1f6.600x338.jpg?t=1637180258' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_ba3c052d4c1073a35e3c87402383711a97e05aba.600x338.jpg?t=1637180258' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_87926278cf24709b907b7b5d59e8411f92def1a0.600x338.jpg?t=1637180258' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_5019c948e7f07b151f4e2b4b811fc4f0c5900726.600x338.jpg?t=1637180258' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_93336e58f9e44a14567a6192c4f66f0690265262.600x338.jpg?t=1637180258' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_51a870124b5ee4dc0b246e5608cabdb76531366d.600x338.jpg?t=1637180258' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_8fd8f538a64d8de6788e36b9ed48cc38a755e7c7.600x338.jpg?t=1637180258' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1738980/ss_1050402b6b8ad64da6a82616b17c1a3d8d53fe3e.600x338.jpg?t=1637180258' alt='' className={classes.mediaFull}/>
                    </div>
                </ImageDialog>
            }
        </div>
    );
}
