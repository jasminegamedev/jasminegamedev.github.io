import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center'
    },
    body: {
        marginTop: '0px',
        marginBottom: '10px',
        marginRight: '40px',
        marginLeft: '40px',
        fontSize: '20px',
        width: '100%',
    },
    details: {
        marginTop: '0px',
        marginBottom: '10px',
    },
    columns: {
        display: 'inline-flex',
        marginTop: '40px',
    },
    image: {
        marginTop: '0px',
        marginBottom: '10px',
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: '960px',
    },
    paragraph: {
        marginTop: '0px',
        marginBottom: '10px',
    }
});

export const DealerSocketPage = () => {
    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.title}>
                Solera DealerSocket
            </h2>
            <div className={classes.columns}>
                <div className={classes.body}>
                    <h3 className={classes.details}>Description:</h3>
                    <p className={classes.paragraph}>For a little over 4 years, I worked as a Full Stack Software Engineer at a company called DealerSocket, which was later acquired by a company called Solera. Most of my time was dedicated to working on developing various UI Components and web pages for their automotive CRM application. I also spent a fair amount of my time fixing legacy bugs, and maintaining legacy code. One of the bigger innitiatives I was a part of was rewriting many of their legacy Flash applications in newer technologies like React. I also helped train several of my coworkes in React, and served as both a tech lead and scrum master for various periods.</p>
                    <h3 className={classes.details}>Details:</h3>
                    <ul className={classes.details}>
                        <li>My Roles: Tech Lead, Software Engineer 2, Scrum Master</li>
                        <li>Tools Used: React.JS, TypeScript/JavaScript, Angular.js, C#/.Net, ASP.Net, MS SQL Server</li>
                        <li>Time Frame: 4 years, September 2017-October 2018</li>
                        <li>Product Website: <a className={classes.link} href="https://dealersocket.com/products/crm/">dealersocket.com/products/crm/</a></li>
                    </ul>

                    <br/>
                    <p className={classes.paragraph}>Most of the things I worked on required enterprise accounts, so I've documented some of the bigger projects I worked on below using mock data. Here are some of the more notable projects I worked on:</p>

                    <h4 className={classes.paragraph}>Daily Checkout:</h4>
                    <p className={classes.paragraph}>This was one of the earlier applications I built in React, and it's notable because I ended up building this one mostly on my own, with only a little additional help from my team who were focused on other projects at the time. Basically this is a tool built for managers to track the performance of their employees over time, and click the icons to give them a basic score for how that employee did every day. Then at the end of the month they can generate a report that covers the entire month. </p>
                    <img src='/content/images/projects/dealersocket/dealersocket1.png' alt='' className={classes.image}/>

                    <h4 className={classes.paragraph}>Desk Log:</h4>
                    <p className={classes.paragraph}>This is another tool built for managers that I was a primary contributor to. Basically, this tool lets Sales Managers see all of the customers that have visited their car dealership or are scheduled to visit the dealership for a given day. From here, the managers have a lot of control, and can create appointments, update the vehicle information, Change the assigned sales person, or perform many more actions related to each sales event. I was responsible for most of the components for this page, and helped build a few of the APIs for fetching and saving data. This one was challenging, because it had to pull a lot of data from many different places, so we had some big performance problems at first, but I managed to make a lot of optimizations that made it load and render much faster.</p>
                    <img src='/content/images/projects/dealersocket/dealersocket2.png' alt='' className={classes.image}/>
                    
                    <h4 className={classes.paragraph}>Desking:</h4>
                    <p className={classes.paragraph}>This was a much larger project that had many different teams working on it at the same time. This application lets Sales People fill out all the details on this form, and generate a deal for the car they are trying to sell with various leasing and financing options. There's a lot of math going on under the hood for calculating all the information on this page. I was primarily responsible for building the frontend for the components I highlighted in the screenshot below. </p>
                    <img src='/content/images/projects/dealersocket/dealersocket3.png' alt='' className={classes.image}/>

                    <h4 className={classes.paragraph}>Unconverted Ups:</h4>
                    <p className={classes.paragraph}>This was a simple react project where I was the primary frontend engineer. This feature was basically to build a dialog to track customers who have come into a dealership, but that haven't given out their information yet. From here, users are able to view all of the existing untracked customers, add new ones, and when they are ready, they can convert them to a full customer, and create a sales event for them. I was responsible for building most of the UI components for this tool, and built most of the APIs as well.</p>
                    <img src='/content/images/projects/dealersocket/dealersocket4.png' alt='' className={classes.image}/>
                    <img src='/content/images/projects/dealersocket/dealersocket5.png' alt='' className={classes.image}/>

                    <h4 className={classes.paragraph}>Credit & Financing</h4>
                    <p className={classes.paragraph}>This was one of the first features I worked on in React. It's notable, because there really wasn't anyone at the company who had experience with React, so we ended up having to step up and do a lot of architecture and code design on how it should be used within our application. I ended up being one of the React experts for a little while and helped train many of my other coworkers using the knowledge I got from working on this project. This was basically a tool that we built that integrated with a third party vendor for pulling credit data. Basically, customers would fill out a form that would be sent to our vendor, and we would receive back information about that customer's credit score and other credit information. It could also run a basic background check on the customer depending on the Dealership's settings.</p>
                    <img src='/content/images/projects/dealersocket/dealersocket6.png' alt='' className={classes.image}/>
                    <img src='/content/images/projects/dealersocket/dealersocket8.png' alt='' className={classes.image}/>
                    <img src='/content/images/projects/dealersocket/dealersocket7.png' alt='' className={classes.image}/>
                </div>
            </div>
        </div>
    );
}
