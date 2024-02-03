import React from "react";


const NewFollowerCard = ({ firstName, lastName }) => {
    return (
        <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            {firstName} {lastName}
          </div>
        </div>
      </div>
    );
  };
const NewFollowerComponent = () => {
    return (
      <div className="row d-flex flex-nowrap overflow-auto" } >
        <NewFollowerCard firstName="Jane" lastName="Smith" />
        <NewFollowerCard firstName="Jane" lastName="Smith" />
        <NewFollowerCard firstName="Jane" lastName="Smith" />
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
                <NewFollowerComponent/>
            </div>
        </div>
    );
}

export default NewFollowers;
