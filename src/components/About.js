import React from 'react';



export default function About(props) {

/* const [theme, setTheme]=useState({
    backgroundColor:"white",
    color: "black"
}) */
  /*   function toggleHandler() {
        if (state === "light") {
            return ({
                backgroundColor: "black",
                color: "white"
            });
        }

        else {
            return ({
                backgroundColor: "white",
                color: "black"
            });
        }
    } */
    return (
        <div className={`container bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} >
            
            <div className="px-4 py-5 my-5 ">
                <h1 className="display-5 fw-bold text-center">Centered hero</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary ">Primary button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
