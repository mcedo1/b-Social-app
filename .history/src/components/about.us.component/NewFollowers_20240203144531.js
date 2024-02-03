import React from "react";


const NewFollowerCard = ({ firstName, lastName }) => {
    return (
      <div className="card">
        <div className="card-body">
          {firstName} {lastName}
        </div>
      </div>
    );
  };
const NewFollowerComponent = () => {
    return (
      <div className="row-md-6" style={{ overflowX: 'auto', maxWidth: '80vw' }}>
        <NewFollowerCard firstName="Jane" lastName="Smith" />
        <NewFollowerCard firstName="Jane" lastName="Smith" />
        <NewFollowerCard firstName="Jane" lastName="Smith" />
      </div>
    );
  };

function NewFollowers() {
    return (
        <div>
            <div className="container mt-5">
                <div className="">
                   <NewFollowerComponent/>
                </div>
            </div>
        </div>
    );
}

export default NewFollowers;
