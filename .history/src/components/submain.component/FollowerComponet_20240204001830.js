import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import api, { getId } from "../../API/Api";

const FollowerCard = ({ username, userid }) => {
    return (
        <div className="col-md-4 mb-4">
            <div
                className="card"
                style={{ width: "350px", height: "200px", margin: "5px" }}>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title d-flex justify-content-center">{`${username}`}</h5>
                    <button className="btn btn-danger">Unfollow</button>
                </div>
            </div>
        </div>
    );
};

const FollowerComponent = () => {
    const [follower, setFollower] = useState({
        followeeId: '',
        username: ''
    })
    const [followers, setFollowers] = useState([])
   
    useEffect(()=>{
        let id = getId()
        api(`/api/follow/${id}`, {}, 'get')
        .then(res => {
            console.log('sat')
            if(res.status === 'ok'){
                setFollowers(res.data)
            }
        })
    }, [])

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
                        username={f.username}
                        userid={f.followeeId}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default FollowerComponent;
