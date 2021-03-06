import React from 'react';
import { createUseStyles } from 'react-jss'
import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';

const useStyles = createUseStyles({
    footer: {
        fontSize: '24px',
        margin: 'auto',
        display: 'table',
        width: '98%',
        marginTop: '10px',
        marginBottom: '10px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        padding: '5px',
        '&:hover': {
            color: 'cyan',
        },
    },
    sourceLink: {
        color: '#CCC',
        padding: '5px',
        '&:hover': {
            color: 'cyan',
        },
    },
    rightAlign: {
        float: "right",
        fontSize: '14px',
        color: '#BBB',
    },
});

export const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            {/* <a className={classes.link} href="https://www.linkedin.com/in/j-stephens/" rel="noopener noreferrer" target="_blank">
                <LinkedInIcon />
            </a> */}
            <a className={classes.link} href="https://twitter.com/Lady_Jazzrabbit" rel="noopener noreferrer" target="_blank">
                <TwitterIcon />
            </a>
            <a className={classes.link} href="mailto:jasminegamedev@gmail.com">
                <EmailIcon />
            </a>
            <a className={classes.link} href="https://github.com/jasminegamedev" rel="noopener noreferrer" target="_blank">
                <GithubIcon />
            </a>
            <span className={classes.rightAlign}>
                {'Website designed and created by Jasmine Stephens -'} 
                <a className={classes.sourceLink} href="https://github.com/jasminegamedev/jasminegamedev.github.io" rel="noopener noreferrer" target="_blank">
                    {'View Source'}
                </a>
            </span>
        </div>
    );
}
