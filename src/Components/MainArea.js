import React, { useState } from 'react'
import PropTypes from 'prop-types'
function MainArea(props) {

    const [text,setText] = useState('');

    const setOnchangeValue = (event) => {
        let x = event.target.value;
        setText(x);
    }

    const setUppercase = () => {
        let UpperText = text.toUpperCase();
        setText(UpperText);
    }

    const setLowercase = () => {
        let LowerText = text.toLowerCase();
        setText(LowerText);
    }

    return (
        <>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h3 className={`display-4 fw-bold text-center my-2 text-uppercase`}>Text Analyzer</h3>
                <div className="form-floating">
                    <textarea className={`form-control border-${props.mode === 'dark' ? 'success' : 'gray'} text-${props.mode === 'dark' ? 'light' : 'dark'}`} value={text} onChange={setOnchangeValue} style={{height: 100,background: 'none'}}></textarea>
                    <label htmlFor="floatingTextarea2" >Enter Text Here</label>
                </div>
                <div className="btn-container mt-2">
                    <button className='btn btn-primary me-2' onClick={setUppercase}>Uppercase</button>
                    <button className='btn btn-primary me-2' onClick={setLowercase}>Lowercase</button>
                </div>

                <div className='text-preview'>
                    <h3>Text Summary</h3>
                    <p>text length is : {text.length}</p>
                    <p>Words Count: {text.split(' ').length}</p>
                    <h3>Text Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

// MainArea.propTypes = {

// }

export default MainArea

