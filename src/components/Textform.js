import React, {useState} from 'react'


export default function Textform(props) {
    
    const [text, setText]=useState("");
    const clickHandler = () =>  setText(text.toUpperCase());
    return (
       <div className={`container px-4 py-5 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
            <div className="container">
                <h3>{props.heading}</h3>
                <label for="myBox" className="form-label"></label>
                
                <textarea className="form-control" placeholder="enter text here" onChange={(e)=>setText(e.target.value)} value={text}id="myBox" rows="5"></textarea>

                <button onClick={clickHandler} className="btn btn-outline-primary m-3" >convert</button>
            </div>
            <div className="container">
                <h3>Your Text Summary </h3>
                <p> {text.split(" ").length-1} words and {text.length} characters.</p>
            </div>
        </div> 
    )
}
