import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FollowerCard = ({ username, lastName, userid }) => {
    return (
        <div className="col-md-4 mb-4">
            <div
                className="card"
                style={{ width: "350px", height: "200px", margin: "5px" }}>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title d-flex justify-content-center">{`${firstName} ${lastName}`}</h5>
                    <button className="btn btn-danger">Unfollow</button>
                </div>
            </div>
        </div>
    );
};

const FollowerComponent = () => {
    const [follower, setFollower] = useState({
        username:"slavkososic",
        userId: '123',
        email: 'slavko@gmail.com'
    })
    const [followers, setFollowers] = useState([follower])
   
    return (
        <div className="container mt-5">
            <div
                className="column"
                style={{
                    overflowY: "auto",
                    maxHeight: "90vh",
                    overflowX: "hidden",
                }}>
                {followers.map((f, index) => {
                    return (
                        <FollowerCard
                            firstName={f.firstName}
                            lastName={f.lastName}
                            userid={f.userid}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default FollowerComponent;
