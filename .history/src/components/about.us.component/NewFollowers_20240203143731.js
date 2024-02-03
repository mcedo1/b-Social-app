import React from "react";
import FollowerCard from "../submain.component/followers.component/FollowerComponet";



const NewFollowerComponent = () => {
    return (
      <div className="row" style={{ overflowX: 'auto', maxWidth: '80vw' }}>
        <FollowerCard firstName="John" lastName="Doe" />
        <FollowerCard firstName="Jane" lastName="Smith" />
      </div>
    );
  };

function NewFollowers() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                   <NewFollowerComponent/>
                </div>
            </div>
        </div>
    );
}

export default NewFollowers;
