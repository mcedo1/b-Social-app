import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FollowerCard = ({ firstName, lastName, userid }) => {
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
    const [followers, setFollowers] = useState([])
    const [follower, setFollower] = useState({
        username:""
    })
    let lista = [
        { firstName: "slavko", lastName: "sosic", userid: "123" },
        { firstName: "milos", lastName: "sosic", userid: "123" },
        { firstName: "janko", lastName: "sosic", userid: "123" },
        { firstName: "marko", lastName: "sosic", userid: "123" },
        { firstName: "milutin", lastName: "sosic", userid: "323" },
        { firstName: "jovan", lastName: "sosic", userid: "323" },
        { firstName: "david", lastName: "sosic", userid: "323" },
        { firstName: "ratko", lastName: "sosic", userid: "323" },
        { firstName: "slobaodan", lastName: "sosic", userid: "135" },
    ];
    return (
        <div className="container mt-5">
            <div
                className="column"
                style={{
                    overflowY: "auto",
                    maxHeight: "90vh",
                    overflowX: "hidden",
                }}>
                {lista.map((follower, index) => {
                    return (
                        <FollowerCard
                            firstName={follower.firstName}
                            lastName={follower.lastName}
                            userid={follower.userid}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default FollowerComponent;
