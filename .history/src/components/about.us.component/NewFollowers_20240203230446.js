import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import api, { getId } from '../../API/Api'

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
    const [followes, setFollowers] = useState([])
    useEffect(()=>{
      api('/api/followers/un/'+getId(), )
    }, [])
    return (
      <div className="row d-flex flex-nowrap overflow-auto" style={{ height: '120px' }}>
            {followes.map((follower, index)=> {
                return <NewFollowerCard firstName={follower.firstName} lastName={follower.lastName} userid={follower.userid}/>
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
