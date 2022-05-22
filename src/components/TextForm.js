import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to Uppercase","success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted to Lowercase","success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const handleCapitalCase = (event) => {
        const initText = text;
        const splitArray = initText.split(' ');
        for (let i = 0; i < splitArray.length; i++) {
            let firstChar = splitArray[i].charAt(0).toUpperCase();
            splitArray[i] = firstChar + splitArray[i].slice(1);
        }
        let updatedTextString = "";
        for (let i = 0; i < splitArray.length; i++) {
            if (i !== splitArray.length - 1) {
                updatedTextString += splitArray[i] + " ";
            } else {
                updatedTextString += splitArray[i];
            }

        }
        setText(updatedTextString);
        props.showAlert("Text is Capitalized","success");
    }
    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    const darkModeStyle = {
        color: 'white',
        backgroundColor: 'grey'
    };
    const lightModeStyle = {
        color: 'black',
        backgroundColor: 'white'
    };
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'grey' : 'white' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={props.mode === 'light' ? lightModeStyle : darkModeStyle} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalCase}>Convert to Capital Case</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'grey' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.length>0?text.split(" ").length:0} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter some text to preview.'}</p>
            </div>
        </>
    )
}
