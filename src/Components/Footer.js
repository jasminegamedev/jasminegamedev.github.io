import React from 'react';
import { createUseStyles } from 'react-jss'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
            <a className={classes.link} href="https://www.linkedin.com/in/j-stephens/" rel="noopener noreferrer" target="_blank">
                <LinkedInIcon />
            </a>
            <a className={classes.link} href="mailto:jasminegamedev@gmail.com">
                <EmailIcon />
            </a>
            {/* <a className={classes.link} href="https://cohost.org/jazzrabbit" rel="noopener noreferrer" target="_blank">
                <svg width="24" height="24" role="img" aria-label="cohost" viewBox="0 10 180 110" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M142.814 106.403C131.705 113.206 118.897 118.552 104.39 122.439C88.2779 126.756 73.0919 128.487 58.8317 127.631C44.5716 126.775 32.4222 123.055 22.3834 116.471C12.3446 109.887 5.57634 100.068 2.07868 87.0142C-1.43905 73.886 -0.492012 61.9799 4.9198 51.2958C10.3316 40.6118 19.0083 31.3714 30.95 23.5747C42.8917 15.7779 56.9185 9.72092 73.0304 5.40379C89.0677 1.1066 104.193 -0.627685 118.406 0.200922C127.955 0.757684 136.568 2.6028 144.246 5.73626C147.995 7.26657 151.521 9.10414 154.824 11.249C164.89 17.7858 171.672 27.581 175.17 40.6346C178.667 53.6882 177.697 65.5807 172.258 76.312C171.498 77.8112 170.675 79.2823 169.789 80.7261C169.163 77.9074 167.906 75.4497 166.018 73.353C165.091 72.3236 164.061 71.3784 162.926 70.5172C160.603 68.7538 157.845 67.3429 154.652 66.2845C149.898 64.7092 144.602 63.9216 138.763 63.9216C132.896 63.9216 127.58 64.7024 122.813 66.2641C118.046 67.8259 114.257 70.1752 111.446 73.3122C108.635 76.4492 107.23 80.4078 107.23 85.188C107.23 89.9411 108.635 93.8928 111.446 97.0434C114.257 100.194 118.046 102.564 122.813 104.153C127.58 105.741 132.896 106.536 138.763 106.536C140.143 106.536 141.493 106.492 142.814 106.403ZM91.9944 97.9397C90.8808 99.1348 88.9185 100.404 86.1074 101.749C83.2963 103.093 79.9081 104.227 75.9427 105.151C71.9773 106.074 67.7132 106.536 63.1502 106.536C59.1577 106.536 55.2466 106.149 51.417 105.375C47.5875 104.601 44.1245 103.372 41.0283 101.688C37.932 100.004 35.4672 97.8039 33.6339 95.0879C31.8006 92.3719 30.8839 89.0719 30.8839 85.188C30.8839 81.2498 31.8006 77.9227 33.6339 75.2066C35.4672 72.4906 37.932 70.3042 41.0283 68.6475C44.1245 66.9907 47.5875 65.7888 51.417 65.0419C55.2466 64.295 59.1577 63.9216 63.1502 63.9216C67.7403 63.9216 71.9773 64.329 75.8612 65.1438C79.7451 65.9586 83.079 67.0246 85.8629 68.3419C88.6469 69.6592 90.6635 71.0647 91.9129 72.5585L81.4834 79.4028C79.9624 77.7461 77.6538 76.4221 74.5575 75.4307C71.4613 74.4394 67.6996 73.9437 63.2725 73.9437C61.0997 73.9437 58.9065 74.1135 56.6929 74.4529C54.4793 74.7925 52.4491 75.3696 50.6022 76.1844C48.7554 76.9992 47.2683 78.1399 46.1412 79.6066C45.014 81.0732 44.4504 82.9337 44.4504 85.188C44.4504 87.4151 45.014 89.2553 46.1412 90.7083C47.2683 92.1614 48.7554 93.3157 50.6022 94.1712C52.4491 95.0268 54.4793 95.6311 56.6929 95.9842C58.9065 96.3373 61.0997 96.5138 63.2725 96.5138C67.6181 96.5138 71.3866 95.9706 74.5779 94.8842C77.7692 93.7978 80.0167 92.5484 81.3204 91.1361L91.9944 97.9397ZM138.763 96.3508C144.439 96.3508 148.839 95.3323 151.963 93.2953C155.086 91.2583 156.648 88.5559 156.648 85.188C156.648 81.7386 155.079 79.0294 151.942 77.0603C148.805 75.0912 144.412 74.1066 138.763 74.1066C133.086 74.1066 128.666 75.0912 125.502 77.0603C122.338 79.0294 120.756 81.7386 120.756 85.188C120.756 88.6102 122.338 91.3262 125.502 93.3361C128.666 95.3459 133.086 96.3508 138.763 96.3508Z" fill="currentColor"></path></svg>
            </a> */}
            <a className={classes.link} href="https://twitter.com/Lady_Jazzrabbit" rel="noopener noreferrer" target="_blank">
                <TwitterIcon />
            </a>
            {/* <a className={classes.link} href="https://www.tumblr.com/blog/lady-jazzrabbit" rel="noopener noreferrer" target="_blank">
                <svg  aria-hidden="true" role="img" id="footer-sample-full" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--ri"><path fill="currentColor" d="M6.27 7.63A5.76 5.76 0 0 0 10.815 2h3.03v5.152h3.637v3.636h-3.636v5.454c0 .515.197 1.207.909 1.667c.474.307 1.484.458 3.03.455V22h-4.242a4.545 4.545 0 0 1-4.546-4.545v-6.667H6.27V7.63z"></path></svg>
            </a> */}
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
