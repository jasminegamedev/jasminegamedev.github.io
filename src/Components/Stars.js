import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    '@keyframes slideDown': {
        from: {transform: 'translateY(0)'},
        to: {transform: 'translateY(100%)'}
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: -100,
        animation: '$slideDown 50s infinite',
        animationTimingFunction: 'linear'
    },
    image2: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: -100,
        animation: '$slideDown2 50s infinite',
        animationTimingFunction: 'linear'
    },
    image3: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: -100,
        animation: '$slideDown 100s infinite',
        animationTimingFunction: 'linear'
    },
    image4: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: -100,
        animation: '$slideDown2 100s infinite',
        animationTimingFunction: 'linear'
    },
    background: {
        background: 'radial-gradient(ellipse at center, #262c68, #000000)',
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: -105,
    },
    '@keyframes slideDown2': {
        from: {transform: 'translateY(-100%)'},
        to: {transform: 'translateY(0)'}
    },
});

export const Stars = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.background}></div>
            <img className={classes.image2} src="/content/images/games/tapshot/Stars1.png" alt="/content/images/games/tapshot/Stars1.png" />
            <img className={classes.image} src="/content/images/games/tapshot/Stars1.png" alt="/content/images/games/tapshot/Stars1.png" />
            {/* <img className={classes.image3} src="/content/images/games/tapshot/Stars2.png" alt="/content/images/games/tapshot/Stars2.png" />
            <img className={classes.image4} src="/content/images/games/tapshot/Stars2.png" alt="/content/images/games/tapshot/Stars2.png" /> */}
        </>
    );
}
