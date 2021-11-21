import PropTypes from 'prop-types'
import { getFakeAPI } from './getFakeAPI';

function WishItem({item, mode} ) {
    
    // console.log(item)

    const wishItemStyleLight = {
        background: "#efefef",
        border: "1px solid ",
        padding: "1rem",
        borderRadius: ".2rem",
        margin:"2rem 0"
    }
    const wishItemStyleDark = {
        background: "#000000",
        color:"white",
        border: "1px solid ",
        padding: "1rem",
        borderRadius: ".2rem",
        margin:"2rem 0"
    }
    return (
        <>
        {/* <div className={`container mx-auto my-3 p-3 bg-${props.mode} 
        text-${
            props.mode === "light" ? "dark" : "light"
          }`}></div> */}
          <div style={ mode==="light"? wishItemStyleLight: wishItemStyleDark}>
            <span>{item.describe}</span>
            <a href={item.link}>Buy</a>
        </div>
        </>
    );
}
// function processList(listItem){
//     return <WishItem item={listItem}  />
// }
function WishList(props) {
    const list = getFakeAPI().wishList;
    
    return(
        <div className={`container px-4 py-5 my-4 bg-${props.mode} `}>
        <h2 className={`container  display-5 fw-bold text-center
        text-${
            props.mode === "light" ? "dark" : "light"
          }`}>{props.heading}</h2>
        {list.map((list)=>(
            <WishItem item={list} mode={props.mode} />
        ))}
        </div>
    );
}

WishList.propTypes = {
    heading: PropTypes.string

};

export default WishList


