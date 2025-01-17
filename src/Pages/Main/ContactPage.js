import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center',
    },
    body: {
        margin: '40px',
        fontSize: '24px',
        lineSize: '0px',
        textAlign: 'center'
    },
    text: {
        margin: '20px',
    },
    link: {
        color: 'cyan'
    },
    linkHeader: {
        marginBottom: '0px'
    }
});

export const ContactPage = ({children, url}) => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <h2 className={classes.title}>
                Contact Details
            </h2>
            <h4 className={classes.text}>If you would like to get in touch with me, feel free to reach out through any of the following contact methods:</h4>
                <h3 className={classes.linkHeader}>Email</h3>
                <a className={classes.link} href="mailto:jasminegamedev@gmail.com">jasminegamedev@gmail.com</a>
                <h3 className={classes.linkHeader}>LinkedIn</h3>
                <a className={classes.link} href="https://www.linkedin.com/in/j-stephens/" rel="noopener noreferrer" target="_blank">linkedin.com/in/j-stephens</a>
                <h3 className={classes.linkHeader}>Twitter</h3>
                <a className={classes.link} href="https://twitter.com/Lady_Jazzrabbit" rel="noopener noreferrer" target="_blank">twitter.com/Lady_Jazzrabbit</a>
                <h3 className={classes.linkHeader}>Bluesky</h3>
                <a className={classes.link} href="https://bsky.app/profile/jazzrabbit.bsky.social" rel="noopener noreferrer" target="_blank">bsky.app/profile/jazzrabbit.bsky.social</a>
                {/* <h3 className={classes.linkHeader}>Cohost</h3>
                <a className={classes.link} href="https://cohost.org/jazzrabbit" rel="noopener noreferrer" target="_blank">cohost.org/jazzrabbit</a> */}
                {/* <h3 className={classes.linkHeader}>Tumblr</h3>
                <a className={classes.link} href="https://www.tumblr.com/blog/lady-jazzrabbit" rel="noopener noreferrer" target="_blank">tumblr.com/blog/lady-jazzrabbit</a> */}
                <h3 className={classes.linkHeader}>Github</h3>
                <a className={classes.link} href="https://github.com/jasminegamedev" rel="noopener noreferrer" target="_blank">github.com/jasminegamedev</a>

        </div>
    );
}
