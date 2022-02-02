import React from "react";


const FaceRecognition = ({imageUrl})=>{
    return(
        <div className="center">
            <div className="abosulte mt2">
                <img src={imageUrl} alt="face" width="500px" heigh="auto" />
            </div>           
        </div>
    )
}

export default  FaceRecognition;
    ;