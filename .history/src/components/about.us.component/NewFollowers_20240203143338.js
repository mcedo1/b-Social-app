import React from "react";
import FollowerComponent from "../submain.component/followers.component/FollowerComponet";



function NewFollowers() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                   <FollowerComponent/>
                   <FollowerCard/>
                </div>
            </div>
        </div>
    );
}

export default NewFollowers;
