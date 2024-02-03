import React from "react";
import FollowerComponent,{FollowerCard from "../submain.component/followers.component/FollowerComponet";



function NewFollowers() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                   <FollowerComponent/>
                   
                </div>
            </div>
        </div>
    );
}

export default NewFollowers;
