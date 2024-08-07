import React, { useState } from "react";

function TextForm(props) {
    const [text, setText] = useState('');

    const changeToUppercase = ()=>{
        const newText = text.toUpperCase();
        setText (newText);
        props.showAlert("converted to uppercase!" , "success");
    }

    const changeToLowercase = ()=>{
      const newText = text.toLowerCase();
      setText (newText);
      props.showAlert("converted to lowercase!" , "success");
    }

    const handlerOnChange = (event)=> {
        setText (event.target.value);
    }
    const handlerCopy = () => {
      var text = document.getElementById ("myBox");
      // text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to clioboard" , "success");
    }
  return (
    <>
        <div className="container">
        <h1>{props.Header} </h1>
        <div className="mb-3">
        <textarea className="form-control" placeholder="Enter Your Text Here" value={text} onChange={handlerOnChange} id="myBox" rows="8" ></textarea>
        </div>
        <div className="btn btn-primary mx-2" onClick={changeToUppercase}>Convert To Uppercase</div>
        <div className="btn btn-primary mx-2" onClick={changeToLowercase}>Convert To Lowecase</div>
        <div className="btn btn-primary mx-2" onClick={handlerCopy}>Copy Text</div>
        </div>
        <div className="container">
        <p>{text.length} Chracter and {text.split (" ").length-1} Words</p>
        <p> {text} </p>
        </div>
    </>
  );
}

export default TextForm;