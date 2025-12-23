import {useState} from 'react';
export default function LikeButton(){

    let clicked = ()=>{
        console.log("Liked");
    }
    return(
        <div>
            <p onClick={clicked}>
                <i className="fa-regular fa-heart"></i>
            </p>

        </div>
    );
}