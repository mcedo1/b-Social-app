import React from "react";
import { Button } from "react-bootstrap";


const NewFollowerCard = ({ firstName, lastName }) => {
    return (
        <div className="col-md-3"  style={{ height: '50px' }}>
        <div className="card">
          <div className="card-body">
            <p></p>{firstName} {lastName} <Button className="btn-success">Follow</Button>
          </div>
        </div>
      </div>
    );
  };
const NewFollowerComponent = () => {
    return (
      <div className="row d-flex flex-nowrap overflow-auto"  style={{ height: '80px', overflow: 'hidden' }}>
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
