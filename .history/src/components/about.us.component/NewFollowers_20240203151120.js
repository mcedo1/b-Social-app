import React from "react";
import { Button } from "react-bootstrap";


const NewFollowerCard = ({ firstName, lastName }) => {
    const handleFollowReq = () => {
        console.log(firstName, lastName);
    }
    return (
        <div className="col-md-3"  style={{ height: '50px' }}>
        <div className="card">
          <div className="card-body col d-flex justify-content-between">
            <p>{firstName} {lastName}</p> <Button className="btn-success" onClick={ha}>Follow</Button>
          </div>
        </div>
      </div>
    );
  };
const NewFollowerComponent = () => {

    let lista = [
        {firstName: 'slavko', lastName:'sosic'},
        {firstName: 'milos', lastName:'sosic'},
        {firstName: 'janko', lastName:'sosic'},
        {firstName: 'marko', lastName:'sosic'},
        {firstName: 'milutin', lastName:'sosic'},
        {firstName: 'jovan', lastName:'sosic'},
        {firstName: 'david', lastName:'sosic'},
        {firstName: 'ratko', lastName:'sosic'},
        {firstName: 'slobaodan', lastName:'sosic'},
    ]

    return (
      <div className="row d-flex flex-nowrap overflow-auto" style={{ height: '120px' }}>
            {lista.map((follower, index)=> {
                return <NewFollowerCard firstName={follower.firstName} lastName={follower.lastName}/>
            })}
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
