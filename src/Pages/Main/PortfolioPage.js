import React from 'react';
import { createUseStyles } from 'react-jss'
import { Portfolio } from '../../Components/Portfolio';
import professional from '../../Data/professional.json';
import personal from '../../Data/personal.json';
import projects from '../../Data/projects.json';

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center',
        borderBottom: 'white 4px solid',
        fontSize: '40px',
    },
    subtitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: '30px',
    },
    body: {
        margin: '40px',
        fontSize: '24px',
        lineSize: '0px',
    },
});

export const PortfolioPage = ({children, url}) => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <h2 className={classes.title}>
                Portfolio
            </h2>
            <h3 className={classes.subtitle}>
                Professional Work
            </h3>
            <Portfolio projects={professional}/>
            <h3 className={classes.subtitle}>
                Game Jams & Personal Projects
            </h3>
            <Portfolio projects={personal}/>
            <h3 className={classes.subtitle}>
                Other Projects
            </h3>
            <Portfolio projects={projects}/>
        </div>
    );
}
