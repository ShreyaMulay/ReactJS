import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpper = () => {
        // console.log("::uppercase clicked"+ text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case","secondary")
    }
    const handleLower = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lower case","warning")

    }
    const handleClear = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Clear textarea","warning")

    }
    const handleSentence = () => {
        // let sentenses = text.split(".");
        let sentenses = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        // console.log(sentenses);
        // let result = sentenses.map(sentence => {
        //     return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        // })
        let newText = sentenses;
        setText(newText)
    }
    const handleCapitalize = () => {
        let sentenses = text.split(".");
        let result = sentenses.map(sentence => {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        })
        let newText = result.join(".");
        setText(newText)
    }
    const handleCopy = () => {
        let textToCopy = document.getElementById("myBox");
        textToCopy.select();
        navigator.clipboard.writeText(textToCopy.value);
        console.log("text copied")
    }
    
    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    

    const [text,setText] = useState('')
    // text = "new text" // Wrong way to update text
//   setText("new text") // correct way 
  return (
    <>
    <div className='container' style={{color: props.mode ==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode ==='dark' ? 'grey' : 'white', color:props.mode ==='dark' ? 'white' : 'black '}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpper}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLower}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleSentence}>Sentence Case</button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalize}>Capitalize Case</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode ==='dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length -1} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something textbox to preview it."}</p>

    </div>
    </>
  )
}
