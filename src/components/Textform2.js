import React, {useState} from 'react'


export default function Textform(props) {
    
    const [data, setData]=useState({});
    const clickHandler = () => {
        var text=data.input.toUpperCase();
        // console.log(text);
         setData({...data, input: text});
    }
    const changeHandler=(e)=>setData({...data, [e.target.name]: e.target.value});
    return (
       
            <div className="container">
                <h3>{props.heading}</h3>
                <label for="myBox" className="form-label"></label>
                <textarea className="form-control" name="input" value={data.input} onChange={changeHandler}  id="myBox" rows="5"></textarea>
                
                <button onClick={clickHandler} className="btn btn-primary m-5">convert</button>
            </div>
            
        
    )
}
