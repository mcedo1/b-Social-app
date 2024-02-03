import React from "react";
import { Button } from "react-bootstrap";


const NewFollowerCard = ({ firstName, lastName, userid }) => {
    const handleFollowReq = () => {
        console.log(firstName, lastName, userid);
    }
    return (
        <div className="col-md-3"  style={{ height: '50px' }}>
        <div className="card">
          <div className="card-body col d-flex justify-content-between">
            <p>{firstName} {lastName}</p> <Button className="btn-success" onClick={handleFollowReq}>Follow</Button>
          </div>
        </div>
      </div>
    );
  };
const NewFollowerComponent = () => {

    let lista = [
        {firstName: 'slavko', lastName:'sosic', userid:'123'},
        {firstName: 'milos', lastName:'sosic', userid:'123'},
        {firstName: 'janko', lastName:'sosic', userid:'123'},
        {firstName: 'marko', lastName:'sosic', userid:'123'},
        {firstName: 'milutin', lastName:'sosic', userid:'323'},
        {firstName: 'jovan', lastName:'sosic', userid:'323'},
        {firstName: 'david', lastName:'sosic', userid:'323'},
        {firstName: 'ratko', lastName:'sosic', userid:'323'},
        {firstName: 'slobaodan', lastName:'sosic', userid:'135'},
    ]

    return (
      <div className="row d-flex flex-nowrap overflow-auto" style={{ height: '120px' }}>
            {lista.map((follower, index)=> {
                return <NewFollowerCard firstName={follower.firstName} lastName={follower.lastName} userid={}/>
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
