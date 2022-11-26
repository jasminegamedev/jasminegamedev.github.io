import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    title:{
        color:'white',
        textAlign:'center',
    },
    body:{
        marginBottom:'40px',
        marginRight:'20px',
        marginLeft:'20px',
        fontSize:'20px',
    },
    link:{
        color:'cyan',
    },
    details:{
        marginTop:'0px',
        marginBottom:'10px',
    },
    images:{
        marginRight:'20px',
        marginLeft:'20px',
    },
    image:{
        width:'100%',
        marginTop:'10px',
        cursor:'pointer',
    },
    mediaFull:{
        maxWidth:'90%',
        maxHeight:'540px',
        display:'block',
        margin:'auto',
    },
    centered:{
        margin:'auto',
        width:'fit-content',
    },
    code:{
        fontFamily:'Consolas',
        color:'#222',
        backgroundColor:'#AAA',
        padding:'2px',
        fontSize:'20px',
    },
    gameContainer:{
        position:'relative',
        color:'black',
        backgroundColor:'white',
        fontFamily:'sans-serif',
        fontWeight:'bold'
    }
});


export const CohostWordlePage = ({children}) => {
    const [word, setWord] = React.useState("");
    const [output, setOutput] = React.useState("");
    const [error, setError] = React.useState(false);
    const classes = useStyles();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    function buildCordle()
    {
        if(word.length < 5)
        {
            var error = "Error: Word must be exactly 5 characters";
            setOutput(error);
            setError(true);
        }
        else
        {
            var contents = buildBody();
            setOutput(contents);
            setError(false);
        }
    }

    function buildBody()
    {
        var contents = "";
        contents += buildKeyboard(0);
        var body = `<a href="https://jasmine.games/#/samples/cohost-wordle" style="text-decoration:none;"><div style="line-height:1.3;display:flex;flex-direction:column;width:100%;justify-content:center;align-items:center;font-family:sans-serif"><div><span style="background: rgb(131, 37, 79); color: white; font-size: 32px; font-weight: 800; font-family: sans-serif; border-radius: 50%; padding-left: 15px; padding-right: 2px; letter-spacing: 0.1em;">co</span><span style="background: white; color: rgb(131, 37, 79); font-size: 32px; font-weight: 800; font-family: sans-serif; letter-spacing: 0.1em;">rdle</span></div></div></a><div style="width:100%;text-align:center;justify-content:center;align-items:center;">(Desktop only)</div>`
        body += `<div style="position:relative;background:white;width:640px;height:440px;font-weight:650;text-align:center;color:black;user-select:none;clip-path:inset(0px);font-size:24px">${contents}</div>`
        body += `<div style="width:100%;text-align:center;justify-content:center;align-items:center;">(<a href="https://jasmine.games/#/samples/cohost-wordle">Generator</a> built by @jazzrabbit)</div>`
        return body;
    }

    function buildKeyboard(row)
    {
        var contents = "";
        const xOffset = 240;
        const yOffset = 24;

        contents += `<div style="position:absolute;left:${xOffset}px;top:${72 * row}px;pointer-events:none">`
        for(var i = 0; i < word.length; i++)
        {
            contents += buildKeyPicker(word[i], 32*i, 0, 32, 24, i);
        }
        contents += `</div>`;

        contents += `<div style="display:inline-grid;left:0px;position:absolute;pointer-events:none"><div style="display:inline-flex;flex-direction:column">`;
        contents += `<details><summary style="position:absolute;left:${xOffset}px;top:calc(${4 + (72 * row+yOffset)}px + -440*100%);width:240px;height:33px;list-style:none;text-align:right;background:white;z-index:-1"><span style="cursor:pointer;pointer-events:auto;border:2px solid;padding:4px;">Enter</span></summary><div style="height:1px"><div style="position:absolute;left:${xOffset}px;top:${72 * row}px;width:160px;height:32px;text-align:right;background:white;z-index:2;pointer-events:auto">&nbsp;</div><div style="position:absolute;left:${xOffset}px;top:${72 * row+56}px;width:1600px;height:24px;text-align:right;background:white;z-index:2;pointer-events:auto">&nbsp;</div>`
        contents += row < 5 ? `<div>${buildKeyboard(row+1)}</div>` : "";
        contents += "</div></details></div></div>";
        return contents;
    }

    function buildKeyPicker(letter, x, y, width, height, column)
    {
        var contents = `<div style="left:${x}px;position:absolute">`
        contents += `<div style="position:absolute;width:${width}px;height:${height}px;">▲</div>`;
        contents += `<div style="position:absolute;top:${height*2}px;width:${width}px;height:${height}px">▼</div>`;
        for(var i = 0; i < 26; i++)
        {
            if(letter === alphabet[i])
            {
                contents += `<div style="position:absolute;top:calc(${height + 440*i + 4}px + -440*100%);width:${width}px;height:33px;background:lightgreen;z-index:-2"></div>`;
            }
            else if(word.indexOf(alphabet[i]) !== -1)
            {
                contents += `<div style="position:absolute;top:calc(${height + 440*i + 4}px + -440*100%);width:${width}px;height:33px;background:gold;z-index:-2"></div>`;   
            }
        }

        contents += `<div style="clip-path:path('M 0,32 h 26 v 24 h -34 z')"><div style="position:absolute;left:5px;top:calc(${height + 8}px + -24*100%);width:21px;height:624px;background-image:url(https://tinyurl.com/cohordle)"></div></div>`;
        
        contents+=`<div style="font-size:0px">`;
        for(var j = 0; j < 25; j++)
        {
            contents += buildKey(j, width, height);
        }
        contents += `</div>`;
        contents += `<div style="position:absolute;top:${height*3}px;width:${width}px;height:500px;pointer-events:auto"></div>`;   
        contents += `<div style="position:absolute;top:${-500}px;width:${width}px;height:500px;pointer-events:auto"></div>`;   
        contents += `</div>`;
        return contents;
    }
    
    function buildKey(id, width, height)
    {
        var contents = `<details><summary style="position:absolute;top:calc(${height*2 + height*2*id}px + -${height*2}*100%);width:${width}px;height:${height}px;cursor:pointer;pointer-events:auto"></summary><div style="height:1px"></div></details>`;
        return contents;
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(output);
    }
    
    function updateWord(newWord){
        for(var i = 0;i < newWord.length;i++) {
            if(!alphabet.includes(newWord[i].toUpperCase())){
                return;
            }
        }
        setWord(newWord.toUpperCase());
    }

    return (
        <div className={classes.body}>
            <div>
                Hello! This is a generator I built to generate the basic HTML and CSS for a basic Wordle game that can be embeded into a Cohost Post. To use it, type a 5 letter word, and press the generate button to generate it, then copy the html to clipboard and paste it into your clipboard. Warning: it is pretty big currently.
            </div>
            <div className={classes.centered}>
                <input type="text" value={word} onChange={event => updateWord(event.target.value)} maxLength={5}/>
            </div>
            <div className={classes.centered}>
                <button onClick={() => buildCordle()}>Press to Generate Cordle!</button>
            </div>
            {output.length > 0 &&
                <>
                    {!error &&
                        <>
                            <div className={`${classes.gameContainer} ${classes.centered}`}>
                                <div dangerouslySetInnerHTML={{ __html:output }} />
                            </div>
                            <div className={classes.centered}>
                                <button onClick={() => copyToClipboard()}>Copy html to clipboard</button>
                            </div>
                        </>
                    }
                    <p className={classes.code}>
                        {output}
                    </p>
                </>
            }
        </div>
    );
}
