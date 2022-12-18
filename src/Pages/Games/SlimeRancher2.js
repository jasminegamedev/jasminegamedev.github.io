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

export const SlimeRancher2Page = ({children}) => {
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
                Slime Rancher 2
            </h2>
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/LOI5tz7eZ5A" title="Slime Rancher 2 Early Access Launch Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Grid container spacing={0}>
                <Grid item xs={12} md={8} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>I am currently working as a Junior Gameplay Engineer at Monomi Park, working on Slime Rancher 2, which is available now in early access.</p>
                        <p>Slime Rancher 2 is a sequel to the award-winning, smash-hit original that has been enjoyed by over 15 million fans worldwide. Continue the adventures of Beatrix LeBeau as she journeys to Rainbow Island, a mysterious land brimming with ancient technology, unknown natural resources, and an avalanche of wiggling, jiggling, new slimes to discover.</p>
                        <p>As Beatrix attempts to unravel the island’s secrets and uncover its true purpose, she’ll build, ranch, and farm within a beautiful conservatory, whose sparkling glass walls give her full view of the prismatic paradise she now calls home.</p>
                        <h3 className={classes.details}>Features:</h3>
                        <ul className={classes.details}>
                            <li>Explore a Vibrant New World: Continue the slime ranching adventures of Beatrix LeBeau as she journeys to a mysterious rainbow-hued island.</li>
                            <li>Discover Wiggly New Slimes: Collect slimes never seen before on the Far, Far Range, like the bouncy cotton slime or the aquatic angler slime.</li>
                            <li>Build a Conservatory on Rainbow Island: Earn newbucks from slime plorts and collect resources on Rainbow Island to upgrade your vacpack, build new gadgets, and expand your conservatory.</li>
                        </ul>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: <a className={classes.link} href="https://store.steampowered.com/app/1657630/Slime_Rancher_2/">Steam</a>, <a className={classes.link} href="https://www.xbox.com/en-US/games/slime-rancher-2">XBox</a>, <a className={classes.link} href="https://store.epicgames.com/en-US/p/slime-rancher-2">Epic</a></li>
                            <li>Developer: Monomi Park</li>
                            <li>Publisher: Monomi Park</li>
                            <li>Tools: Unity, C#</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridItem}>
                    <div className={classes.images}>
                        <img onClick={() => openDialog(0)} src='https://cdn.akamai.steamstatic.com/steam/apps/1657630/ss_574ea9c6460c58e665bff993e8394362c1fb10e7.1920x1080.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(1)} src='https://cdn.akamai.steamstatic.com/steam/apps/1657630/ss_5742b171daecef4062d51afe12abde32e886780b.1920x1080.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(2)} src='https://cdn.akamai.steamstatic.com/steam/apps/1657630/ss_495cead0fc7f9fe07026bb7d018a005c810bd2c9.1920x1080.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(3)} src='https://cdn.akamai.steamstatic.com/steam/apps/1657630/ss_6ac16a708699a9d3d90359da2450cbc6b20e4e4c.1920x1080.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(4)} src='https://cdn.akamai.steamstatic.com/steam/apps/1657630/ss_ed67ab6ee30d3dc40135d4474dae7baa0f3a9bb1.1920x1080.jpg' alt='' className={classes.image}/>
                    </div>
                </Grid>
            </Grid>
            {isDialogOpen &&
                <ImageDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} initialSlideId={defaultImageId}>
                    <div>
                        <img src='https://cdn.akamai.steamstatic.com/steam/apps/1657630/ss_574ea9c6460c58e665bff993e8394362c1fb10e7.1920x1080.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://cdn.akamai.steamstatic.com/steam/apps/1657630/ss_5742b171daecef4062d51afe12abde32e886780b.1920x1080.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://cdn.akamai.steamstatic.com/steam/apps/1657630/ss_495cead0fc7f9fe07026bb7d018a005c810bd2c9.1920x1080.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://cdn.akamai.steamstatic.com/steam/apps/1657630/ss_6ac16a708699a9d3d90359da2450cbc6b20e4e4c.1920x1080.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='https://cdn.akamai.steamstatic.com/steam/apps/1657630/ss_ed67ab6ee30d3dc40135d4474dae7baa0f3a9bb1.1920x1080.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                </ImageDialog>
            }
        </div>
    );
}
